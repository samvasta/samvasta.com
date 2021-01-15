import React from 'react';
import NextLink from 'next/link';
import { LinkProps, Link as ChakraLink } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export interface ILinkProps extends LinkProps {
  to: string;
  activeStyle?: React.CSSProperties;
  children: any;
}

const Link = (props: ILinkProps): JSX.Element => {
  const { to, children, activeStyle, ...linkProps } = props;
  const router = useRouter();

  const style = to.startsWith(router.pathname) ? activeStyle : {};

  return (
    <NextLink href={to}>
      <ChakraLink {...linkProps} style={style}>
        {children}
      </ChakraLink>
    </NextLink>
  );
};

export default Link;
