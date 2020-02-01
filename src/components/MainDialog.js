import React from 'react'
import styled from 'styled-components'

const Container = styled.div.attrs({})`
color: white;
width: 70vw;
height: 40vh;
text-align: center;
font-size: 2rem;

`

export const MainDialog = (props) => {
  return <Container>
    <p>Oie!!!! Como vai?</p>
  </Container>
}