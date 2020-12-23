import { Box, Heading, HeadingProps, VStack } from '@chakra-ui/react';
import React from 'react';

const sizes = ["3xl", "2xl", "xl", "lg", "md", "sm"];
const colors = ["blue.500", "yellow.500", "red.500", "blue.500", "yellow.500", "red.500"];

export type HeadingSize = 1 | 2 | 3 | 4 | 5 | 6;
export interface DocumentHeadingProps extends HeadingProps {
  level?: HeadingSize;
}

const DocumentHeading = (props: DocumentHeadingProps) => {
  const { level = 1, children, ...headingProps} = props;

  const size = sizes[level-1];
  const color = colors[level-1];

  return (
    <>
      <Heading {...headingProps} alignSelf="start" size={size} pb="1rem">{children}</Heading>
      <Box bg={color} h={1} position="absolute" left={0} w="100%" mt="-1rem" zIndex={-1}/>
    </>
  )
}

export default DocumentHeading;