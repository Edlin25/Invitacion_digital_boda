import React from 'react';
import '../App.css';
import './HeroSection.css';
import image from '../assets/imagen-6.jpg';
import {Fade} from 'react-awesome-reveal';


function HeroSection() {
  return (
    <div className='hero-container'>
        <div className="img"></div>
        <div className="capa-azul"></div>
        <div className="img2"></div>
        <section className='front-wrapper'>
          <div className="title">
            <p>Katy & Min Ho</p>
            <h1>ESTAMOS COMPROMETIDOS</h1>
          </div>
          <Fade className="img-front-page" direction='right' duration={2500}>
            <img src={image}></img>
          </Fade>
        </section>
    </div>

  )
}

export default HeroSection
