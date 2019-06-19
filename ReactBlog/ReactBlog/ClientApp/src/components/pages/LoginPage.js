import React from "react";
import LoginForm from "../forms/LoginForm";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
class LoginPage extends React.Component {
  submit = data =>
    this.props.login(data).then(() => this.props.history.push("/"));

  render() {
    return (
      <div>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

LoginForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

export default connect(
  null,
  { login }
)(LoginPage);
