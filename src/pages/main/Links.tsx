import styled from 'themes';
import { IconLink } from 'components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  & > *:not(:first-child) {
    margin-left: ${p => p.theme.dimens.gutter};
  }
`;

const Links = () => {
  return (
    <Container>
      <IconLink
        name='github'
        href='https://github.com/ricale'
        title="깃헙"
        />
      <IconLink
        name='gatsby'
        href='https://ricale.kr/blog/'
        title="블로그"
        />
      <IconLink
        name='linkedin'
        href='https://www.linkedin.com/in/ricale/'
        title="링크드인"
        />
      <IconLink
        name='mail'
        href="mailto:kim.kangseong@gmail.com"
        title="메일"
        />
    </Container>
  )
}

export default Links;
