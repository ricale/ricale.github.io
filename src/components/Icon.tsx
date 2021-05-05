import styled from 'themes';
import * as LogoSvgs from 'logoRes';

export type IconProps = {
  name: keyof typeof LogoSvgs
}
const Icon = ({
  name,
  ...props
}: IconProps) => {
  const Component = LogoSvgs[name];
  return (
    <Component {...props} />
  )
}

const StyledIcon = styled(Icon)`
  width: ${p => p.theme.dimens.icon};
  height: ${p => p.theme.dimens.icon};
`;

export default StyledIcon;
