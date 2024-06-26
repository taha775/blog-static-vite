import React from "react";
import { Routes, Route } from "react-router-dom";

import Blogs from "../Components/Blogs/Blogs";
import SinglePost from "../Components/SinglePost";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Home from "../Components/Home";
import Signup from "../Components/USER/Signup";
import Login from "../Components/USER/Login";
import Userpanel from "../Panels/UserPanel/Userpanel";
import Adminpanel from "../Panels/AdminPanel/Adminpanel";
import Writerpanel from "../Panels/WriterPanel/Writerpanel";
import Post from "../Panels/UserPanel/Post";
import Mypost from "../Panels/UserPanel/Mypost";




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
        <Route path="/user-panel/:uid" element={<Userpanel  showNavBar={false} showFooter={false} />} />
        <Route path="/admin-panel"element={<Adminpanel  showNavBar={false} showFooter={false} />} />
        <Route path="/writer-panel/:uid" element={<Writerpanel  showNavBar={false} showFooter={false} />} />
        <Route path="/new-post/:uid" element={<Post  showNavBar={false} showFooter={false} />} />
        <Route path="/my-post/:uid" element={<Mypost  showNavBar={false} showFooter={false} />} />


       
        
        </Routes>
  );
};

export default Navigation;
