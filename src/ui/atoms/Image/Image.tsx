import React from 'react';
import Img, { FluidObject } from 'gatsby-image';

interface Props {
  fluid?: FluidObject | FluidObject[];
  alt?: string;
  style?: React.CSSProperties;
}

export const Image: React.FC<Props> = props => {
  return (
    <Img
      fluid={props.fluid}
      alt={props.alt}
      style={props.style}
    />
  );
};
