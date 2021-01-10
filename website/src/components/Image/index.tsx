import React from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { Box, BoxProps } from '@chakra-ui/react';

export interface ImageProps {
  img: NextImageProps;
  box: BoxProps;
}

const Image = (props: ImageProps) => {
  const { box, img } = props;
  return (
    <Box {...box} position="relative" overflow="hidden">
      <NextImage {...img} />
    </Box>
  );
};

export default Image;
