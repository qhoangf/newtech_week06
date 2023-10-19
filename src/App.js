import PostForm from './components/PostForm/PostForm';
import PostList from './components/PostList/PostList';
import EditPost from './components/EditPost/EditPost';
import Header from './components/Header/Header';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AddComment from './components/CommentForm/AddComment';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      const parsedPosts = JSON.parse(storedPosts);
      setPosts(parsedPosts);
    }
  }, []);

  const handleNewPost = (newPost) => {
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const handleUpdate = (updatedPosts) => {
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  const handleDelete = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<PostList posts={posts} onDelete={handleDelete} />} />
        <Route path="/add" element={<PostForm onNewPost={handleNewPost} />} />
        <Route path="/edit/:id" element={<EditPost posts={posts} onUpdate={handleUpdate} />} />
        <Route path="/comment/:id" element={<AddComment posts={posts} onUpdate={handleUpdate} />} />
      </Routes>
    </div>
  );
}

export default App;
