import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import NavigationBar from "../../../components/organisms/NavigationBar/NavigationBar";
import "./QuestionsView.scss";

const QuestionsView = () => {
  return (
    <div className="QuestionsView">
      <NavigationBar></NavigationBar>
      <div className="QuestionsView__SideBar">
        <div className="QuestionsView__SideBar__Title">
          <p>Predmeti</p>
        </div>
        <div className="QuestionsView__SideBar__Classes">
          <Link className="QuestionsView__SideBar__Classes__Class">
            Matematika
          </Link>
          <Link className="QuestionsView__SideBar__Classes__Class">
            Matematika
          </Link>
          <Link className="QuestionsView__SideBar__Classes__Class">
            Matematika
          </Link>
          <Link className="QuestionsView__SideBar__Classes__Class">
            Matematika
          </Link>
          <Link className="QuestionsView__SideBar__Classes__Class">
            Matematika
          </Link>
          <Link className="QuestionsView__SideBar__Classes__Class">
            Matematika
          </Link>
        </div>
      </div>
      <div className="QuestionsView__MainView">
        <p>aaaaaaaaaaaaaaa</p>
      </div>
    </div>
  );
};

export default QuestionsView;
