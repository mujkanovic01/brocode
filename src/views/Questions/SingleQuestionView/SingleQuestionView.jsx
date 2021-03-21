import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import NavigationBar from "../../../components/organisms/NavigationBar/NavigationBar";
import "./SingleQuestionView.scss";
import URL from "../../../api/URL";
import ArrowUp from "@material-ui/icons/KeyboardArrowUp";
import ArrowDown from "@material-ui/icons/KeyboardArrowDown";
import api from "../../../api/api";
import url from "../../../api/URL";


export default function SingleQuestionView(props) {
  const [question, setquestion] = useState({});
  const [answers, setanswers] = useState([]);
  const [classes, setclasses] = useState([])

  useEffect(() => {

    fetch(`${url.url}/classes`)
    .then((response) => response.json())
    .then((result) =>{ 
      console.log(result)
    setclasses(result)
    })
    .catch((error) => console.log("error", error));

    fetch(URL.url + `/questions/byId/${props.match.params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setquestion(data[0]);
      });

    fetch(URL.url + `/answers/byQuestionId/${props.match.params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setanswers(data);
      });
  }, []);

  const arrayOfUpwotedAnswers = [];
  const arrayOfDownwotedAnswers = [];

  function handleArrowUpClick(id) {
    if (arrayOfUpwotedAnswers.includes(id)) return;
    arrayOfUpwotedAnswers.push(id);
    api.voteIncrement(id);
    window.location.reload();
  }

  function handleArrowDownClick(id) {
    if (arrayOfDownwotedAnswers.includes(id)) return;
    arrayOfDownwotedAnswers.push(id);
    api.voteDecrement(id);
    window.location.reload();

  }

  return (
    <div className="SingleQuestionView">
      <NavigationBar></NavigationBar>
      <div className="SingleQuestionView__SideBar">
        <div className="SingleQuestionView__SideBar__Title">
         <p>Predmeti</p>
        </div>
        <div className="SingleQuestionView__SideBar__Classes">
         
        { classes ? (classes.map((singleclass) => {
        
       if(props.match.params.classID==singleclass._id){
        return (<div >
            
            <a href={`http://localhost:3000/questions/${singleclass._id}`} className="QuestionsView__SideBar__Classes__Class Class--Selected" >
              {singleclass.title}
            </a>
        </div>);}
        else{
          return(
            <a href={`http://localhost:3000/questions/${singleclass._id}`}  className="QuestionsView__SideBar__Classes__Class" >
            {singleclass.title}
          </a>)
        }

})) : ''}
         
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
                  <ArrowDown
                    value={answer._id}
                    onClick={() => handleArrowDownClick(answer._id)}
                  ></ArrowDown>
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
