import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="carousel">
      <img src={images[activeIndex]} alt={`Image ${activeIndex + 1}`} />

      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={index === activeIndex ? 'active' : ''}
            onClick={() => handleIndicatorClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
