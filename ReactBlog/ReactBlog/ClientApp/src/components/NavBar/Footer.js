import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo/logo.png";
import { NavLink } from "react-router-dom";
import links from "../../datas/links";

export class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-wrap wrap flex">
          <div className="footer-logo flex">
            <Link to="/" className="is-logo">
              <img alt="logo" src={logo} />
            </Link>
          </div>
          <div className="footer-nav">
            <ul className="nav-list">
              {
                links.map(item =>
                  <li key={item.title} className="nav-list-item">
                    <NavLink
                      activeClassName="nav-link-active"
                      to={item.url}
                      {...item.attr}
                      className="nav-link"
                    >
                      {item.title}
                    </NavLink>
                    <span className="nav-dot"></span>
                  </li>
                )
              }
            </ul>
          </div>
        </div>
        <div className="footer-copyright">
          <span>©&nbsp;{new Date().getFullYear()}&nbsp;<Link to="/">XipNicks</Link>.</span> All Right Reserved.
        </div>
      </div>
    );
  }
}


export default Footer;
