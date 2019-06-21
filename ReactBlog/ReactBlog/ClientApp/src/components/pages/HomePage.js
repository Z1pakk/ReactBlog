import React from "react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { connect } from "react-redux";
import * as actions from "../../actions/auth";

const HomePage = ({ isAuthentificated, logout }) => (
  <Container>
    <Typography variant="h1" component="p" gutterBottom>
      Home Page
    </Typography>
    <Typography>
      {isAuthentificated ? (
        <button onClick={() => logout()}>Logout</button>
      ) : (
        <div>
          <Link component={RouterLink} to="/login">
            Login
          </Link>
          <Link component={RouterLink} to="/signup">
            Sign up
          </Link>
        </div>
      )}
    </Typography>
  </Container>
);
HomePage.propTypes = {
  isAuthentificated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};
function mapStateToProps(state) {
  return {
    isAuthentificated: !!state.user.email
  };
}
export default connect(
  mapStateToProps,
  { logout: actions.logout }
)(HomePage);
