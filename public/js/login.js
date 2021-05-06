console.log("hello!");

const loginFormHandler = async (event) => {
  // prevets the page from refreshing when the login credentials are submitted
  console.log("hello! hello");
  event.preventDefault();

  // grab input data from email and password fields
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  console.log(email);
  console.log(password);

  if (email && password) {
    //send email and password to the server
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

// document
//   .querySelector(".signup-form")
//   .addEventListener("submit", signupFormHandler);
