import React from "react";
import { Route } from "react-router";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import UserRoute from "./components/routes/UserRoute.js";

const App = () => (
  <div>
    <Route path="/" exact component={HomePage} />
    <Route path="/login" component={LoginPage} />
    <UserRoute path="/dashboard" exact component={DashboardPage} />
  </div>
);
export default App;
