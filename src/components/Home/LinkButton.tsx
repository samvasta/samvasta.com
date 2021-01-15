import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';

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
    <NextLink href={to}>
      <Box
        bg="yellow.500"
        color="gray.900"
        px={8}
        py={4}
        width="full"
        _hover={hover}
        cursor="pointer"
      >
        <Heading textAlign="left" size="2xl" cursor="pointer">
          {text}
        </Heading>
      </Box>
    </NextLink>
  );
};
export default LinkButton;
