console.log("hello!");

const createComment = async (event) => {
  event.preventDefault();

  console.log("hi again");
  const content = document.getElementById("comment-text").value;
  console.log(content);
  const url = window.location.href;
  console.log(url);
  const split_url = url.split("blogs/");
  console.log(split_url);
  const blog_id = split_url[1][0];
  console.log(blog_id);

  const response = await fetch("/api/comments/", {
    method: "POST",
    body: JSON.stringify({ blog_id, content }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.reload();
  } else {
    alert("Failed to create comment.");
  }
};

document
  .getElementById("submit-comment")
  .addEventListener("click", createComment);
