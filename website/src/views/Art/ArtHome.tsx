import { Container, Image, Link, SimpleGrid, Text } from '@chakra-ui/react';
import ArticleHeading from 'components/ArticleHeading';
import { decorateWithNavBar } from 'components/NavigationBar';
import { Link as ReactRouterLink } from 'react-router-dom';
import React from 'react';
import { GoTo } from 'routes';

const ArtHome = () => {
  return (
    <Container variant="article">
      <ArticleHeading level={1}>Art</ArticleHeading>

      <ArticleHeading level={3}>Procedural Generation</ArticleHeading>
      <SimpleGrid columns={3} columnGap={4}>
        <Image src="/images/art/geometric/shapes_3.png" alt="MSP" w="full" />
        <Image
          src="/images/art/all_colors/all_colors_limited_range_4.png"
          alt="allcolors"
          w="full"
        />
        <Image src="/images/art/bezier/bezier_1.png" alt="bezier" w="full" />
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

      <Link as={ReactRouterLink} to={GoTo.Art.AlgorithmsHome} display="inherit">
        See more
      </Link>

      <ArticleHeading level={3} mt={8}>
        Traditional Art
      </ArticleHeading>

      <Text variant="para">Sometimes I like to paint with guache or watercolors.</Text>
      <Link as={ReactRouterLink} to={GoTo.Art.Home} mb={16} display="inherit">
        See more
      </Link>
    </Container>
  );
};

export default decorateWithNavBar(ArtHome);