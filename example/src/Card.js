import React from 'react'
import Buttons from './Buttons'

const Card = () =>
  <div className='card'>
    <header>
      <h2><span>&lt;</span>React</h2>
      <h1><span>&lt;</span>BackgroundSlider<span>/></span></h1>
      <h3><span>&lt;</span>Simply beautiful background slideshow</h3>
    </header>

    <Buttons />

    <footer>
      <a href='https://github.com/u2ix/react-background-slider/blob/master/example/README.md'>Image Credits</a>
    </footer>
  </div>

export default Card
