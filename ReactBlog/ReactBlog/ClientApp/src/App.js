import React from "react";
import { Route } from "react-router";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import SignUpPage from "./components/pages/SignUpPage";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";

const App = () => (
  <div>
    <Route path="/" exact component={HomePage} />
    <GuestRoute path="/login" component={LoginPage} />
    <GuestRoute path="/signup" component={SignUpPage} />
    <UserRoute path="/dashboard" exact component={DashboardPage} />
  </div>
);
export default App;
