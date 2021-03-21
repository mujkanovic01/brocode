import React ,{useEffect,useState} from 'react'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import NavigationBar from "../../../components/organisms/NavigationBar/NavigationBar";

import URL from '../../../api/URL'
export default function SingleQuestion(props) {
const [question, setquestion] = useState({})
const [answers, setanswers] = useState([])
useEffect(() => {
/*    fetch(URL.url+`/questions/byId/${props.match.params.id}`)
    .then(response=>{console.log(response.json())})
    .then(data=>{console.log(data)})
    .catch(err=>{console.log(err)})
*/


    fetch(URL.url + `/questions/byId/${props.match.params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setquestion(data[0])
       
      });
      fetch(URL.url + `/answers/byQuestionId/${props.match.params.id}`)
      .then((response) => response.json())
      .then((data) => {
      setanswers(data)
       
      });
    
}, [])

    return ( <div className="QuestionsView">
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
      <p>{question._id}</p><br></br>
      <p>{question._desc}</p><br></br>
          <p>{question._date}</p><br></br>
          
       {  answers.map((answer) => {
        return (<div key={answer._id}>
            <p >{answer._desc}</p>
            <p >{answer._id}</p>
            <p >{answer._date}</p>
           
        </div>);
      })}

    </div>
  </div>
    )
}
