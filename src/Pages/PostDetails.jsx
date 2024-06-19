import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import axios from "axios";

function PostDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const postId = params.postId;
  const postUrl = `http://localhost:8001/posts/${postId}`;
  const { data: post, setData: setPosts } = useAxios(postUrl);

  async function handleDeletePost(postId) {
    try {
      await axios.delete(postUrl);
      navigate(-1);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <p>
          likes:
          {post.reactions ? post.reactions.likes : 0}
        </p>
        <p>Created at: {post.createdAt}</p>
        <button onClick={() => handleDeletePost(post.id)}>DELETE</button>
      </div>
    </>
  );
}

export default PostDetails;
