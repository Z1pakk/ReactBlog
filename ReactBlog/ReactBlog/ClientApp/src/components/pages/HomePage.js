import React from "react";
import { connect } from "react-redux";
// import * as actions from "../../actions/auth";
import Carousel from "../Carousel/Carousel";
import Posts from "../Posts/Posts";

export class HomePage extends React.Component {
  render() {
    return (
      <div className="homePage">
        <Carousel />
        <Posts isFeatured={true} />
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
