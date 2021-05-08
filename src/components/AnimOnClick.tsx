import { useCallback, useEffect, useState } from 'react';
import styled, { css } from 'themes';

const Container = styled.span`
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
  onClick: () => void
}
const AnimOnClick = ({
  label,
  content,
  onClick: _onClick,
}: MouseOverAnimProps) => {
  const [anim, setAnim] = useState<'typing' | 'blinking' | 'deleting'>();
  const [animIndex, setAnimIndex] = useState(1);

  useEffect(() => {
    if(anim === 'typing') {
      let interval = setInterval(() => {
        setAnimIndex(idx => {
          if(idx < content.length) {
            return idx + 1;
          } else {
            clearInterval(interval);
            setAnim('deleting');
            return idx;
          }
        });
      }, 50);

    } else if(anim === 'blinking') {

    } else if(anim === 'deleting') {
      let interval = setInterval(() => {
        setAnimIndex(idx => {
          if(idx > 0) {
            return idx - 1;
          } else {
            clearInterval(interval);
            setAnim(undefined);
            return idx;
          }
        });
      }, 50);
    }
  }, [content, anim]);

  const onClick = useCallback(() => {
    setAnim('typing');    
  }, []);

  
  return (
    <Container onClick={onClick}>
      {label}
      {anim &&
        <Overed>
          {content.slice(0, animIndex)}
        </Overed>
      }
    </Container>
  )
}

export default AnimOnClick;
