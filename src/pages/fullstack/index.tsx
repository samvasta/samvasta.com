import React from 'react';
import { Container, Icon, Text, Wrap, WrapItem } from '@chakra-ui/react';
import ArticleHeading from 'components/ArticleHeading';
import Link from 'components/Link';
import BasePage from 'components/BasePage';

import icons from 'theme/icons';

const ArtHome = () => {
  return (
    <Container variant="article">
      <ArticleHeading level={1}>Software</ArticleHeading>

      <ArticleHeading level={3}>Procedural Image Generator</ArticleHeading>
      <Wrap spacing={4}>
        <WrapItem>
          <Icon as={icons.Java} boxSize={16} />
        </WrapItem>
        <WrapItem>
          <Icon as={icons.GoogleCloud} boxSize={16} />
        </WrapItem>
      </Wrap>
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

      <Link to="/fullstack/procgen" display="inherit">
        See more
      </Link>

      <ArticleHeading level={3} mt={8}>
        Personal Website
      </ArticleHeading>
      <Wrap spacing={4}>
        <WrapItem>
          <Icon as={icons.React} boxSize={16} />
        </WrapItem>
        <WrapItem>
          <Icon as={icons.Typescript} boxSize={16} />
        </WrapItem>
        <WrapItem>
          <Icon as={icons.NextJs} boxSize={16} />
        </WrapItem>
      </Wrap>

      <Text variant="para">Lorem ipsum dolor</Text>
      <Link to="/fullstack/personalwebsite" mb={16} display="inherit">
        See more
      </Link>

      <ArticleHeading level={3} mt={8}>
        Budget CLI
      </ArticleHeading>
      <Wrap spacing={4}>
        <WrapItem>
          <Icon as={icons.DotNet} boxSize={16} />
        </WrapItem>
        <WrapItem>
          <Icon as={icons.Csharp} boxSize={16} />
        </WrapItem>
        <WrapItem>
          <Icon as={icons.SQLite} boxSize={16} />
        </WrapItem>
        <WrapItem>
          <Icon as={icons.TravisCi} boxSize={16} />
        </WrapItem>
      </Wrap>

      <Text variant="para">Lorem ipsum dolor</Text>
      <Link to="/fullstack/budgetcli" mb={16} display="inherit">
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
