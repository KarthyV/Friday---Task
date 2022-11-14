import React, { useState } from "react";
import Post from "./post";
import postData from "./postData";

const AllPost = ({ allPosts, setAllPosts }) => {
  return (
    <div className="allPosts">
      {allPosts.map((post, index) => {
        return (
          <Post
            post={post}
            key={index}
            index={index}
            setAllPosts={setAllPosts}
            allPosts={allPosts}
          />
        );
      })}
    </div>
  );
};

export default AllPost;
