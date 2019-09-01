import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import { init } from 'ityped'
import { GoogleLogin } from "react-google-login";
import LoginFormWrapper from "../../common/styled/LoginForm/LoginFormWrapper.style";
import { Button, Icon, Divider, Form, Input, Checkbox  } from 'antd';
import Validator from "validator";
import loginImg from "../../testImages/login.jpg";
const FormItem = Form.Item;

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
    componentDidMount(){
      const typedText = document.querySelector('#typedText')
      init(typedText, { showCursor: true,typeSpeed:  150,startDelay: 500,backDelay:  5000, strings: ['Welcome back, sign in with your XipNicks account!', 'Yeah!' ] })
    }
    // handleChange = name => event => {
    //     this.setState({
    //         data: { ...this.state.data, [name]: event.target.value }
    //     });
    // };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
        if (!err) {
            console.log('Received values of form: ', values);
            this.props.history.push("/");
        }
        });
        // const errors = this.validate(this.state.data);
        // this.setState({ errors });
        // if (Object.keys(errors).length === 0) {
        //     this.setState({ loading: true });
        //     this.props.submit(this.state.data).catch(err => {
        //         this.setState({ errors: err.response.data, loading: false });
        //     });
        // }
    };

    // validate = data => {
    //     const errors = {};
    //     if (!Validator.isEmail(data.email)) errors.email = "Invalid email!";
    //     if (!data.password) errors.password = "Can't be blank!";
    //     return errors;
    // };
    // responseGoogle = response => {
    //     console.log(response);
    //     const tokenBlob = new Blob(
    //         [JSON.stringify({ tokenId: response.tokenId }, null, 2)],
    //         { type: "application/json" }
    //     );
    //     console.log(tokenBlob);
    // };
    render() {
        const { getFieldDecorator } = this.props.form;
        const { data, showPassword, errors, loading } = this.state;
        return (
            <LoginFormWrapper className="login-wrap">
              <div className="flex wrap">
                <div className="login-img" style={{ "backgroundImage": `url(${loginImg})` }} />
                <div className="content">
                    <h2>
                        Login to continue
                    </h2>
                    <div className="ityped">
                        <span id="typedText" />
                    </div>
                    <Button className="extLogin bg-google mb-2" type="danger" block size="default">
                        <Icon type="google" />
                        sign in with google
                    </Button>
                    <Button className="extLogin bg-facebook mb-2" type="primary" block size="default">
                        <Icon type="facebook" theme="filled" />
                        sign in with facebook
                    </Button>
                    <Button className="extLogin bg-twitter" type="primary" block size="default">
                        <Icon type="twitter" />
                        sign in with twitter
                    </Button>
                    <Divider>OR</Divider>
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem>
                            {getFieldDecorator('email', {
                            rules: [{ required: true, message: 'Please input your email!' },
                                    { type:"email",message:'Please input correct email!'}],
                            })(
                            <Input size="large" prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Email" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                            <Input size="large" prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('rememberMe', {
                            initialValue: true,
                            })(
                            <Checkbox>Remember me</Checkbox>
                            )}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" className="extLogin" htmlType="submit" block>
                            Sign in
                            </Button>
                        </FormItem>
                    </Form>
                    <p className="additional-info">Don't have an account yet? <RouterLink to="/signup">Sign up</RouterLink></p>
                    <p className="additional-info">Forgot your username or password? <RouterLink to="/resetpassword">Reset password</RouterLink></p>
                    {/* <GoogleLogin
                    clientId="507545800527-9oqfk63ua76fkstpbdbo46icopapms18.apps.googleusercontent.com"
                    buttonText="Google Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                  /> */}
                </div>
              </div>
            </LoginFormWrapper>
              );
            }
}
                
LoginForm.propTypes = {
      submit: PropTypes.func.isRequired,
};
const WrappedLoginForm = Form.create({ name: 'login-form' })(LoginForm);
export default WrappedLoginForm;
