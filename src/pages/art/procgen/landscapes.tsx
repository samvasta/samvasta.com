import { Container, Text } from '@chakra-ui/react';
import ArticleHeading from 'components/ArticleHeading';
import BasePage from 'components/BasePage';
import Gallery, { GalleryProps } from 'components/Gallery';
import GenerateImageButton from 'components/GenerateImageButton';
import { GenLandscape } from 'data/Art/procgen';
import getGalleryUrls from 'data/gcp';
import { GetStaticProps } from 'next';
import React from 'react';

const ArtAlgLandscapes = (props: GalleryProps) => {
  return (
    <Container variant="article">
      <ArticleHeading>Landscapes</ArticleHeading>

      <GenerateImageButton generator={GenLandscape} />

      <ArticleHeading level={3}>Process</ArticleHeading>

      <ArticleHeading level={3}>Gallery</ArticleHeading>
      <Gallery {...props} />
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const galleryUrls = await getGalleryUrls(GenLandscape);

  return {
    props: galleryUrls,
    revalidate: 60 * 60 * 2, // In seconds => 60 sec/min * 60 min/hr * 2hr
  };
};

export default BasePage(ArtAlgLandscapes, {
  meta: {
    title: 'Landscapes',
  },
});
