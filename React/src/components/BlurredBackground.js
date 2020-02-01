import React from 'react';
import styled from 'styled-components';
import myBack from '../assets/background/animated.dev.gif';

const Container = styled.div.attrs({})`
  /* The image used */
  background-image: url(${myBack});

  /* Add the blur effect */
  filter: blur(75px);
  -webkit-filter: blur(75px);

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const BlurredBackground = props => {
  return <Container></Container>
};
