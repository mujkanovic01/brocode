import url from "./URL";

class api {
  // Sign up
  signUp(name, email, password) {
    var urlencoded = new URLSearchParams();
    urlencoded.append("name", name);
    urlencoded.append("email", email);
    urlencoded.append("password", password);
    urlencoded.append("role", "student");

    var requestOptions = {
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
      method: "POST",
      redirect: "follow",
      body: urlencoded,
    };

    fetch(`${url.url}/signup`, requestOptions)
      .then((response) => console.log(response.text()))
      .then((result) => console.log("ae", result))
      .catch((error) => console.log("error", error));
  }

  signIn(email, password) {
    var urlencoded = new URLSearchParams();
    urlencoded.append("email", email);
    urlencoded.append("password", password);

    var requestOptions = {
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
      method: "POST",
      redirect: "follow",
      body: urlencoded,
    };
    fetch(url.url + "/login", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.accessToken);
        localStorage.setItem("Authorization", `Bearer ${data.accessToken}`);
      });
  }

  getAllClasses(){
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`${url.url}/classes`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  getClassesById(id){
    var urlencoded = new URLSearchParams();
    urlencoded.append("id", id);

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`${url.url}/classes/byId/${id}`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  getQuestionsByClassId(class_id){
    var urlencoded = new URLSearchParams();
    urlencoded.append("class_id", class_id);

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`${url.url}/questions/byClassId/${class_id}`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  postQuestion(desc, isanonymous, user_id, class_id, title){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("desc", desc);
    urlencoded.append("isanonymous", isanonymous);
    urlencoded.append("user_id", user_id);
    urlencoded.append("class_id", class_id);
    urlencoded.append("title", title);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    fetch(`${url.url}/questions/newQuestion`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  getAnswersByQuestionId(question_id){
    var urlencoded = new URLSearchParams();
    urlencoded.append("question_id", question_id);

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`${url.url}/answers/byQuestionId/${question_id}`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  /*postAnswer(){                              WIP
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("desc", desc);
    urlencoded.append("isanonymous", isanonymous);
    urlencoded.append("user_id", user_id);
    urlencoded.append("class_id", class_id);
    urlencoded.append("title", title);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    fetch(`${url.url}/questions/newQuestion`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }*/
}

export default new api();
