import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import imageOne from '../images/pgcc-1.jpg';
import imageTwo from '../images/pgcc-2.jpg';
import imageThree from '../images/pgcc-3.jpg';
import imageFour from '../images/pgcc-4.jpg';
import imageFive from '../images/pgcc-5.jpg';
import imageSix from '../images/pgcc-6.jpg';

const Gallery = () => (
  <div className="z-0">
    <Carousel arrows infinite dots animationSpeed="1000">
      <img key="1" src={imageOne} alt="carousel-img" />
      <img key="2" src={imageTwo} alt="carousel-img" />
      <img key="3" src={imageThree} alt="carousel-img" />
      <img key="4" src={imageFour} alt="carousel-img" />
      <img key="5" src={imageFive} alt="carousel-img" />
      <img key="6" src={imageSix} alt="carousel-img" />
    </Carousel>
  </div>
);

export default Gallery;
