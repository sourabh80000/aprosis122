import React from "react";
import "../../index.css";
import bgvideo from "../../video/bg_video.mp4";
const Hero = () => {
  return (
    <div id="Hero_video">
      <div id="hero_blur"></div>
      <video src={bgvideo} autoPlay loop muted></video>
     
    </div>
  );
};

export default Hero;
