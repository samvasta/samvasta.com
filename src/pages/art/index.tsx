import { Container, SimpleGrid, Square, Text } from '@chakra-ui/react';
import ArticleHeading from 'components/ArticleHeading';
import React from 'react';
import Image from 'components/Image';
import Link from 'components/Link';
import BasePage from 'components/BasePage';

const ArtHome = () => {
  return (
    <Container variant="article">
      <ArticleHeading level={1}>Art</ArticleHeading>

      <ArticleHeading level={3}>Procedural Generation</ArticleHeading>
      <SimpleGrid columns={{ base: 1, sm: 3 }} columnGap={4}>
        <Image
          img={{
            src: '/images/art/all_colors/all_colors_3.png',
            priority: true,
            alt: 'All Colors',
            layout: 'fill',
            objectFit: 'cover',
          }}
          box={{ w: 'full', h: 40, display: { base: 'none', sm: 'inherit' } }}
        />
        <Image
          img={{
            src: '/images/art/landscapelegacy_thumb.png',
            priority: true,
            alt: 'Landscape',
            layout: 'fill',
            objectFit: 'contain',
          }}
          box={{ w: 'full', h: 40 }}
        />
        <Image
          img={{
            src: '/images/art/flowfield_thumb.png',
            priority: true,
            alt: 'Flow Field',
            layout: 'fill',
            objectFit: 'contain',
          }}
          box={{ w: 'full', h: 40, display: { base: 'none', sm: 'inherit' } }}
        />
      </SimpleGrid>
      <Text variant="para">
        Procedural generation is a technique for generating random but valid data under a set of
        constraints.
      </Text>
      <Text variant="para">
        Procedural generation is most commonly applied when a large number of unique and varying
        assets is required but it is not feasible for each asset to be crafted by hand. For example,
        video game developers may use procedural generation to create an entire forest of unique
        looking trees, or even to populate a virtual city with hundreds or thousands of unique
        citizens.
      </Text>
      <Text variant="para">
        I use procedural generation techniques to create visual art. I have written a framework for
        creating, debugging and executing procedural image generators with a plugin architecture to
        make the creation of new generators more fun (at least it&apos;s fun for me).
      </Text>

      <Link to="/art/procgen" display="inherit">
        See more
      </Link>

      <ArticleHeading level={3} mt={8}>
        Traditional Art
      </ArticleHeading>

      <Text variant="para">Sometimes I like to paint with guache or watercolors.</Text>
      <Link to="/art" mb={16} display="inherit">
        See more
      </Link>
    </Container>
  );
};

export default BasePage(ArtHome, {
  meta: {
    title: 'Art',
  },
});
