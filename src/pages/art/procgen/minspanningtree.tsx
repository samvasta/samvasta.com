import { Container, Heading, Text } from '@chakra-ui/react';
import ArticleHeading from 'components/ArticleHeading';
import BasePage from 'components/BasePage';
import Gallery, { GalleryProps } from 'components/Gallery';
// import GenerateImageButton from 'components/GenerateImageButton';
import { GenMinSpanningTree } from 'data/Art/procgen';
import getGalleryUrls from 'data/gcp';
import { GetStaticProps } from 'next';
import React from 'react';
import dynamic from 'next/dynamic';

const GenerateImageButton = dynamic(() => import('components/GenerateImageButton'));

const ArtAlgMinSpanningTree = (props: GalleryProps) => {
  return (
    <Container variant="article">
      <ArticleHeading>Prim&apos;s Minimum Spanning Tree</ArticleHeading>

      <GenerateImageButton generator={GenMinSpanningTree} mx="auto" />

      <ArticleHeading level={3}>Process</ArticleHeading>

      <ArticleHeading level={3}>Gallery</ArticleHeading>
      <Gallery {...props} />
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const galleryUrls = await getGalleryUrls(GenMinSpanningTree);

  return {
    props: galleryUrls,
    revalidate: 60 * 60 * 2, // In seconds => 60 sec/min * 60 min/hr * 2hr
  };
};

export default BasePage(ArtAlgMinSpanningTree, {
  meta: {
    title: "Prim's MST",
  },
});
