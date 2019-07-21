import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions/auth";
import Carousel from "../Carousel/Carousel";

export class HomePage extends React.Component {
  render() {
    return (
      <div className="content">
        <Carousel />
        {/* <Typography variant="h1" component="p" gutterBottom>
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
            </Typography> */}
      </div>
    );
  }
}

// HomePage.propTypes = {
//   isAuthentificated: PropTypes.bool.isRequired,
//   logout: PropTypes.func.isRequired
// };
// function mapStateToProps(state) {
//   return {
//     isAuthentificated: !!state.user.email
//   };
// }
// export default connect(
//   mapStateToProps,
//   { logout: actions.logout }
// )(HomePage);

export default connect(
  null,
  {}
)(HomePage);
