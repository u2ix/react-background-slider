import React, { Component } from 'react'
import BackgroundSlider from '../../lib/BackgroundSlider'

import Card from './Card'

import image1 from './assets/image1.jpg'
import image2 from './assets/image2.jpg'
import image3 from './assets/image3.jpg'
import image4 from './assets/image4.jpg'
import image5 from './assets/image5.jpg'
import image6 from './assets/image6.jpg'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='card-container'>
          <Card />
        </div>

        <BackgroundSlider
          images={[image1, image2, image3, image4, image5, image6]}
          duration={8}
          transition={2}
        />
      </div>
    )
  }
}

export default App
