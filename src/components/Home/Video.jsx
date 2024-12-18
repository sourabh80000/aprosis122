import React from "react";
import "../../index.css";
import bgvideo from "../../video/bg_video.mp4";
import All_contant from "../Hero/All_contant";
const Video = () => {
  return (
    <div id="Hero_video">
      <div id="hero_blur"></div>
      <video src={bgvideo} autoPlay loop muted></video>
     <All_contant />
    </div>
  );
};

export default Video;
