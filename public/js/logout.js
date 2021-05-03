const logout = async () => {
  // Make a POST request to destroy the session in the back end
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // if the logout was successful, redirect to the login page
    document.location.replace("/login");
  } else {
    alert("Failed to log out");
  }
};

document.querySelector("#logout").addEventListener("click", logout);
