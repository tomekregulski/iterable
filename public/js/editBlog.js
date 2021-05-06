console.log("hello");

const editBlog = async (event) => {
  event.preventDefault();

  console.log("hi again");
  const title = document.getElementById("edit-blog-title").value;
  console.log(title);
  const content = document.getElementById("edit-blog-content").value;
  console.log(content);
  const url = window.location.href;
  console.log(url);
  const split_url = url.split("edit/");
  console.log(split_url);
  const id = split_url[1][0];
  console.log(id);

  const response = await fetch(`/api/blogs/${id}`, {
    method: "PUT",
    body: JSON.stringify({ title, content }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to edit blog.");
  }
};

document.getElementById("submit-edit-blog").addEventListener("click", editBlog);
