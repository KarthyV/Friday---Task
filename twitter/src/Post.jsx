import React, { useState } from "react";

const Post = ({ post, index, setAllPosts, allPosts }) => {
  const [editContent, setEditContent] = useState(post.content);
  const [editPost, setEditPost] = useState(false);
  const [likePost, setLikePost] = useState(false);
  const handleEdit = (e) => {
    setEditContent(e.target.value);
  };

  const handleLike = (e) => {
    e.preventDefault();
    setLikePost(true);
  };
  const saveEdit = () => {
    const allPostCopy = [...allPosts];
    allPostCopy.splice(index, 1, { content: editContent });
    setAllPosts(allPostCopy);
    setEditPost(false);
  };

  const deletePost = () => {
    const allPostCopy = [...allPosts];
    allPostCopy.splice(index, 1);
    setAllPosts(allPostCopy);
  };
  return (
    <div className="post">
      <div className="profile_avatar">
        <img src="https://avatars.githubusercontent.com/u/89347333?v=4" />
      </div>
      <div className="post_content">
        <div className="post_header">
          <h1 className="post_user">Username</h1>
          <div className="profile_menu">
            {!editPost ? (
              <>
                <i
                  class="fa-solid fa-pen-to-square icon"
                  onClick={() => setEditPost(true)}
                ></i>
                <i class="fa-solid fa-trash icon" onClick={deletePost}></i>
              </>
            ) : (
              <i class="fa-solid fa-floppy-disk icon" onClick={saveEdit}></i>
            )}
          </div>
        </div>
        {!editPost ? (
          <p>{post.content}</p>
        ) : (
          <input type="text" value={editContent} onChange={handleEdit} />
        )}
        <button onClick={handleLike} className="likeBtn">
          <i
            class={`fa-heart ${likePost ? "fa-solid liked" : "fa-regular"}`}
          ></i>
          <span>{likePost ? "Liked" : "Like"}</span>
        </button>
      </div>
    </div>
  );
};

export default Post;
