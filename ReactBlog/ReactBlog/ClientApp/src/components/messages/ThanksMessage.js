import React from "react";
import { Alert } from "reactstrap";
import { Container } from "@material-ui/core";
import { connect } from "react-redux";
import { confirmEmail } from "../../actions/auth";

export class ThanksMessage {
  state = {
    error: ""
  };

  componentDidMount() {
    const userId = this.props.match.params.user;
    const code = this.props.match.params.code;
    if (!!userId && !!code) {
      //this.props
      //  .confirmEmail(userId, code)
      //  .then(() => )
      //  .catch((error)=>{
      //      this.setState({error:error})
      //  });
    }
  }

  render() {
    const { error } = this.state;
    return (
      <Container className="mt-2">
        <Alert color="success">
          <h4 className="alert-heading">Thank you for confirm email!</h4>
        </Alert>
        {error && (
          <Alert color="danger">
            <h4 className="alert-heading">Error when confirm email({error})</h4>
          </Alert>
        )}
      </Container>
    );
  }
}

export default connect(
  null,
  { confirmEmail }
)(ThanksMessage);
