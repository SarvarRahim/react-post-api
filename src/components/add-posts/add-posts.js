import { useRef, useState } from "react";
import "../add-posts/add-posts.css";

const AddPosts = ({posts, setPosts}) => {

  const addInputTitleRef = useRef();
  const addInputDescRef = useRef();
  const [loading, setLoading] =  useState(false)

  const handleSubmitForm = (evt) => {
    evt.preventDefault();

    const inputTitleValue = addInputTitleRef.current.value;
    const inputDescValue = addInputDescRef.current.value;

  if(inputTitleValue.trim() && inputDescValue.trim()) {
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: 'PUT',
      body: JSON.stringify({
        title: inputTitleValue,
        body: inputDescValue,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => (response.json()))
    .then((data) => {
      setLoading(false)
      console.log(data);
      setPosts([
        ...posts,
        {
          title: inputTitleValue,
          body: inputDescValue,
          userId: 1,
        }
      ])
    })
    addInputTitleRef.current.value = "";
    addInputDescRef.current.value = "";
  }
}

  return (
    <form onSubmit={handleSubmitForm} className="posts-form" action="#">
      <input ref={addInputTitleRef} className="posts-text" type="text" name="title" placeholder="Enter title" />
      <textarea ref={addInputDescRef} className="posts-text post-body__desc" name="body" cols="30" placeholder="Enter description"></textarea>
      <button className="post-add__btn" disabled={loading} type="submit">{loading ? "Added..." : "Add post"}</button>
    </form>
  );
}

export default AddPosts;