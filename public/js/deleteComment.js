console.log("hello");

const deleteComment = async (element) => {
  //   event.preventDefault();

  console.log("hi delete comment");
  const comment_id = element.value;
  console.log(comment_id);

  const response = await fetch(`/api/comments/${comment_id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert("Failed to delete comment.");
  }
};
// const buttons = document.querySelectorAll(".delete-comment");
// for (const button of buttons) {
//   button.addEventListener("click", deleteComment);
// }
