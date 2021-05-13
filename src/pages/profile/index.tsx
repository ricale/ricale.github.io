import { Typing } from 'components';
import { useCallback, useState } from 'react';
import styled from 'themes';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

const Heading = styled(Typing)`
  ${p => p.theme.text.h1};
  font-family: monospace;
`;

const ProfilePage = () => {
  const [doneFirstAnim, setDoneFirstAnim] = useState(false);
  const onDoneFirstAnim = useCallback(() => {
    setDoneFirstAnim(true);
  }, []);

  return (
    <Container>
      <Heading
        preDelay={900}
        onDone={onDoneFirstAnim}
        fixedWidth>
        Profile
      </Heading>
      <Typing disabled={!doneFirstAnim} preDelay={1800}>이름: 아무개</Typing>
      {/* <Typing disabled={!doneFirstAnim}>직업: 개발자</Typing> */}
    </Container>
  )
}

export default ProfilePage;
