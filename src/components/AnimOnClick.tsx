import { useCallback, useEffect, useState } from 'react';
import styled, { css } from 'themes';

type ContainerProps = {
  clicked: boolean
}
const Container = styled.span<ContainerProps>`
  /* user-select: none; */
  position: relative;
  &:hover {
    color: ${p => p.theme.colors.colorPirmary};
    cursor: pointer;
  }
`;
const Overed = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  color: ${p => p.theme.colors.colorPirmary};
  background-color: ${p => p.theme.colors.colorBackground};
`;

type MouseOverAnimProps = {
  label: string
  content: string
}
const AnimOnClick = ({
  label,
  content,
}: MouseOverAnimProps) => {
  const [clicked, setClicked] = useState(false);
  const [animIndex, setAnimIndex] = useState(1);

  useEffect(() => {
    if(clicked) {
      let interval = setInterval(() => {
        setAnimIndex(idx => {
          if(idx < content.length) {
            return idx + 1;
          } else {
            clearInterval(interval);
            return idx;
          }
        });
      }, 50);
    }
  }, [content, clicked]);

  const onClick = useCallback(() => {
    setClicked(true);
  }, []);

  
  return (
    <Container
      onClick={onClick}
      clicked={clicked}>
      {label}
      {clicked &&
        <Overed>
          {content.slice(0, animIndex)}
        </Overed>
      }
    </Container>
  )
}

export default AnimOnClick;
