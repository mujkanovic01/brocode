import React from "react";
import Home from "./views/Home/Home";
import SignUpView from "./views/SignUp/SignUpView";
import SignInView from "./views/SignIn/SignInView";
import QuestionsView from "./views/Questions/QuestionsView/QuestionsView";
import SingleQuestionView from "./views/Questions/SingleQuestionView/SingleQuestionView";
import { BrowserRouter, Route } from "react-router-dom";
import Routes from "./enums/routes.enum";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path={Routes.home} exact component={Home} />
        <Route path={Routes.login} exact component={SignInView} />
        <Route path={Routes.signup} exact component={SignUpView} />
        <Route path={"/questions/:classID"} exact component={QuestionsView} />
        
        <Route path = '/questions/question/:id' component = {SingleQuestionView} />
       
        
      </BrowserRouter>
    </div>
  );
};

export default App;
