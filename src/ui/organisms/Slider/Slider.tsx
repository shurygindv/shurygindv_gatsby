import React from 'react';
import { useSpring } from 'react-spring';

interface Props {}

const images = [
  'm-1366x768',
  'm-1600x900.jpg',
  'm-1920x1080.jpg',
  'm-m-1366x768',
  'mercedes1',
  'mercedes2.jpg',
  'thepeninsula.jpg',
  'ws_m_1920x1080.jpg',
  'ws-m.jpg'
];

export const Slider: React.FC<Props> = props => {
  return (
    <section>
      {images.map(fileName => )}
    </section>
  )
};