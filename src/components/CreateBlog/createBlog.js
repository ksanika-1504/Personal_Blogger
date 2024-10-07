import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './createBlog.css'; // Ensure you import your CSS file here

function CreateBlog() {
  const [blogName, setBlogName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [image, setImage] = useState(null);
  const [content, setContent] = useState('');

  const handleImageChange = (event) => {
    console.log('Image input triggered');
    setImage(event.target.files[0]);
    console.log('Image uploaded:', event.target.files[0]);
  };

  const handleButtonClick = () => {
    document.getElementById('contained-button-file').click();
  };

  return (
    <>
      <div className="container">
        <div className="form-group">
          <label htmlFor="blogName">Blog Name</label>
          <input
            type="text"
            id="blogName"
            placeholder="Enter a Blog name"
            name="blogName"
            value={blogName}
            onChange={(e) => setBlogName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="contained-button-file">Upload Image</label>
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="contained-button-file"
            type="file"
            onChange={handleImageChange}
          />
          <button
            className="upload-button"
            onClick={handleButtonClick}
          >
            Upload
          </button>
        </div>
      </div>
      <div className="form-group full-width">
        <label htmlFor="blogContent">Content</label>
        <ReactQuill
          value={content}
          onChange={setContent}
          placeholder="Write your blog content here..."
        />
      </div>
    </>
  );
}

export default CreateBlog;
