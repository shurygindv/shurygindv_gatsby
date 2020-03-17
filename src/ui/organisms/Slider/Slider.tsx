import React from 'react';

import styled from 'styled-components';
import { animated, useSpring, config } from 'react-spring';

import { Image } from '~ui/atoms/Image';

import { useSliderImages } from './use-slider-images';

interface Props {}

const COUNT = 4;

const SliderContainer = styled.section`
  display: flex;
  height: 400px;
`;

const SliderItem = styled.article`
  width: 100%;
  flex-shrink: 0;
`;

const useAnimatedStyles = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const props = useSpring({
    x: activeSlide * -100,
    config: config.slow,
  });

  const styles = {
    transform: props.x.interpolate(v => `translate3d(${v}%,0,0)`),
  };

  React.useEffect(() => {
    setTimeout(() => {
      setActiveSlide(v => (v + 1) % COUNT);
    }, 5000);
  }, [activeSlide]);

  return styles;
};

export const Slider: React.FC<Props> = props => {
  const data = useSliderImages();
  const styles = useAnimatedStyles();

  return (
    <SliderContainer as={animated.section} style={styles}>
      {data.allFile.edges.map((image: any, i: number) => (
        <SliderItem key={i}>
          <Image
            fluid={image.node.childImageSharp.fluid}
            alt={image.node.base.split('.')[0]}
            style={{ height: '350px' }}
            imgStyle={{
              objectPosition: '50% 70%'
            }}
          />
        </SliderItem>
      ))}
    </SliderContainer>
  );
};
