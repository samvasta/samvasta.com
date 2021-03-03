import { Box, Container, Wrap, WrapItem } from '@chakra-ui/react';
import ArticlePreview from 'components/ArticlePreview';
import ArticleHeading from 'components/ArticleHeading';
import React from 'react';
import BasePage from 'components/BasePage';

interface ArticleGroup {
  groupTitle: string;
  articles: ArticleData[];
}
interface ArticleData {
  title: string;
  imageSrc: string;
  to: string;
}

const data: ArticleGroup[] = [
  {
    groupTitle: '2016',
    articles: [
      {
        title: 'Wireless Lamp',
        imageSrc: '/images/tinkering/lamp/lamp1.png',
        to: '/tinkering/keyboard1',
      },
      {
        title: 'Fountain Pen Wrap',
        imageSrc: '/images/tinkering/penwrap/penwrap2.png',
        to: '/tinkering/keyboard1',
      },
    ],
  },
  {
    groupTitle: '2018',
    articles: [
      {
        title: 'Custom Keyboard',
        imageSrc: '/images/tinkering/keyboard1/TestFit1.png',
        to: '/tinkering/keyboard1',
      },
    ],
  },
  {
    groupTitle: '2019',
    articles: [
      {
        title: 'Custom Keyboard 2',
        imageSrc: '/images/tinkering/keyboard2/mcu.png',
        to: '/tinkering/keyboard2',
      },
    ],
  },
  {
    groupTitle: '2020',
    articles: [
      {
        title: 'Custom Keyboard 3',
        imageSrc: '/images/tinkering/keyboard3/painted_test_fit_2.png',
        to: '/tinkering/keyboard2',
      },
    ],
  },
];

const TinkeringHome = () => {
  return (
    <Container variant="article">
      <ArticleHeading level={1}>Tinkering</ArticleHeading>

      {data.map((group) => (
        <Box key={group.groupTitle}>
          <ArticleHeading level={3}>{group.groupTitle}</ArticleHeading>
          <Wrap my={8} spacing={8}>
            {group.articles.map((article) => (
              <WrapItem key={article.title}>
                <ArticlePreview title={article.title} imageSrc={article.imageSrc} to={article.to} />
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      ))}
    </Container>
  );
};

export default BasePage(TinkeringHome, {
  meta: {
    title: 'Tinkering',
  },
});
