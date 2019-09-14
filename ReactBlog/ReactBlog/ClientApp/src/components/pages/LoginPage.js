import React from "react";
import LoginForm from "../forms/LoginForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import { push } from "connected-react-router";
class LoginPage extends React.Component {
  submit = data =>
    this.props.login(data)
      .then(() => this.props.push("/dashboard"));

  render() {
    return (
        <LoginForm submit={this.submit} />
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired
};

export default connect(
  null,
  { login, push }
)(LoginPage);
