import { Box, BoxProps, Heading, Square } from '@chakra-ui/react';
import React from 'react';
import Link from './Link';
import Image from './Image';

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
        // p={4}
        w={{ base: 72, md: 64, lg: 56 }}
        _hover={{
          boxShadow: 'xl',
        }}
      >
        <Square size={{ base: 72, md: 64, lg: 56 }}>
          <Image
            box={{ w: '100%', h: '100%' }}
            img={{
              src: imageSrc,
              layout: 'fill',
              objectFit: 'cover',
              quality: 100,
              alt: title,
            }}
          />
        </Square>
        <Box position="absolute" transform="translateY(-100%)" width="inherit" bg="blackAlpha.600">
          <Heading size="md" my={2} textAlign="center" overflowWrap="break-word" color="white">
            {title}
          </Heading>
        </Box>
      </Box>
    </Link>
  );
};

export default ArticlePreview;
