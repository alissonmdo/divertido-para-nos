import React from 'react';
import styled from 'styled-components';
import { MainDialog } from './MainDialog';

const Container = styled.div.attrs({})`
  background: rgba(0, 0, 0, 0.8);
  width: 95vw;
  height: 92vh;
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Screen = props => {
  return (
    <Container>
      <MainDialog></MainDialog>
    </Container>
  );
};
