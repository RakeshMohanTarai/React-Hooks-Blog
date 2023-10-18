import React from "react";
import { Routes, Route } from "react-router-dom"; // Here we use { Routes, Route }(V6) instead of { Switch, Route }(V5)
import { CreatePost, Home, Navbar, PostDetail } from '.';

function App() {
  return (
    <div className="container">
      <Navbar />
      {/* Here we use <Routes> instead of <Switch> */}
      <Routes>
        {/* Here use element instead of components and also use is as an object using {<Item />} */}
        <Route path="/" element={<Home />} /> 
        <Route path="/post/:postId" element={<PostDetail />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
