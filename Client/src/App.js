import React, {useState, useEffect} from "react";
import Layout from "./layout";
import HomePage from "./pages/homepage";
import Blog from "./pages/blog";
import Author from "./pages/author";
import Login from "./pages/login";
import { Routes, Route, } from "react-router-dom";
import CreateBlog from "./pages/create-blog";
import Post from './pages/post'
import SignUp from "./pages/SignUp";
import PrivateRoute from './layout/privateRoute';
import Dashboard from "./pages/dashboard";
import Auth from './pages/all_auth'


function App() {
    let auth = localStorage.getItem('auth')
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="Blog" exact element={<Blog />} />
       <Route path="Post" exact element={<Post />} />
        {/* <Route path="Author" exact element={<Author />} /> */}
        <Route path="Login" exact element={<Login />} />
        <Route path="add_update_blog" exact element={<CreateBlog />} />
        <Route path="signUp" exact element={<SignUp />} />
        <Route path="/Author" element={<PrivateRoute isAuthenticated={auth} element={<Author />} />} />
        <Route path="/dashboard" element={<PrivateRoute isAuthenticated={auth} element={<Dashboard />} />} />
        <Route path="/Auth" element={<PrivateRoute isAuthenticated={auth} element={<Auth />} />} />
        </Routes>
    </Layout>
  );
}

export default App;
