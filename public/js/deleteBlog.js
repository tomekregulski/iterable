const deleteBlog = async (event) => {
  event.preventDefault();

  console.log("hi delete");
  const blog_id = document.getElementById("delete-post").value;
  console.log(blog_id);

  const response = await fetch(`/api/blogs/${blog_id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to delete blog.");
  }
};

document.getElementById("delete-post").addEventListener("click", deleteBlog);
