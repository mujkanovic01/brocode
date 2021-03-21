import React,{useEffect,useState,useRef} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import NavigationBar from "../../../components/organisms/NavigationBar/NavigationBar";
import "./QuestionsView.scss";
import api from '../../../api/api'
import url from '../../../api/URL'
import QuestionCard from '../QuestionCard/QuestionCard'
const QuestionsView = (props) => {
  const ref = useRef([])
const [questions, setquestions] = useState([])
const [classes, setclasses] = useState([])

  useEffect(() => {

    fetch(`${url.url}/classes`)
      .then((response) => response.json())
      .then((result) =>{ 
        console.log(result)
      setclasses(result)
      })
      .catch((error) => console.log("error", error));

    fetch(`${url.url}/questions/byClassId/${props.match.params.classID}`)
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
   setquestions(result)
    })
    .catch((error) => console.log("error", error));
  }, [])
  return (
    <div className="QuestionsView">
      <NavigationBar></NavigationBar>
      <div className="QuestionsView__SideBar">
        <div className="QuestionsView__SideBar__Title">
          <p>Predmeti</p>
        </div>
        <div className="QuestionsView__SideBar__Classes">

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
      <div className="QuestionsView__MainView">
        { questions ? (questions.map((answer) => {
        return (<div >
            <Link to={`question/${answer._id}`}>
           <QuestionCard question={answer} ></QuestionCard>
           </Link>
        </div>);
})) : ''}
      

      </div>
    </div>

  )};

export default QuestionsView;