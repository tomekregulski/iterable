console.log("hello");

const editComment = async (event) => {
  event.preventDefault();

  console.log("hi again");
  const content = document.getElementById("edit-comment-content").value;
  console.log(content);
  const url = window.location.href;
  console.log(url);
  const split_url = url.split("edit/");
  console.log(split_url);
  const id = split_url[1][0];
  console.log(id);
  const blog_id = document.getElementById("submit-edit-comment").value;

  const response = await fetch(`/api/comments/${id}`, {
    method: "PUT",
    body: JSON.stringify({ content }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace(`/blogs/${blog_id}`);
  } else {
    alert("Failed to edit blog.");
  }
};

document
  .getElementById("submit-edit-comment")
  .addEventListener("click", editComment);
