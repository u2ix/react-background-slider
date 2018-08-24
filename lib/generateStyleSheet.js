import * as vendor from 'css-vendor'

const generateStyleSheet = ({ imagesCount, duration, transition }) => {
  const t = imagesCount * (duration + transition)
  const p1 = Math.round(transition / t * 100)
  const p2 = Math.round((duration + transition) / t * 100)
  const p3 = Math.round(p2 * 1.1)

  const vendorBackfaceVisibility = vendor.supportedProperty('backface-visibility')
  const vendorAnimation = vendor.supportedProperty('animation')
  const vendorKeyframes = vendor.supportedKeyframes('@keyframes')

  let animation = ''
  let keyframes = ''
  if (vendorAnimation && vendorBackfaceVisibility && vendorKeyframes) {
    animation = `${vendorBackfaceVisibility}: hidden;
        ${vendorAnimation}: imageAnimation ${t}s linear infinite -0.5s;`

    keyframes = `${vendorKeyframes} imageAnimation {
          0% {
            opacity: 0;
            animation-timing-function: ease-in;
          }
          ${p1}% {
            opacity: 1;
            animation-timing-function: ease-out;
          }
          ${p2}% {
            opacity: 1;
          }
          ${p3}% {
            opacity: 0
          }
          100% {
            opacity: 0
          }
        }`
  }

  return `#ReactBackgroundSlider > figure {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        color: transparent;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        opacity: 0;
        z-index: -1000;
        margin: 0;
        ${animation}
      }
      ${keyframes}
    `
}

export default generateStyleSheet
