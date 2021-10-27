import PostItem from "../post-item/post-item";
import "../posts-list/posts-list.css";

const PostList = ({posts,}) => {
  return (
    <ul className="posts-list">
      {
      posts.map((post) => <PostItem key={post.id} {...post} />)
      }
  </ul>
  );
}

export default PostList;