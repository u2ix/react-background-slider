import React, { Component } from 'react'
import PropTypes from 'prop-types'
import generateStyleSheet from './generateStyleSheet'
import injectCss from './injectCss'

const NAME = 'ReactBackgroundSlider'

class BackgroundSlider extends Component {
  componentWillMount () {
    const { images, duration, transition } = this.props

    injectCss(
      generateStyleSheet({
        imagesCount: images.length,
        duration,
        transition
      }),
      NAME
    )
  }
  render () {
    const { images, duration, transition } = this.props

    return (
      <div id={NAME}>
        {images.map((img, key) =>
          <figure key={key}
            style={{
              backgroundImage: `url(${img})`,
              animationDelay: `${(duration + transition) * key}s`
            }}
          />
        )}
      </div>
    )
  }
}

BackgroundSlider.defaultProps = {
  duration: 10,
  transition: 2
}

BackgroundSlider.propTypes = {
  images: PropTypes.array.isRequired(),
  duration: PropTypes.number,
  transition: PropTypes.number
}

export default BackgroundSlider
