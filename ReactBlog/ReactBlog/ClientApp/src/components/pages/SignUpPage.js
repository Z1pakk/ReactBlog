import React, { Component } from "react";
import { signup } from "../../actions/users";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SignUpForm from "../forms/SignUpForm";

export class SignUpPage extends Component {
  submit = data =>
    this.props.signup(data).then(() => this.props.push("/dashboard"));
  render() {
    return (
      <div>
        <SignUpForm submit={this.submit} />
      </div>
    );
  }
}
SignUpPage.propTypes = {
  signup: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired
};
export default connect(
  null,
  {
    signup,
    push
  }
)(SignUpPage);
