import React from 'react';
import styled from 'styled-components';
import { Screen } from './Screen';
import { BlurredBackground } from './BlurredBackground';

const Container = styled.div.attrs({})`

  width: 100vw;
  height: 100vh;
`;

export const View = props => {
  return (
    <Container>
      <BlurredBackground></BlurredBackground>
      <Screen></Screen>
    </Container>
  );
};
