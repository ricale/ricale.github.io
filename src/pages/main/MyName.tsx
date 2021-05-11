import { Tooltip } from 'components';
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
      <Tooltip content='test' delay={500}>
        <span>ricale</span>
      </Tooltip>
    </Container>
  );
}

export default MyName;
