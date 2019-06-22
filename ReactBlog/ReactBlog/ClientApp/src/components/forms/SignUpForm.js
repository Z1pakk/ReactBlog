import React, { Component } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Link as RouterLink } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Grid,
  Link,
  FormHelperText,
  CircularProgress,
  FormControlLabel,
  Checkbox,
  FormControl
} from "@material-ui/core";
import Validator from "validator";

const recaptchaRef = React.createRef();
const styles = {
  formContainer: {
    display: "flex",
    marginTop: "64px",
    alignItems: "center",
    flexDirection: "column"
  },
  avatar: {
    margin: "8px",
    backgroundColor: "#f50057"
  },
  formstyle: {
    width: "100%"
  },
  loginButton: {
    margin: "24px 0px 16px"
  },
  error: {
    borderStyle: "solid",
    borderWidth: "1px",
    padding: "14px 14px",
    borderColor: "#f50057",
    borderRadius: "4px",
    backgroundColor: "#f50057",
    color: "white"
  },
  gridStyle: {
    marginTop: "24px"
  }
};
export class SignUpForm extends Component {
  state = {
    data: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
      promotions: false,
      recaptchaToken: ""
    },
    showPassword: false,
    loading: false,
    errors: {}
  };

  handleChange = name => event => {
    if (!!this.state.errors[name]) {
      let errors = Object.assign({}, this.state.errors);
      delete errors[name];
      delete errors.global;
      this.setState({
        data: { ...this.state.data, [name]: event.target.value },
        errors
      });
    } else {
      this.setState({
        data: { ...this.state.data, [name]: event.target.value }
      });
    }
  };
  handleChangeCheckBox = name => event => {
    this.setState({
      data: { ...this.state.data, [name]: event.target.checked }
    });
  };
  handleClickShowPassword = name => event => {
    this.setState({
      [name]: !this.state[name]
    });
  };
  handleSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props.submit(this.state.data).catch(err => {
        this.setState({ errors: err.response.data, loading: false });
        recaptchaRef.current.reset();
      });
    }
  };

  validate = data => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email!";
    if (!data.firstName) errors.firstName = "Can't be blank!";
    if (!data.lastName) errors.lastName = "Can't be blank!";
    if (!data.password) errors.password = "Can't be blank!";
    if (!data.confirmPassword) errors.confirmPassword = "Can't be blank!";
    if (!data.recaptchaToken) errors.recaptchaToken = "Verify captcha!";
    if (!Validator.equals(data.password, data.confirmPassword)) {
      errors.confirmPassword = "Confirm password is not equals!";
    }
    return errors;
  };
  verifyCallback = value => {
    // Here you will get the final recaptchaToken!!!
    this.setState({
      data: { ...this.state.data, recaptchaToken: value }
    });
  };
  render() {
    const { data, loading, errors, showPassword } = this.state;
    const { classes } = this.props;
    return (
      <Container maxWidth="xs" component="main">
        <div className={classes.formContainer}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.formstyle}>
            {errors.global && (
              <FormHelperText component="div" className={classes.error}>
                <Typography variant="h5">Something went wrong!</Typography>
                <Typography variant="body1">{errors.global}</Typography>
              </FormHelperText>
            )}
            <Grid container spacing={2} className={classes.gridStyle}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  label="First Name "
                  value={data.firstName}
                  onChange={this.handleChange("firstName")}
                  fullWidth
                  variant="outlined"
                  type="text"
                  helperText={errors.firstName}
                  error={!!errors.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  label="Last Name "
                  value={data.lastName}
                  onChange={this.handleChange("lastName")}
                  fullWidth
                  variant="outlined"
                  type="text"
                  helperText={errors.lastName}
                  error={!!errors.lastName}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="email"
                  label="Email Address "
                  value={data.email}
                  onChange={this.handleChange("email")}
                  fullWidth
                  variant="outlined"
                  type="email"
                  helperText={errors.email}
                  error={!!errors.email}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="password"
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  label="Password "
                  value={data.password}
                  onChange={this.handleChange("password")}
                  fullWidth
                  helperText={errors.password}
                  error={!!errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                          aria-label="Toggle password visibility"
                          onClick={this.handleClickShowPassword("showPassword")}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  id="confirmPassword"
                  variant="outlined"
                  type={"password"}
                  label="Confirm Password "
                  value={data.confirmPassword}
                  onChange={this.handleChange("confirmPassword")}
                  fullWidth
                  helperText={errors.confirmPassword}
                  error={!!errors.confirmPassword}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={data.promotions}
                      onChange={this.handleChangeCheckBox("promotions")}
                      value="promotions"
                      color="primary"
                    />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <FormControl
                  className={classes.formControl}
                  error={!!errors.recaptchaToken}
                >
                  <ReCAPTCHA
                    sitekey="6LeeFaoUAAAAABSGfp5O5OVzD1sXK3AemQefh9Fw"
                    ref={recaptchaRef}
                    error="awdaw"
                    onChange={this.verifyCallback}
                  />
                  {!!errors.recaptchaToken && (
                    <FormHelperText id="component-error-text">
                      {errors.recaptchaToken}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              className={classes.loginButton}
              fullWidth
              onClick={this.handleSubmit}
              {...(loading ? { disabled: true } : {})}
            >
              {loading ? (
                <CircularProgress
                  size={25}
                  color="primary"
                  variant="indeterminate"
                /> // Size 14 works pretty well
              ) : (
                <span>SIGN UP</span>
              )}
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link component={RouterLink} to="/login" variant="body2">
                  Already have an account? Sign in!
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}
SignUpForm.propTypes = {
  submit: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(SignUpForm);
