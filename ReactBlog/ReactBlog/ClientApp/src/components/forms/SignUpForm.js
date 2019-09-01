import React, { Component } from "react";
import PropTypes from "prop-types";
import SignUpFormWrapper from "../../common/styled/SignUpForm/SignUpFormWrapper.style.js";
import { Link as RouterLink } from "react-router-dom";
import { Button, Icon, Divider, Form, Input, Checkbox, Tooltip } from 'antd';
import ReCAPTCHA from "react-google-recaptcha";
import { init } from 'ityped'
import { hasErrors,hasAllValues,checkNoSpaces } from '../../common/functions/validate';
import { reCaptchaKey } from '../../config';
import signUpImg from "../../testImages/signUp.jpg";

const FormItem = Form.Item;

const recaptchaRef = React.createRef();
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
    confirmDirty: false,
    loading: false,
    errors: {}
  };
  componentDidMount() {
    const typedText = document.querySelector('#typedText');
    init(typedText, { showCursor: true, typeSpeed: 150, startDelay: 500, backDelay: 5000, strings: ['Discovering and connecting with creative talent around the globe.'] });
  }
  // handleChange = name => event => {
  //   if (!!this.state.errors[name]) {
  //     let errors = Object.assign({}, this.state.errors);
  //     delete errors[name];
  //     delete errors.global;
  //     this.setState({
  //       data: { ...this.state.data, [name]: event.target.value },
  //       errors
  //     });
  //   } else {
  //     this.setState({
  //       data: { ...this.state.data, [name]: event.target.value }
  //     });
  //   }
  // };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.history.push("/");
      }
    });
    // const errors = this.validate(this.state.data);
    // this.setState({ errors });
    // if (Object.keys(errors).length === 0) {
    //   this.setState({ loading: true });
    //   this.props.submit(this.state.data).catch(err => {
    //     this.setState({ errors: err.response.data, loading: false });
    //     recaptchaRef.current.reset();
    //   });
    // }
  };
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirmPassword'], { force: true });
    }
    callback();
  }

  verifyCallback = value => {
    // Here you will get the final recaptchaToken!!!
    this.setState({
      data: { ...this.state.data, recaptchaToken: value }
    });
  };

  render() {
    const { data, loading, errors } = this.state;
    const { getFieldDecorator,getFieldsError,getFieldsValue } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 8,
        },
      },
    };
    return (
      <SignUpFormWrapper className="login-wrap">
        <div className="flex wrap">
          <div className="login-img" style={{ "backgroundImage": `url(${signUpImg})` }} />
          <div className="content">
            <h2>
              Create an Account
            </h2>
            <div className="ityped">
              <span id="typedText" />
            </div>
            <Button className="extLogin bg-google mb-2" type="danger" block size="default">
              <Icon type="google" />
              sign up with google
            </Button>
            <Button className="extLogin bg-facebook mb-2" type="primary" block size="default">
              <Icon type="facebook" theme="filled" />
              sign up with facebook
            </Button>
            <Button className="extLogin bg-twitter" type="primary" block size="default">
              <Icon type="twitter" />
              sign up with twitter
            </Button>
            <Divider>OR</Divider>
            <Form onSubmit={this.handleSubmit}>
              <FormItem
                {...formItemLayout}
                label={(
                  <span>
                    User Name&nbsp;
                    <Tooltip title="What do you want other to call you?">
                      <Icon type="question-circle-o" />
                    </Tooltip>
                  </span>
                )}
                hasFeedback
              >
                {getFieldDecorator('userName', {
                  rules: [
                    { required: true, message: 'Please input your User Name!', whitespace: true },
                    { min: 4, message: 'Minimum lenght: 4' },
                    { validator: checkNoSpaces}
                ],
                })(
                  <Input placeholder="Example: XipUserName" />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="E-mail"
                hasFeedback
              >
                {getFieldDecorator('email', {
                  rules: [{
                    type: 'email', message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true, message: 'Please input your E-mail!',
                  }],
                })(
                  <Input placeholder="Example: xipnicks@gmail.com" />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="First Name"
                hasFeedback
              >
                {getFieldDecorator('firstName', {
                  rules: [
                    { required: true, message: 'Please input your First name!', whitespace: true }
                ],
                })(
                  <Input placeholder="Example: Vlad" />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Last Name"
                hasFeedback
              >
                {getFieldDecorator('lastName', {
                  rules: [
                    { required: true, message: 'Please input your Last name!', whitespace: true }
                ],
                })(
                  <Input placeholder="Example: Shumskyi" />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Password"
                hasFeedback
              >
                {getFieldDecorator('password', {
                  rules: [{
                    required: true, message: 'Please input your password!',
                  },
                  {
                    min: 6, message: 'Minimum lenght:6'
                  },
                  {
                    validator: this.checkConfirm,
                  }],
                })(
                  <Input.Password name="password" placeholder="Example: 123456" />
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Confirm Password"
                hasFeedback
              >
                {getFieldDecorator('confirmPassword', {
                  rules: [{
                    required: true, message: 'Please confirm your password!',
                  }, {
                    validator: this.checkPassword,
                  }],
                })(
                  <Input.Password name="cofirmPassword" placeholder="Example: 123456" onBlur={this.handleConfirmBlur} />
                )}
              </FormItem>

                <ReCAPTCHA
                  sitekey={reCaptchaKey}
                  ref={recaptchaRef}
                  onChange={this.verifyCallback}
                  size="invisible"
                />

              <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
                {getFieldDecorator('agreement', {
                  valuePropName: 'checked',
                  initialValue:false
                })(
                  <Checkbox>I have read the&nbsp;
                    <RouterLink to="/agreement">
                      agreement
                    </RouterLink>
                  </Checkbox>
                )}
              </FormItem>
             
              <FormItem {...tailFormItemLayout}>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  className="extLogin"
                  disabled={
                            hasErrors(getFieldsError())
                            ||
                            !hasAllValues(getFieldsValue())
                           }
                >
                    Sign Up
                </Button>
              </FormItem>
            </Form>

          </div>
        </div>
      </SignUpFormWrapper>
    );
  }
}
SignUpForm.propTypes = {
  submit: PropTypes.func.isRequired
};
const WrappedSignUpForm = Form.create()(SignUpForm);

export default WrappedSignUpForm;
