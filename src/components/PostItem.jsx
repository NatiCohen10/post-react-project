import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function PostItem(props) {
  const { post, setPosts } = props;
  const postUrl = `http://localhost:8001/posts/${post.id}`;

  async function handleLikeUpdate(postId) {
    try {
      const updatedReactions = {
        ...post.reactions,
        likes: post.reactions.likes + 1,
      };

      await axios.patch(postUrl, {
        reactions: updatedReactions,
      });
      setPosts((prevPosts) =>
        prevPosts.map((post) => {
          return post.id === postId
            ? { ...post, reactions: updatedReactions }
            : post;
        })
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function handleDeletePost(postId) {
    try {
      await axios.delete(postUrl);
      setPosts((prevPosts) => {
        return prevPosts.filter((post) => {
          return post.id !== postId;
        });
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <li>
      <h3>
        <Link to={`${post.id}`}>{post.title}</Link>
      </h3>
      <p>likes: {post.reactions.likes}</p>
      <button onClick={() => handleLikeUpdate(post.id)}>Like post</button>
      <div>
        <button onClick={() => handleDeletePost(post.id)}>DELETE</button>
      </div>
    </li>
  );
}

export default PostItem;
