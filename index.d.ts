/// <reference types="react" />

export interface BackgroundSliderProps {
    images: string[],
    duration?: number,
    transition?: number
}

export default function BackgroundSlider(props: BackgroundSliderProps): JSX.Element
