import styled from 'themes';
import { AnimOnClick } from 'components';

const Container = styled.h1`
  ${p => p.theme.text.name}
  ${p => p.theme.media.mobile`
    ${p.theme.text.mobile.name}
  `}
`;

const MyName = () => {
  return (
    <Container>
      r<AnimOnClick
        label='i'
        content='introduction'
        />cale
    </Container>
  );
}

export default MyName;
