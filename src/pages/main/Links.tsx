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
    </Container>
  )
}

export default Links;
