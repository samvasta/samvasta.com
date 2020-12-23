import { Box, BoxProps, Container } from '@chakra-ui/react';
import React from 'react';

const ResumeSection = (props: BoxProps) => {
  const { children, ...boxProps } = props;

  return (
    <Box py={12} {...boxProps}>
      <Container variant="article">{children}</Container>
    </Box>
  );
};

export default ResumeSection;
