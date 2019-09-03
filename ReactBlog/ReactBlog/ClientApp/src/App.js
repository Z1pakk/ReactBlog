import React from 'react';
import 'antd/dist/antd.css';
import './style.css';
import { Route } from "react-router";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import SignUpPage from "./components/pages/SignUpPage";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";
import ThanksMessage from "./components/messages/ThanksMessage";
import NavBar from "./components/NavBar/NavBar";
import { GlobalWrapper, FooterWrapper } from "./common/styled/App/App.style";
import Footer from "./components/NavBar/Footer";
import { BackTop } from 'antd';
import ConfirmEmailPage from "./components/pages/ConfirmEmailPage";

const HomePage=React.lazy(()=>import("./components/pages/HomePage"))
const PostInfoPage=React.lazy(()=>import("./components/pages/PostInfoPage"))
const AuthorsPage=React.lazy(()=>import("./components/pages/Authors/AuthorsPage"))
const AuthorInfoPage=React.lazy(()=>import("./components/pages/AuthorInfoPage"))
const TagsPage=React.lazy(()=>import("./components/pages/Tags/TagsPage"))
const TagInfoPage=React.lazy(()=>import("./components/pages/TagInfoPage"))

export class App extends React.Component {
  render() {
    return (
      <GlobalWrapper>
          <NavBar />
          <div className="main">
            <BackTop />
            <Route path="/" exact component={HomePage} />
            <Route path="/post/:id" component={PostInfoPage} />
            <Route path="/authors" component={AuthorsPage} />
            <Route path="/author/:userName" component={AuthorInfoPage} />
            <Route path="/tags" component={TagsPage} />
            <Route path="/tag/:name" component={TagInfoPage} />
            <Route path="/confirm" component={ConfirmEmailPage} />

            <GuestRoute path="/login" component={LoginPage} />
            <GuestRoute path="/signup" component={SignUpPage} />
            <UserRoute path="/dashboard" exact component={DashboardPage} />
            <UserRoute path="/confirmation" exact component={ThanksMessage} />
          </div>
          <FooterWrapper>
            <Footer />
          </FooterWrapper>
      </GlobalWrapper>
    );
  }
}

export default App;
