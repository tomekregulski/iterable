console.log("hello!");

const commentFormHandler = async (event) => {
  event.preventDefault();
  console.log("hello");

  const commentText = document.getElementById("comment-text");
  // const user_id = req.session.user_id;
  // const blog_id = console.log(commentText);

  if (commentText) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ commentText }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to post comment.");
    }
  }
};

document
  .getElementById("submit-comment")
  .addEventListener("submit", commentFormHandler);
