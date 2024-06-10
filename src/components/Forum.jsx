import React, { useState } from 'react';
import UserNavbar from './UserNavbar';

const Forum = () => {
  const [newPost, setNewPost] = useState('');
  const [posts, setPosts] = useState([]);

  const handlePostChange = (e) => {
    setNewPost(e.target.value);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim() !== '') {
      setPosts([...posts, { id: posts.length + 1, content: newPost }]);
      setNewPost('');
    }
  };

  const handleDeletePost = (postId) => {
    const updatedPosts = posts.filter(post => post.id !== postId);
    setPosts(updatedPosts);
  };

  return (
    <div>
      <UserNavbar/>
    <div className="container">
      <h1>Interactive Forums</h1>
      <div className="row">
        <div className="col-md-8">
          <h2>Recent Posts</h2>
          <ul className="list-group">
            {posts.map((post) => (
              <li key={post.id} className="list-group-item d-flex justify-content-between align-items-center">
                {post.content}
                <button className="btn btn-danger btn-sm" onClick={() => handleDeletePost(post.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-4">
          <h2>Create a Post</h2>
          <form onSubmit={handlePostSubmit}>
            <div className="mb-3">
              <label htmlFor="postContent" className="form-label">Post Content</label>
              <textarea
                className="form-control"
                id="postContent"
                rows="3"
                value={newPost}
                onChange={handlePostChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Forum;
