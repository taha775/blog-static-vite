import React from "react";
import { Routes, Route } from "react-router-dom";

import Blogs from "../Components/Blogs/Blogs";
import SinglePost from "../Components/SinglePost";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Home from "../Components/Home";
import Signup from "../Components/USER/Signup";
import Login from "../Components/USER/Login";



const Navigation = () => {
  return (
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blog" element={<Blogs/>} />
        <Route path="/singlepost" element={<SinglePost/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        
        </Routes>
  );
};

export default Navigation;
