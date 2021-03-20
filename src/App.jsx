import React from "react";
import Home from "./views/Home/Home";
import SignUpView from "./views/SignUp/SignUpView";
import SignInView from "./views/SignIn/SignInView";
import { BrowserRouter, Route } from "react-router-dom";
import Routes from "./enums/routes.enum";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path={Routes.home} exact component={Home} />
        <Route path={Routes.login} component={SignInView} />
        <Route path={Routes.signup} component={SignUpView} />

        {/*
        <Route path = '/questions' component = {AllQuestionView} />
        <Route path = '/questions/question' component = {SingleQuestionView} />
        <Route path = '/' component = {Home} />
        */}
      </BrowserRouter>
    </div>
  );
};

export default App;
