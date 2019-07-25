import React from 'react';
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
import HomePage from "./components/pages/HomePage";
import AuthorsPage from "./components/pages/AuthorsPage";

const PostPage=React.lazy(()=>import("./components/pages/PostPage"))
const AuthorPage=React.lazy(()=>import("./components/pages/AuthorPage"))
const TagsPage=React.lazy(()=>import("./components/pages/TagsPage"))
const TagPage=React.lazy(()=>import("./components/pages/TagPage"))

export class App extends React.Component {
  render() {
    return (
      <GlobalWrapper>
          <NavBar />
          <div className="main">
            <Route path="/" exact component={HomePage} />
            <Route path="/post/:name" component={PostPage} />
            <Route path="/authors" component={AuthorsPage} />
            <Route path="/author/:name" component={AuthorPage} />
            <Route path="/tags" component={TagsPage} />
            <Route path="/tag/:name" component={TagPage} />

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
