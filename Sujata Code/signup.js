async function Register() {
  let signup_data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    username: document.getElementById("username").value,
    mobile: document.getElementById("mobile").value,
    description: document.getElementById("description").value,
  };
  signup_data = JSON.stringify(signup_data);

  console.log("signup_data", signup_data);

  let register_api = `https://masai-api-mocker.herokuapp.com/auth/register`;

  let response = await fetch(register_api, {
    //in case of post request sending data to the server
    //in post request we have to write all these things
    method: "POST",
    //send data in body
    body: signup_data,
    //some extra information about my request
    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await response.json();

  console.log("data", data);
}
