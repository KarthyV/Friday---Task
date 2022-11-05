import "./App.css";
import next from "./images/icon-angle-right.svg";
import left from "./images/icon-angle-left.svg";
import data from "./data";
import darkImg from "./images/image-about-dark.jpg";
import lightImg from "./images/image-about-light.jpg";
import { useState } from "react";
import menuIcon from "./images/icon-hamburger.svg";
import closeIcon from "./images/icon-close.svg";

function App() {
  const [slide, setSlide] = useState(0);
  const [close, setClose] = useState(false);
  const handleClick = (e) => {
    if (e.target.classList.value.includes("next")) {
      if (slide < data.length - 1) {
        setSlide(slide + 1);
      } else setSlide(0);
    }
    if (e.target.classList.value.includes("prev")) {
      if (slide > 0) {
        setSlide(slide - 1);
      }
      if (slide == 0) setSlide(data.length - 1);
    }
  };
  return (
    <div className="App">
      <div className="top_container">
        <div className="top_left">
          <div class="nav_desktop">
            <h2>room</h2>
            <ul class="nav_desktop_menu">
              <li>home</li>
              <li>shop</li>
              <li>about</li>
              <li>contact</li>
            </ul>
          </div>

          <div className="nav_mobile">
            <button onClick={() => setClose(true)} className="openMenu">
              <img src={menuIcon} alt="menuIcon" />
            </button>
            <h2>room</h2>
            {close && (
              <ul className="nav_mobile_menu">
                <li>
                  <button onClick={() => setClose(false)} className="closeBtn">
                    <img src={closeIcon} alt="closeIcon" />
                  </button>
                </li>
                <li>home</li>
                <li>shop</li>
                <li>about</li>
                <li>contact</li>
              </ul>
            )}
          </div>
          <img src={data[slide].image} alt="img1" />
        </div>
        <div className="top_right">
          <div className="top_right_content">
            <h1>{data[slide].heading}</h1>
            <p>{data[slide].content}</p>
            <p className="shopNow">Shop Now ➡</p>
          </div>
          <div className="slideBtn">
            <div onClick={handleClick} className="slideBtn_left">
              <img src={left} alt="" className="prev" />
            </div>
            <div onClick={handleClick} className="slideBtn_right">
              <img src={next} alt="" className="next" />
            </div>
          </div>
        </div>
      </div>
      <div class="bottom_container">
        <div className="bottom_image">
          <img src={darkImg} alt="img1" />
        </div>
        <div class="bottom_content">
          <h1 className="bottom_content_title">About our Furniture</h1>
          <p className="bottom_content_description">
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </p>
        </div>
        <div className="bottom_image">
          <img src={lightImg} alt="img1" />
        </div>
      </div>
    </div>
  );
}

export default App;
