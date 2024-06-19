import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function CreatePostPage() {
  const newPostTitleRef = useRef(null);
  const newPostBodyRef = useRef(null);
  const navigate = useNavigate();

  function getDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // Months are zero-based, so add 1
    const date = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const formattedDateTime = `${year}-${String(month).padStart(
      2,
      "0"
    )}-${String(date).padStart(2, "0")} ${String(hours).padStart(
      2,
      "0"
    )}:${String(minutes).padStart(2, "0")}`;
    return formattedDateTime;
  }

  getDate();

  async function handleSubmitPost(ev) {
    try {
      ev.preventDefault();
      const newPost = {
        title: newPostTitleRef.current.value,
        body: newPostBodyRef.current.value,
        userId: "9b5b7206-0ddf-4fda-850b-58822e33383c",
        reactions: {
          likes: 0,
        },
        comments: [],
        createdAt: getDate(),
        updatedAt: "",
      };
      await axios.post("http://localhost:8001/posts", newPost);
      navigate(-1);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <h1>Create a new post</h1>
      <form onSubmit={handleSubmitPost}>
        <input type="text" placeholder="Post title" ref={newPostTitleRef} />
        <textarea ref={newPostBodyRef}></textarea>
        <button type="submit">Create post</button>
      </form>
    </>
  );
}

export default CreatePostPage;
