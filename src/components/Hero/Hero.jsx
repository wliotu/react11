import React from 'react'
import './Hero.module.css'

import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'

import Carousel from 'react-bootstrap/Carousel';

function Welcome(props) {
  return <img className="d-block w-100" src={props.img} alt="" />;
}


function Hero() {
  return (
    <Carousel data-bs-theme="dark">
    <Carousel.Item className='img_block'>
      <Welcome img={img1} />
    </Carousel.Item>

    <Carousel.Item className='img_block'>
      <Welcome img={img2} />
    </Carousel.Item>

    <Carousel.Item className='img_block'>
      <Welcome img={img3} />
    </Carousel.Item>
  </Carousel>
  );
}

export default Hero;
