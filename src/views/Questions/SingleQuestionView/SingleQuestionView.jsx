import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import NavigationBar from "../../../components/organisms/NavigationBar/NavigationBar";
import "./SingleQuestionView.scss";
import URL from "../../../api/URL";
import ArrowUp from "@material-ui/icons/KeyboardArrowUp";
import ArrowDown from "@material-ui/icons/KeyboardArrowDown";

export default function SingleQuestionView(props) {
  const [question, setquestion] = useState({});
  const [answers, setanswers] = useState([]);
  useEffect(() => {
    fetch(URL.url + `/questions/byId/${props.match.params.id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0]);
        setquestion(data[0]);
      });

    fetch(URL.url + `/answers/byQuestionId/${props.match.params.id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setanswers(data);
      });
  }, []);

  const arrayOfUpwotedAnswers = [];
  const arrayOfDownwotedAnswers = [];
  function handleArrowUpClick(id) {
    console.log(id);
  }

  return (
    <div className="SingleQuestionView">
      <NavigationBar></NavigationBar>
      <div className="SingleQuestionView__SideBar">
        <div className="SingleQuestionView__SideBar__Title">
          <p>Predmeti</p>
        </div>
        <div className="SingleQuestionView__SideBar__Classes">
          <Link className="SingleQuestionView__SideBar__Classes__Class">
            Matematika
          </Link>
          <Link className="SingleQuestionView__SideBar__Classes__Class">
            Matematika
          </Link>
          <Link className="SingleQuestionView__SideBar__Classes__Class">
            Matematika
          </Link>
          <Link className="SingleQuestionView__SideBar__Classes__Class">
            Matematika
          </Link>
          <Link className="SingleQuestionView__SideBar__Classes__Class">
            Matematika
          </Link>
          <Link className="SingleQuestionView__SideBar__Classes__Class">
            Matematika
          </Link>
        </div>
      </div>
      <div className="SingleQuestionView__MainView">
        <div className="SingleQuestionView__MainView__Question">
          <p className="SingleQuestionView__MainView__Question__Title">
            {question.title}
          </p>
          <p className="SingleQuestionView__MainView__Question__Date">
            21.03.2021
          </p>
          <p className="SingleQuestionView__MainView__Question__Description">
            {question._desc}
          </p>
        </div>
        <div className="SingleQuestionView__MainView__Answers">
          <p className="SingleQuestionView__MainView__Answers__Title">
            {answers.length} odgovora
          </p>
          {answers.map((answer) => {
            return (
              <div
                className="SingleQuestionView__MainView__Answers__Answer"
                key={answer._id}
              >
                <div className="SingleQuestionView__MainView__Answers__Answer__Votes">
                  <ArrowUp
                    value={answer._id}
                    onClick={() => handleArrowUpClick(answer._id)}
                  ></ArrowUp>
                  <p>{answer.votes}</p>
                  <ArrowDown></ArrowDown>
                </div>
                <div className="SingleQuestionView__MainView__Answers__Answer__Text">
                  <p className="SingleQuestionView__MainView__Answers__Answer__Text__Description">
                    {answer._desc}
                  </p>

                  <div className="SingleQuestionView__MainView__Answers__Answer__Text__Date">
                    <p>21.03.2021</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
