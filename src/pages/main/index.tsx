import styled from 'themes';

import Links from './Links';
import MyName from './MyName';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
  padding-left: ${p => p.theme.dimens.bigMargin};
`;

const MainPage = () => {
  return (
    <Container>
      <MyName />
      <Links />
    </Container>
  )
}

export default MainPage;
