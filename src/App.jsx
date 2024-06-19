import { Route, Routes } from "react-router-dom";
import React from "react";
import Homepage from "./Pages/Homepage";
import PostsFeed from "./Pages/PostsFeed";
import Profile from "./Pages/Profile";
import NotFound from "./Pages/NotFound";
import PostDetails from "./Pages/PostDetails";
import Navbar from "./components/Navbar";
import CreatePostPage from "./Pages/CreatePostPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/posts">
          <Route index element={<PostsFeed />} />
          <Route path=":postId" element={<PostDetails />} />
          <Route path="create" element={<CreatePostPage />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
