import { Box, Container, Wrap, WrapItem } from '@chakra-ui/react';
import ArticlePreview from 'components/ArticlePreview';
import ArticleHeading from 'components/ArticleHeading';
import { decorateWithNavBar } from 'components/NavigationBar';
import React from 'react';
import { GoTo } from 'routes';

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
        imageSrc: '/images/tinkering/lamp/lamp1.jpg',
        to: GoTo.Tinkering.Keyboard1,
      },
      {
        title: 'Fountain Pen Wrap',
        imageSrc: '/images/tinkering/penwrap/penwrap2.jpg',
        to: GoTo.Tinkering.Keyboard1,
      },
    ],
  },
  {
    groupTitle: '2018',
    articles: [
      {
        title: 'Custom Keyboard',
        imageSrc: '/images/tinkering/keyboard1/TestFit1.jpg',
        to: GoTo.Tinkering.Keyboard1,
      },
    ],
  },
  {
    groupTitle: '2019',
    articles: [
      {
        title: 'Custom Keyboard 2',
        imageSrc: '/images/tinkering/keyboard2/mcu.jpg',
        to: GoTo.Tinkering.Keyboard2,
      },
    ],
  },
  {
    groupTitle: '2020',
    articles: [
      {
        title: 'Custom Keyboard 3',
        imageSrc: '/images/tinkering/keyboard2/bms2.jpg',
        to: GoTo.Tinkering.Keyboard2,
      },
    ],
  },
];

const TinkeringHome = () => {
  return (
      <Container variant="article">
        <ArticleHeading level={1}>Tinkering</ArticleHeading>

        {data.map((group) => (
          <>
            <ArticleHeading level={3}>{group.groupTitle}</ArticleHeading>
            <Wrap my={8} spacing={8}>
              {group.articles.map((article) => (
                <WrapItem>
                  <ArticlePreview
                    title={article.title}
                    imageSrc={article.imageSrc}
                    to={article.to}
                    />
                </WrapItem>
              ))}
            </Wrap>
          </>
        ))}
      </Container>
  );
};

export default decorateWithNavBar(TinkeringHome);
