import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Button from "@material-ui/core/Button";
import NavigationBar from "../../../components/organisms/NavigationBar/NavigationBar";
import "./QuestionsView.scss";
import QuestionCard from "../QuestionCard/QuestionCard";

const QuestionsView = () => {
  return (
    <div className="QuestionsView">
      <NavigationBar></NavigationBar>
      <div className="QuestionsView__SideBar">
        <div className="QuestionsView__SideBar__Title">
          <p>Predmeti</p>
        </div>
        <div className="QuestionsView__SideBar__Classes">
          <Link className="QuestionsView__SideBar__Classes__Class Class--Selected">
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
        <div className="QuestionsView__MainView__Header">
          <p className="QuestionsView__MainView__Header__Title">
            Nedavno postavljena pitanja
          </p>
          <Button
            className="QuestionsView__MainView__Header__Button"
            style={{ height: "30px", fontSize: "12px" }}
            variant="contained"
            color="primary"
          >
            Postavi pitanje
          </Button>
        </div>
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
      </div>
    </div>
  );
};

export default QuestionsView;
