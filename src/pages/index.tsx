import React from 'react';

import styled from 'styled-components';

import { Slider } from '~ui/organisms/Slider';

// todo: h1
const Title = styled.p`
  text-transform: uppercase; 
  font-size: 1.8em;
  text-align: center;
`

const IndexPage = () => {
  return (
    <>
      <Slider />
      <Title>
        Daniil shurygin
      </Title>
    </>
  )
};

export default IndexPage;
