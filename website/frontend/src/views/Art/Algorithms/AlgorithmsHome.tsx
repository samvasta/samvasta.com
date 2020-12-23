import { Container } from '@chakra-ui/react';
import ArticleHeading from 'components/ArticleHeading';
import { decorateWithNavBar } from 'components/NavigationBar';
import React from 'react';

const AlgorithmsHome = () => {
  return <Container variant="article">
    <ArticleHeading level={1}>Procedural Generation</ArticleHeading>
  </Container>
}

export default decorateWithNavBar(AlgorithmsHome);