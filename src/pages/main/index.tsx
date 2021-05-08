// import { useCallback, useEffect, useRef, useState } from 'react';

import styled, { css } from 'themes';

import Links from './Links';
import MyName from './MyName';

type ContainerProps = {
  height?: number
}
const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
  /* ${p => p.height && css`
    height: ${p.height}px;
  `} */
  transition: height 0.2s ease-in-out;
`;

const Plate = styled.div`
`;

const MainPage = () => {
  // const plateRef = useRef<HTMLDivElement>(null);
  // const [height, setHeight] = useState<number>();

  // const onClick = useCallback(() => {
  //   setHeight(plateRef.current?.clientHeight || 0)
  // }, [plateRef]);

  return (
    <Container /*height={height}*/>
      <Plate /*ref={plateRef}*/>
        <MyName /*onClick={onClick}*/ />
        <Links />
      </Plate>
    </Container>
  )
}

export default MainPage;
