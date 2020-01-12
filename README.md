# React Background Slider

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![npm version](https://badge.fury.io/js/react-background-slider.svg)](https://www.npmjs.com/package/react-background-slider)

Simply beautiful background image slider for React 🌅

[️➡️ DEMO](https://u2ix.github.io/react-background-slider)

## Intro

This component is meant to be used as a **full viewport background slideshow** that can easily add a slick, polished feel to pages that don't have much content.

I've personally used it for several projects as the background for login / signup / dialog screens where the only content is a single foreground modal generally prompting the user for some info.

## Install

```bash
# use npm
npm install --save react-background-slider

# use yarn
yarn add react-background-slider
```

## Usage

```javascript
import BackgroundSlider from 'react-background-slider'

<BackgroundSlider
  images={[image1, image2, ...]}
  duration={10} transition={2} />
```

## API

### BackgroundSlider

- `props.images` - string[], *required* array of images to transition between.
- `props.duration` - number, duration of which each image is displayed (default `10`)
- `props.transition` - number, duration of the transition (default `2`)

The component will start with the first image.

## Compatibility
The *>2.0.0* version of this library requires React **>16.8**.

## [Demo](https://u2ix.github.io/react-background-slider)

This repo comes with an example application under `example/` that can be run locally to experiment with the component. This demo is also hosted [here](https://u2ix.github.io/react-background-slider).

**To launch the demo app**
```bash
npm start
```

This will start the webpack dev server [locally on port 9000](http://localhost:9000).

## License

MIT
