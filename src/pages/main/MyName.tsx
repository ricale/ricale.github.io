import styled from 'themes';
// import { AnimOnClick } from 'components';

const Container = styled.h1`
  ${p => p.theme.text.name}
  ${p => p.theme.media.mobile`
    ${p.theme.text.mobile.name}
  `}

  text-align: center;
`;

type MyNameProps = {
  onClick?: () => void
}
const MyName = ({
  onClick,
}: MyNameProps) => {
  return (
    <Container>
      {/* r<AnimOnClick
        label='i'
        content='introduction'
        onClick={onClick}
        />cale */}
      ricale
    </Container>
  );
}

export default MyName;
