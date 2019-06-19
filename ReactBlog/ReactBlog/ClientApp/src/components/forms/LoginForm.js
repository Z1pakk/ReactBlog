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
import { Grid, Link } from "@material-ui/core";
import Validator from "validator";

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
    width: "100%",
    marginTop: "8px"
  },
  loginButton: {
    margin: "24px 0px 16px"
  }
};

export class LoginForm extends Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    showPassword: false,
    errors: {}
  };

  handleChange = name => event => {
    this.setState({
      data: { ...this.state.data, [name]: event.target.value }
    });
  };
  handleClickShowPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword
    });
  };
  handleSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data);
    }
  };

  validate = data => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email!";
    if (!data.password) errors.password = "Can't be blank!";
    return errors;
  };

  render() {
    const { data, showPassword, errors } = this.state;
    const { classes } = this.props;
    return (
      <Container maxWidth="xs" component="main">
        <div className={classes.formContainer}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.formstyle}>
            <TextField
              id="email"
              label="Email*"
              value={data.email}
              onChange={this.handleChange("email")}
              margin="normal"
              fullWidth
              variant="outlined"
              type="email"
              helperText={errors.email}
              error={!!errors.email}
            />
            <TextField
              id="password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              label="Password*"
              value={data.password}
              onChange={this.handleChange("password")}
              fullWidth
              helperText={errors.password}
              error={!!errors.password}
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      aria-label="Toggle password visibility"
                      onClick={this.handleClickShowPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.loginButton}
              fullWidth
              onClick={this.handleSubmit}
            >
              SIGN IN
            </Button>
            <Grid container>
              <Grid item xs={true}>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  Don't have and account? Sign up!
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};
export default withStyles(styles)(LoginForm);
