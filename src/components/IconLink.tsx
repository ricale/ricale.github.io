import { AnchorHTMLAttributes } from 'react';
import Icon, { IconProps } from './Icon';;

type IconLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & IconProps
const IconLink = ({
  name,
  ...props
}: IconLinkProps) => {
  return (
    <a {...props}><Icon name={name} /></a>
  );
}

export default IconLink;
