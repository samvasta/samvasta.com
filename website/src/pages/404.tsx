import { Container, Text } from '@chakra-ui/react';
import React from 'react';

import ArticleHeading from 'components/ArticleHeading';
import BasePage from 'components/BasePage';

const NotFound = () => {
  return (
    <Container variant="article">
      <ArticleHeading level={1}>404 Not Found</ArticleHeading>

      <Text variant="para">I might still be working on this page. Check back soon?</Text>
    </Container>
  );
};

export default BasePage(NotFound, {
  meta: {
    title: '404',
  },
});
