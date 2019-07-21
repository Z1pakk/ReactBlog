import React from "react";
import { Route } from "react-router";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import SignUpPage from "./components/pages/SignUpPage";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";
import ThanksMessage from "./components/messages/ThanksMessage";
import NavBar from "./components/NavBar/NavBar";
import {GlobalWrapper,FooterWrapper} from "./common/styled/App/App.style";

export class App extends React.Component {
  render() {
    return (
      <GlobalWrapper>
        <NavBar />
        <div class="main">
        <Carousel />
        </div>
      <div>
        <Route path="/" exact component={HomePage} />
        <GuestRoute path="/login" component={LoginPage} />
        <GuestRoute path="/signup" component={SignUpPage} />
        <UserRoute path="/dashboard" exact component={DashboardPage} />
        <UserRoute path="/confirmation" exact component={ThanksMessage} />
      </div>
      <FooterWrapper>

      </FooterWrapper>
      </GlobalWrapper>
    );
  }
}

export default App;
