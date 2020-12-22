import { AspectRatio, Box, BoxProps, Heading, Image, Link, Square, Text } from '@chakra-ui/react';
import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

export interface ArticlePreviewProps extends BoxProps {
  title: string;
  imageSrc: string;
  to: string;
}

const ArticlePreview = (props: ArticlePreviewProps) => {
  const { title, imageSrc, to, ...boxProps } = props;

  return (
    <Link
      to={to}
      as={ReactRouterLink}
      _hover={{
        textDecoration: 'none',
      }}
      _focus={{
        boxShadow: 'none',
      }}
    >
      <Box
        {...boxProps}
        boxShadow="md"
        p={4}
        w={{ base: 64, md: 56, lg: 48 }}
        _hover={{
          boxShadow: 'xl',
        }}
      >
        <Square size={{ base: 56, md: 48, lg: 40 }}>
          <Image alt={title} w="100%" h="100%" src={imageSrc} fit="cover" />
        </Square>
        <Heading size="lg" mt={2} textAlign="center" overflowWrap="break-word" color="black">
          {title}
        </Heading>
      </Box>
    </Link>
  );
};

export default ArticlePreview;
