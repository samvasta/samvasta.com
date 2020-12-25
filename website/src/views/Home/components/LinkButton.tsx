import { Box, Heading, Link } from '@chakra-ui/react';
import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

export interface ILinkButtonProps {
  to: string;
  text: string;
  hoverBackgroundImg?: string;
}

const LinkButton = (props: ILinkButtonProps) => {
  const { to, text, hoverBackgroundImg } = props;

  const hover = hoverBackgroundImg
    ? {
        bgImage: hoverBackgroundImg,
        bgSize: 'cover',
        bgPosition: 'right center',
        color: 'white',
        textShadow: '3px 3px rgba(0,0,0,0.7)',
      }
    : {
        bg: 'yellow.600',
      };

  return (
    <Link to={to} as={ReactRouterLink} width="full" variant="noUnderline">
      <Box bg="yellow.500" color="gray.900" px={8} py={4} width="full" _hover={hover}>
        <Heading textAlign="left" size="2xl">
          {text}
        </Heading>
      </Box>
    </Link>
  );
};
export default LinkButton;
