import React from 'react'
import {Zoom} from 'react-awesome-reveal';
import 'animate.css';
import './LetterSection.css'

function LettersSection() {
  return (
    <>
        <div className="wrapper">
        <Zoom duration={2000} >
            <h1 className='title-container'>¡Estamos felices de compartir esta alegría con nuestras personas favoritas!</h1>
        </Zoom>
        </div>
    </>
  )
}

export default LettersSection;


