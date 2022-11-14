import React, { useState } from "react";
import AllPost from "./AllPost";
import postData from "./postData";

const Middle = () => {
  const [postContent, setPostContent] = useState("");
  const [allPosts, setAllPosts] = useState(postData);
  const handleSubmit = (e) => {
    e.preventDefault();
    setAllPosts([{ content: postContent }, ...allPosts]);
    setPostContent("");
  };
  return (
    <div className="middle">
      <div className="postBox">
        <h2>Home</h2>
        <div className="postBox_middle">
          <div className="profile_avatar">
            <img src="https://avatars.githubusercontent.com/u/89347333?v=4" />
          </div>
          <div className="postBox_input">
            <input
              value={postContent}
              placeholder="What's Happenning"
              type="text"
              onChange={(e) => setPostContent(e.target.value)}
            />
          </div>
        </div>
        <div className="postBox_btn">
          <button onClick={handleSubmit}>Tweet</button>
        </div>
      </div>
      <AllPost setAllPosts={setAllPosts} allPosts={allPosts} />
    </div>
  );
};

export default Middle;
