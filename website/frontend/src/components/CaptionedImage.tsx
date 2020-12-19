import React from 'react';
import {Image, ImageProps, Text} from '@chakra-ui/react';

export interface CaptionedImageProps extends ImageProps {
  caption?: string;
}

const CaptionedImage = (props: CaptionedImageProps) => {
  const {caption, ...imageProps} = props;

  return (
    <>
      <Image alt={caption} alignSelf="center" boxShadow="card" w="md" mx="auto" {...imageProps} mt={8} />
      <Text textAlign="center" alignSelf="center" variant="caption" mb={8}>{caption}</Text>
    </>
  )
};


export default CaptionedImage;