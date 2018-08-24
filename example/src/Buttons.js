import React from 'react'

import github from './assets/github.svg'
import npm from './assets/npm.svg'

const Buttons = () =>
  <div className='buttons'>
    <a href='https://github.com/u2ix/react-background-slider' className='github'>
      <img src={github} alt='github' /> Github
    </a>
    <a href='https://www.npmjs.com/package/react-background-slider' className='npm'>
      <img src={npm} alt='npm' /> npmjs
    </a>
  </div>

export default Buttons
