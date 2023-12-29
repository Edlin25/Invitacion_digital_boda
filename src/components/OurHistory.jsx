import React from 'react';
import './OurHistory.css';
import image1 from '../assets/imagen-our-history-1.jpg';
import image2 from '../assets/imagen-our-history-2.jpg';
import image3 from '../assets/imagen-our-history-3.jpg';
import image4 from '../assets/imagen-our-history-4.jpg';
import {Fade} from 'react-awesome-reveal';
import 'animate.css';

function OurHistory() {
  return (
    <>
        <section className='wrapper-hero'>
            <div className="hero">
                <Fade><h1>Nuestra Historia</h1></Fade>
                <Fade delay={1000}><h1>.</h1></Fade>
                <Fade delay={1100}><h1>.</h1></Fade>
                <Fade delay={1200}><h1>.</h1></Fade>
            </div>
            <div className="container">
                <article className="events">
                    <Fade className="image" direction='left' duration={2000}>
                        <img src={image1}></img>
                    </Fade>
                    <Fade direction='right' className='date' duration={2000}>
                        <h3>Nos conocimos un 9 de Enero del 2020</h3>
                    </Fade>
                    <div class="heart-shape"></div>
                </article>
                <article className="events">
                    <Fade className="image" direction='right' duration={2000}>
                        <img src={image2}></img>
                    </Fade>
                    <Fade direction='left' className='date' duration={2000}>
                        <h3>Nos volvimos inseparables</h3>
                    </Fade>
                    <div class="heart-shape"></div>
                </article>
                <article className="events">
                    <Fade className="image" direction='left' duration={2000}>
                        <img src={image3}></img>
                    </Fade>
                    <Fade direction='right' className='date' duration={2000}>
                        <h3>Fuimos los mejores amigos</h3>
                    </Fade>
                    <div class="heart-shape"></div>
                </article>
                <article className="events">
                    <Fade className="image" direction='right' duration={2000}>
                        <img src={image4}></img>
                    </Fade>
                    <Fade direction='left' className='date' duration={2000}>
                        <h3>Y pronto nos dimos cuenta que nacimos el uno para el otro...</h3>
                    </Fade>
                    <div class="heart-shape"></div>
                </article>
            </div>
        </section>
    </>
  )
}

export default OurHistory
