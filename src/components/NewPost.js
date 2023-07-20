import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../component-styles/NewPost.css";

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [userId, setUserId] = useState(10);

  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = { userId, title, body };
    setIsPending(true);

    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        JSON.stringify(post)
      );
      console.log(response);
      setIsPending(false);
      Navigate('/feed');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='NewPost'>
      <form className='create' onSubmit={handleSubmit}>
        <h2>Add a New Post</h2>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">Post Title</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">Post Body</label>
          <textarea
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          {!isPending && (
            <button
              type="submit"
              className="btn"
              style={{ backgroundColor: "#f1356d", color: "white" }}
            >
              Submit Post
            </button>
          )}
          {isPending && (
            <button
              type="submit"
              className="btn"
              disabled
              style={{ backgroundColor: "#f1356d", color: "white" }}
            >
              Adding Post...
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default NewPost;
