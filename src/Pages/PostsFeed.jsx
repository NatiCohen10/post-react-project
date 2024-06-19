import axios from "axios";
import React, { useEffect, useState } from "react";
import PostList from "../components/PostList";
import useAxios from "../hooks/useAxios";
import { Link } from "react-router-dom";

function PostsFeed() {
  const url = "http://localhost:8001/";
  const { data: posts, setData: setPosts } = useAxios(url + "posts");
  async function fetchPosts() {
    try {
      const response = await axios.get(url + "posts");
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <PostList posts={posts} setPosts={setPosts} />
    </>
  );
}

export default PostsFeed;
