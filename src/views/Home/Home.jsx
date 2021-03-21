import React from "react";
import { useHistory } from "react-router-dom";
import Authenticator from "../../authentication/Authenticator";
import Routes from "../../enums/routes.enum";

const Home = () => {
  const history = useHistory();

  const checkIfAuthenticated = (isAuthenticated) => {
    if (isAuthenticated) {
      history.push("/questions/3");
    } else {
      history.push(Routes.login);
    }
  };

  return (
    <Authenticator checkIfAuthenticated={checkIfAuthenticated}></Authenticator>
  );
};

export default Home;
