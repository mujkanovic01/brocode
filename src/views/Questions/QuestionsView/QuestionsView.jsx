import React from "react";
import NavigationBar from "../../../components/organisms/NavigationBar/NavigationBar";
import "./QuestionsView.scss";

const QuestionsView = () => {
  return (
    <div className="QuestionsView">
      <NavigationBar></NavigationBar>
      <div className="QuestionView__SideBar"></div>
    </div>
  );
};

export default QuestionsView;
