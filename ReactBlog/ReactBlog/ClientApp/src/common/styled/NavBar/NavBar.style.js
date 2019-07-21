import styled from "styled-components";

const NavBarWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 1399px) and (min-width: 480px) {
    width: calc(100% - 85px - 85px);
  }
  @media (max-width: 479px) {
    width: calc(100% - 30px - 30px);
    margin: 0 auto;
  }
`;

const HeaderWrapper = styled.header`
  min-height: 160px;
  padding: 0;
  align-items: center;
  flex-wrap: nowrap;
  display: flex;
  @media (max-width: 479px) {
    min-height: 100px;

    .blog-description {
      font-size: 13px;
      font-weight: 700;
      position: fixed;
      z-index: 999;
      top: 0;
      bottom: 0;
      left: 0;
      max-width: 90vh;
      height: 86px;
      margin: auto;
      transform: rotate(-90deg) translate(-50%, 50%);
      transform-origin: 0 50%;
      text-align: center;
      letter-spacing: 2.5px;
      text-transform: uppercase;
      color: rgba(18, 22, 50, 0.95);
      align-items: center;
      justify-content: center;
    }
  }
`;

const HeaderLogoWrapper = styled.div`
  box-sizing: border-box;
  padding: 0 20px 0 0;
  flex: 0 1 350px;
  -webkit-box-sizing: border-box;
`;
const BlogDescriptionWrapper = styled.div`
  font-size: 13px;
  font-weight: 700;
  position: fixed;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  max-width: 90vh;
  height: 86px;
  margin: auto;
  transform: rotate(-90deg) translate(-50%, 50%);
  transform-origin: 0 50%;
  text-align: center;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: rgba(18, 22, 50, 0.95);
  align-items: center;
  justify-content: center;

  display: flex;
  flex-wrap: wrap;

  @media (max-width: 479px) {
    visibility: hidden;
  }
`;

const H1Logo = styled.div`
  line-height: 0;
  font-size: initial;
  line-height: initial;
  margin: initial;
  img {
    max-width: 100%;
    max-height: 50px;
  }
  @media (max-width: 479px) {
    img {
      max-height: 40px;
    }
  }
`;

const HeaderNavBarWrapper = styled.div`
  text-align: right;
  flex: 0 0 calc(100% - 350px);
`;

const NavWrapper = styled.nav`
  font-size: 15px;
  font-weight: 700;
  position: relative;
  width: auto;
  padding: 0;
  letter-spacing: 0.9px;

  .nav-list,
  [id^="toggle"] {
    display: none;
  }
  .nav-list {
    z-index: 999;
    min-width: 150px;
    margin: 0;
    padding: 0;
    list-style: none;
    display: block;
  }
  .nav-list > .nav-list-item {
    position: relative;
    display: inline-block;
    background-color: transparent;
  }
  .nav-list-item,
  [id^="toggle"]:checked + .nav-list {
    position: absolute;
    right: 0;
    display: block;
    border-radius: 26px;
    background-color: #f7f7f7;
  }
  .nav-list-item {
    margin: 0;
  }
  .nav-link {
    line-height: 0.5;
    display: block;
    margin: 0;
    padding: 10px;
    text-decoration: none;
  }
  .nav-link:hover ~ .nav-dot {
    background-color: #d3d5dc;
  }
  .nav-link-active ~ .nav-dot {
    background-color: #2821fc !important;
  }

  .hamburger {
    font: inherit;
    display: inline-block;
    overflow: visible;
    margin: 0;
    padding: 10px 15px 0 0;
    cursor: pointer;
    text-transform: none;
    color: inherit;
    border: 0;
    background-color: transparent;
  }
  .hamburger-box {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 24px;
  }
  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    position: absolute;
    width: 30px;
    height: 4px;
    background-color: #161b3d;
  }
  .hamburger-inner {
    top: 50%;
    display: block;
    margin-top: -2px;
  }
  .hamburger-minus .hamburger-inner::before,
  .hamburger-minus .hamburger-inner::after {
    -webkit-transition: bottom 0.08s 0s ease-out, top 0.08s 0s ease-out,
      opacity 0s linear;
    transition: bottom 0.08s 0s ease-out, top 0.08s 0s ease-out,
      opacity 0s linear;
  }
  .hamburger-inner::before {
    top: -10px;
  }
  .hamburger-inner::after {
    bottom: -10px;
  }
  .hamburger-inner::before,
  .hamburger-inner::after {
    display: block;
    content: "";
  }
  .nav-label {
    display: none;
  }
  input[type="checkbox"] {
    display: none;
  }
  .hamburger-minus.is-active .hamburger-inner::before {
    top: 0;
  }
  .hamburger-minus.is-active .hamburger-inner::after {
    bottom: 0;
  }
  .search-open {
    display: inline-block;
    list-style: none;
    text-decoration: none;
  }
  .search-open span {
    display: none;
  }
  .search-open svg,
  .search-close svg {
    cursor: pointer;
    transition: all 0.2s ease-out;
  }
  .search-open svg,
  .search-featured svg {
    fill: #161b3d;
  }
  .search-open svg {
    width: 21px;
    height: 21px;
    margin: 0 0 -5px 5px;
    list-style: none;
  }
  @media (max-width: 1023px) {
    .nav-label {
      display: block;
    }
    .nav-list {
      display: none;
    }
    .nav-list {
      padding: 20px 20px 30px 0;
      min-width: 170px;
      word-break: initial;
    }
    .nav-list > .nav-list-item {
      position: relative;
      display: block;
    }
    .nav-link {
      line-height: 1;
      padding: 10px 10px 10px 30px;
    }
    .nav-list .nav-list-item.search-open {
      background-color: #2821fc;
    }
    .nav-list .nav-list-item.search-open {
      margin: 9px -20px -30px 0;
      padding: 13px 29px 18px 0;
      cursor: pointer;
      border-radius: 0 0 25px 25px;
    }
    .search-open span {
      font-size: 12px;
      display: inline-block;
      padding-right: 2px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: #fff;
    }
    .nav-list .nav-list-item.search-open svg {
      margin-bottom: -6px;
      fill: #fff;
    }
  }
  @media (max-width: 1199px) and (min-width: 1024px) {
    font-size: 13px;
  }
  @media (max-width: 1023px) and (min-width: 480px) {
    .nav-list {
      margin: 20px 0 0 0;
    }
  }
`;
export {
  NavBarWrapper,
  HeaderWrapper,
  HeaderLogoWrapper,
  H1Logo,
  HeaderNavBarWrapper,
  NavWrapper,
  BlogDescriptionWrapper
};
