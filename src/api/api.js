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

    fetch(`${url.url}/signup`, requestOptions)
      .then((response) => console.log(response.text()))
      .then((result) => console.log("ae", result))
      .catch((error) => console.log("error", error));
  }
}

export default new api();
