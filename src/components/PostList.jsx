import React from "react";
import PostItem from "./PostItem";

function PostList(props) {
  const { posts, setPosts } = props;
  return (
    <div>
      {posts.length === 0 ? (
        <p>No todos available</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <PostItem key={post.id} post={post} setPosts={setPosts} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default PostList;
