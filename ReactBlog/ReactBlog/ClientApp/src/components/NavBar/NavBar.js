import React, { Component } from "react";
import {
  NavBarWrapper,
  HeaderWrapper,
  HeaderLogoWrapper,
  H1Logo,
  HeaderNavBarWrapper,
  NavWrapper,
  BlogDescriptionWrapper
} from "../../common/styled/NavBar/NavBar.style";
import logo from "../../logo/logo.png";
import { Link as RouterLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
// import { HamburgerMenu } from "react-hamburger-menu"

export class NavBar extends Component {
  state = {
    isOpened: false
  };

  handleChange = () => {
    this.setState({
      isOpened: !this.state.isOpened
    });
  };
  render() {
    return (
      <NavBarWrapper>
        <HeaderWrapper>
          <HeaderLogoWrapper>
            <H1Logo>
              <RouterLink to="/">
                <img src={logo} />
              </RouterLink>
            </H1Logo>
          </HeaderLogoWrapper>
          <HeaderNavBarWrapper>
            <NavWrapper>
              <label
                for="toggle"
                className={classnames(
                  "nav-label hamburger hamburger-minus",
                  this.state.isOpened && "is-active"
                )}
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </label>
              <input
                onChange={this.handleChange}
                type="checkbox"
                id="toggle"
                className="nav-toggle"
              />
              <ul className="nav-list">
                <li className="nav-list-item">
                  <NavLink
                    activeClassName="nav-link-active"
                    to="/"
                    exact
                    className="nav-link"
                  >
                    Home
                  </NavLink>
                  <span className="nav-dot"></span>
                </li>
                <li className="nav-list-item">
                  <NavLink
                    activeClassName="nav-link-active"
                    to="/login"
                    className="nav-link"
                  >
                    Sign In
                  </NavLink>
                  <span className="nav-dot"></span>
                </li>
                <li className="nav-list-item">
                  <NavLink
                    activeClassName="nav-link-active"
                    to="/signup"
                    className="nav-link"
                  >
                    Sign Up
                  </NavLink>
                  <span className="nav-dot"></span>
                </li>
                <li className="nav-list-item search-open">
                  <span>Search</span>
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.420346,15.5800244 L24,21.1596784 L21.1596784,24 L15.5800244,18.420346 C13.9925104,19.4717887 12.088789,20.0841064 10.0420532,20.0841064 C4.49598037,20.0841064 0,15.5881261 0,10.0420532 C0,4.49598037 4.49598037,0 10.0420532,0 C15.5881261,0 20.0841064,4.49598037 20.0841064,10.0420532 C20.0841064,12.088789 19.4717887,13.9925104 18.420346,15.5800244 Z M10.0420532,16.0672851 C13.3696969,16.0672851 16.0672851,13.3696969 16.0672851,10.0420532 C16.0672851,6.71440951 13.3696969,4.01682129 10.0420532,4.01682129 C6.71440951,4.01682129 4.01682129,6.71440951 4.01682129,10.0420532 C4.01682129,13.3696969 6.71440951,16.0672851 10.0420532,16.0672851 Z"></path>
                  </svg>
                </li>
              </ul>
            </NavWrapper>
          </HeaderNavBarWrapper>
          <BlogDescriptionWrapper>
            Thoughts, stories and ideas
          </BlogDescriptionWrapper>
        </HeaderWrapper>
      </NavBarWrapper>
    );
  }
}
export default NavBar;
