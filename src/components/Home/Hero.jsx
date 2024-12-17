import React from 'react'
import '../../index.css'
import bgvideo from '../../video/bg_video.mp4'
const Hero = () => {
  return (
    <div id='Hero_video'>
        <div id="hero_blur"></div>
      <video src={bgvideo} autoPlay loop muted ></video>
      <div id='hero_text'>
      <h1 className=''>Wel-come To <span> Aprosis</span> 
      </h1>
      <p className='max-sm:text-[15px]'>Parivar Limited</p>
     
      </div>
    </div>
  )
}

export default Hero
