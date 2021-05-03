const loginFormHandler = async (event) => {
  // prevets the page from refreshing when the login credentials are submitted
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

// const signupFormHandler = async (event) => {
//   event.preventDefault();

//   const name = document.querySelector("#username-signup").value.trim();
//   const email = document.querySelector("#email-signup").value.trim();
//   const password = document.querySelector("#password-signup").value.trim();

//   if (name && email && password) {
//     const response = await fetch("/api/users", {
//       method: "POST",
//       body: JSON.stringify({ name, email, password }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       document.location.replace("/");
//     } else {
//       alert("Failed to sign up.");
//     }
//   }
// };

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

// document
//   .querySelector(".signup-form")
//   .addEventListener("submit", signupFormHandler);
