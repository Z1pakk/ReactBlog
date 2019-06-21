import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router";
import { connect } from "react-redux";

const UserRoute = ({ iAuthentificated, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !iAuthentificated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/dashboard" />
      )
    }
  />
);
UserRoute.propTypes = {
  component: PropTypes.object.isRequired,
  iAuthentificated: PropTypes.bool.isRequired
};
function mapStateToProps(state) {
  return {
    iAuthentificated: !!state.user.email
  };
}

export default connect(mapStateToProps)(UserRoute);
