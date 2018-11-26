# React Background Slider
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![npm version](https://badge.fury.io/js/react-background-slider.svg)](https://www.npmjs.com/package/react-background-slider)

Simply beautiful background image slider for React 🌅

[️➡️ DEMO](https://u2ix.github.io/react-background-slider)

## Intro

This component is meant to be used as a **full viewport background slideshow** that can easily add a slick, polished feel to pages that don't have much content.

I've personally used it for several projects as the background for login / signup / dialog screens where the only content is a single foreground modal generally prompting the user for some info.

## Install

```
# npm
$ npm install --save react-background-slider
# yarn
$ yarn add react-background-slider
```

## Usage

```
import BackgroundSlider from 'react-background-slider'

<BackgroundSlider
  images={[image1, image2, ...]}
  duration={10} transition={2} />
```

## API

### BackgroundSlider

- `props.images` - array<string>, *required* array of images to transition between.
- `props.duration` - number, duration of which each image is displayed (default `10`)
- `props.transition` - number, duration of the transition (default `2`)

The component will start with the first image.

## [Demo](https://u2ix.github.io/react-background-slider)

This repo comes with an example [create-react-app](https://github.com/facebookincubator/create-react-app) under `example/` that can be run locally to experiment with the component. This demo is also hosted [here](https://u2ix.github.io/react-background-slider).

```bash
cd example
npm install
npm start
```

This will start the create-react-app dev server locally on port 3000 and open the demo app in your default browser.

## License

MIT