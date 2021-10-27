import AddPosts from "./components/add-posts/add-posts";
import EditPosts from "./components/edit-posts/edit-posts";
import PostList from "./components/posts-list/posts-list";
import "./assets/css/styles.css";
import { useEffect, useState } from "react";

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 2)));
  }, [])

  return (
    <>
    <AddPosts posts={posts} setPosts={setPosts} />

    <div className="main-wrapper">
      <PostList posts={posts} setPosts={setPosts} />

      <EditPosts posts={posts} setPosts={setPosts} />
    </div>
    </>
    );
  }

  export default App;
