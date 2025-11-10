import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp/index.jsx";
import CreateBlog from "./pages/CreateBlog";
import { Toaster } from "react-hot-toast";
import BlogDetails from "./pages/BlogDetails";
const App = () => {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/blog-details/:id" element={<BlogDetails />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
