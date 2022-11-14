import React from "react";

const Left = () => {
  return (
    <div className="left">
      <div className="logo">
        <i className="fa-brands fa-twitter icon"></i>
      </div>
      <div className="features">
        <div className="feature_item">
          <i class="fa-solid fa-house-user icon"></i> <span>Home</span>
        </div>
        <div className="feature_item">
          <i class="fa-solid fa-hashtag icon"></i> <span>Explore</span>
        </div>
        <div className="feature_item">
          <i class="fa-solid fa-bell icon"></i> <span>Notifications</span>
        </div>
        <div className="feature_item">
          <i class="fa-solid fa-message icon"></i> <span>Messages</span>
        </div>
        <div className="feature_item">
          <i class="fa-solid fa-bookmark icon"></i> <span>Bookmarks</span>
        </div>
        <div className="feature_item">
          <i class="fa-solid fa-list icon"></i> <span>Lists</span>
        </div>
        <div className="feature_item">
          <i class="fa-solid fa-user icon"></i> <span>Profile</span>
        </div>
        <div className="feature_item">
          <i class="fa-solid fa-ellipsis icon"></i> <span>More</span>
        </div>
      </div>
      <div className="profile">
        <div className="profile_avatar">
          <img src="https://avatars.githubusercontent.com/u/89347333?v=4" />
        </div>
        <div className="profile_content">
          <h3>Karthick</h3>
          <h4>@karthy_V_</h4>
        </div>
        <div className="profile_menu">
          <i class="fa-solid fa-ellipsis icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Left;
