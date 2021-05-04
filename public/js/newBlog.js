console.log("hello!");

const createComment = async (event) => {
  event.preventDefault();

  console.log("hi again");
  const title = document.getElementById("blog-title").value;
  console.log(title);
  const content = document.getElementById("blog-content").value;
  console.log(content);
  //   const url = window.location.href;
  //   console.log(url);
  //   const split_url = url.split("blogs/");
  //   console.log(split_url);
  //   const blog_id = split_url[1][0];
  //   console.log(blog_id);

  const response = await fetch("/api/blogs/", {
    method: "POST",
    body: JSON.stringify({ title, content }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to create blog.");
  }
};

document.getElementById("submit-blog").addEventListener("click", createComment);
