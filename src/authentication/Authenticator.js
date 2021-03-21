import url from "../api/URL";

const Authenticator = ({ checkIfAuthenticated }) => {
  console.log("log");
  // code to check if authenticated
  fetch(url.url + "/isAuthenticated", {
    headers: {
      Authorization: localStorage.getItem("Authorization"),
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      checkIfAuthenticated(true);
    })
    .catch((e) => {
      console.log(e);
      checkIfAuthenticated(false);
    });

  return null;
};

export default Authenticator;
