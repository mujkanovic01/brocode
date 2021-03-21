import React from "react";
import Home from "./views/Home/Home";
import SignUpView from "./views/SignUp/SignUpView";
import SignInView from "./views/SignIn/SignInView";
import QuestionsView from "./views/Questions/QuestionsView/QuestionsView";
import SingleQuestion from "./views/Questions/SingleQuestion/SingleQuestion"
import { BrowserRouter, Route } from "react-router-dom";
import Routes from "./enums/routes.enum";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path={Routes.home} exact component={Home} />
        <Route path={Routes.login} exact component={SignInView} />
        <Route path={Routes.signup} exact component={SignUpView} />
        <Route path={Routes.questions} exact component={QuestionsView} />
        
        <Route path = '/questions/question/:id' component = {SingleQuestion} />
       
        
      </BrowserRouter>
    </div>
  );
};

export default App;
