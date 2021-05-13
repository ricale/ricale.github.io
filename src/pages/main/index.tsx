// import { useCallback, useEffect, useRef, useState } from 'react';

import styled from 'themes';

import Links from './Links';
import MyName from './MyName';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
  transition: height 0.2s ease-in-out;
`;

const Plate = styled.div`
`;

const MainPage = () => {
  return (
    <Container>
      <Plate>
        <MyName />
        <Links />
      </Plate>
    </Container>
  )
}

export default MainPage;
