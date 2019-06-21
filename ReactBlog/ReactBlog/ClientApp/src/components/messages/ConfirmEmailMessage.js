import React from "react";
import { Alert } from "reactstrap";
import { Container } from "@material-ui/core";

const ConfirmEmailMessage = () => {
  return (
    <Container className="mt-2">
      <Alert color="primary">
        <h4 className="alert-heading">
          Please, verify your email to unlock awesomeness!
        </h4>
      </Alert>
    </Container>
  );
};

export default ConfirmEmailMessage;
