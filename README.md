# React Background Slider

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![npm version](https://badge.fury.io/js/react-background-slider.svg)](https://www.npmjs.com/package/react-background-slider)

> **⚠️ PROJECT ARCHIVED** - This project has been archived as of 2025. Modern CSS has evolved significantly and background image sliders can now be implemented with pure CSS using features like `@keyframes`, `animation`, and `background-image` with multiple values. Consider using native CSS solutions instead:
>
> - [CSS Animation Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations) on MDN
> 
> The functionality this library provided can now be achieved with much simpler, more performant CSS-only solutions.
> Send me an email if need help migrating [Support Mail](mailto:slider.ykto0@dralias.com)

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

## [Demo](https://u2ix.github.io/react-background-slider)

This repo comes with an example application under `example/` that can be run locally to experiment with the component. This demo is also hosted [here](https://u2ix.github.io/react-background-slider).

**To launch the demo app**
```bash
npm start
```

This will start the webpack dev server [locally on port 9000](http://localhost:9000).

## License

MIT
