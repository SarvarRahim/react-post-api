import "../posts-list/posts-list.css";

const PostItem = ({title, body}) => {
  return (
    <li className="posts-item">
      <h3 className="posts-item__title">{title}</h3>
      <p className="posts-item__desc">{body}</p>
    </li>
  );
}

export default PostItem;