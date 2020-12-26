import { Container, Text } from '@chakra-ui/react';
import ArticleHeading from 'components/ArticleHeading';
import React from 'react';

const ArtAlgLandscapes = () => {
  return (
    <Container variant="article">
      <ArticleHeading>Landscapes</ArticleHeading>
      <Text variant="para">
        The Landscapes generator was the first image generated that I made. Each image presents a
        series of rolling hills, and an occasional tree, in a two-color scheme. The color gradient
        of the hills suggests a calm, foggy scene.
      </Text>
      <Text variant="para">
        The code has been moved and re-purposed so much that it&apos;s remarkable that it still
        produces even mildly pleasing results. Although backstage is a horrible mess, I still get
        the most comments from the landscape images. I think the main reason is that the subject of
        the images are familiar; they are landscapes. There was once a plan to add several features
        to the Landscapes generator such as clouds or more texture/detail. If I were to implement
        those features in the future, it will be much more relaxing to start a new landscape
        generator from scratch.
      </Text>
    </Container>
  );
};

export default ArtAlgLandscapes;
