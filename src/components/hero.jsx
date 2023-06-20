import React from 'react'
import "../style/hero-style.css"
import Carousel from "./carousel";

const Hero = () => {
    const images = [
      "../images/hero-bg1.svg",
      "../images/hero-bg2.svg",
      "../images/hero-bg3.svg"
    ];
  
    return (
      <div className='hero-div'>
        <div className='hero-text'>
            <h4>winter 2023 collection</h4>
            <h1>Winter is here...</h1>
            <h4>Grab branded cloths at 30% off*</h4>
            <button className='explore-btn'>
                Explore Collection
            </button>
        </div>
        <Carousel images={images} />
      </div>
    );
  };
  
  export default Hero;