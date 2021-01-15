import { Container, Text } from '@chakra-ui/react';
import ArticleHeading from 'components/ArticleHeading';
import BasePage from 'components/BasePage';
import Gallery, { GalleryProps } from 'components/Gallery';
import { GenTangles } from 'data/Art/procgen';
import getGalleryUrls from 'data/gcp';
import { GetStaticProps } from 'next';
import React from 'react';

const ArtAlgTangles = (props: GalleryProps) => {
  return (
    <Container variant="article">
      <ArticleHeading>Tangles</ArticleHeading>

      <ArticleHeading level={3}>Process</ArticleHeading>

      <ArticleHeading level={3}>Gallery</ArticleHeading>
      <Gallery {...props} />
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const galleryUrls = await getGalleryUrls(GenTangles);

  return {
    props: galleryUrls,
    revalidate: 60 * 60 * 2, // In seconds => 60 sec/min * 60 min/hr * 2hr
  };
};

export default BasePage(ArtAlgTangles, {
  meta: {
    title: 'Tangles',
  },
});
