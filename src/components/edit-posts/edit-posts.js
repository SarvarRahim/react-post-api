import "../edit-posts/edit-posts.css";

const EditPosts = () => {
  return (
    <form className="edit-post__form" action="">
      <textarea className="edit-post__text" name="" id="" cols="30" rows="10"></textarea>
      <textarea className="edit-post__text" name="" id="" cols="30" rows="10"></textarea>
      <button className="edit-post__btn">Edit post</button>
    </form>
  );
}

export default EditPosts;