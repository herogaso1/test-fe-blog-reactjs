import { useState } from "react";
import Login from "./pages/Login";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";
import CreateBlog from "./pages/CreateBlog";
import Layout from "./components/Layout";
import MyPost from "./pages/MyPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blogdetails" element={<BlogDetails />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/mypost" element={<MyPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
