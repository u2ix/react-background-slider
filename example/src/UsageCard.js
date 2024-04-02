import React from 'react'

const UsageCard = () => {
  const [usageVisible, toggleUsage] = React.useState(false)

  return (<>
    <div className={['card', usageVisible ? 'big' : ''].join(' ')}>
      <h3 onClick={() => toggleUsage(!usageVisible)} className='toggle'>How to add this to your React Website {usageVisible ? '🔼' : '🔽'}</h3>
      {usageVisible && (
        <ol>
          <li>Install the package<br />
            <code>npm install --save react-background-slider</code>
          </li>
          <li>
            Add images into your project and import them<br />
            <code>
              {`import image1 from './assets/image1.jpg'`}<br/>
              {`import image2 from './assets/image2.jpg'`}
            </code>
          </li>
          <li>
            Add the slider component into your app<br/>
            <code>{`import BackgroundSlider from 'react-background-slider'`}</code><br/><br/>
            <code>{`<BackgroundSlider
              images={[image1, image2, ...]}
              duration={10} transition={2} />`}</code>
          </li>
          <li>Refresh and wow your audience!</li>
        </ol>
      )}
    </div>
  </>)
}

export default UsageCard