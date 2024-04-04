import React from 'react'
import PropTypes from 'prop-types'
import generateStyleSheet from './generateStyleSheet'
import injectCss from './injectCss'

const NAME = 'ReactBackgroundSlider'

function BackgroundSlider ({
  images,
  duration = 10,
  transition = 2
}) {
  React.useEffect(() => {
    injectCss(
      generateStyleSheet({
        imagesCount: images.length,
        duration,
        transition
      }),
      NAME
    )
  })

  return (
    <div id={NAME}>
      {images.map((img, key) =>
        <figure
          key={key}
          style={{
            backgroundImage: `url(${img})`,
            animationDelay: `${(duration + transition) * key}s`
          }}
        />
      )}
    </div>
  )
}

BackgroundSlider.propTypes = {
  images: PropTypes.array.isRequired,
  duration: PropTypes.number,
  transition: PropTypes.number
}

export default BackgroundSlider
