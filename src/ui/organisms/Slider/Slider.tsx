import React from 'react';

import styled from 'styled-components';

import { Image } from '~ui/atoms/Image';

import { useSliderImages } from './use-slider-images';

interface Props {}

const SliderContainer = styled.section`
  display: flex;
  height: 350px;
`;

const SliderItem = styled.article`
  width: 100%;
  flex-shrink: 0;
`;

export const Slider: React.FC<Props> = props => {
  const data = useSliderImages();

  return (
    <SliderContainer>
      {data.allFile.edges.map((image: any, i: number) => (
        <SliderItem key={i}>
          <Image
            fluid={image.node.childImageSharp.fluid}
            alt={image.node.base.split('.')[0]}
            style={{'height': '300px'}}
          />
        </SliderItem>
      ))}
    </SliderContainer>
  );
};
