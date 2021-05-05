import styled from 'themes';
import { IconLink } from 'components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
  padding-left: ${p => p.theme.dimens.bigMargin};
  color: white;
`;
const Name = styled.h1`
  ${p => p.theme.text.name}
`;
const Links = styled.div`
  display: flex;
  flex-direction: row;

  & > *:not(:first-child) {
    margin-left: ${p => p.theme.dimens.gutter};
  }
`;

const MainPage = () => {
  return (
    <Container>
      <Name>
        ricale
      </Name>
      <Links>
        <IconLink
          name='github'
          href='https://github.com/ricale'
          target='_blank'
          />
        <IconLink
          name='velog'
          href='https://velog.io/@ricale'
          target='_blank'
          />
        <IconLink
          name='linkedin'
          href='https://www.linkedin.com/in/ricale/'
          target='_blank'
          />
        <IconLink
          name='mail'
          href="mailto:kim.kangseong@gmail.com"
          />
      </Links>
    </Container>
  )
}

export default MainPage;
