const deleteComment = async (element) => {
  console.log("delete");
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
