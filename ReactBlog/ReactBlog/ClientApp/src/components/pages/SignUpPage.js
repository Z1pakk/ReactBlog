import React, { Component } from "react";
import { Result, Button } from 'antd';
import { Link } from "react-router-dom"
import { signup } from "../../actions/users";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SignUpForm from "../forms/SignUpForm";


export class SignUpPage extends Component {
  state = {
    confirm: false
  }
  submit = data =>
    signup(data)
      .then(() =>
        this.setState({
          confirm: true
        })
      )
      .catch((err) => new Promise((resolve, reject) => {
          return reject(err);
        }));
render() {
  return (
    <div>
      {!this.state.confirm ?
        <SignUpForm submit={this.submit} />
        :
        <Result
          className="wrap"
          title="We sent confirmation mail to you're email adress! Confirm it and go back!"
          extra={
            <Button type="primary" key="home">
              <Link to="/">Go Home</Link>
            </Button>
          } />
      }
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
    push,
    signup
  }
)(SignUpPage);
