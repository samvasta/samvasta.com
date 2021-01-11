import { Container, Text } from '@chakra-ui/react';
import ArticleHeading from 'components/ArticleHeading';
import BasePage from 'components/BasePage';
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

      <ArticleHeading level={3}>Process</ArticleHeading>
      <Text variant="para">
        Figure 1 shows a little bit about how the{' '}
        <b>
          <i>Landscapes</i>
        </b>{' '}
        images are constructed.
        <br />
      </Text>

      <Text variant="para">
        This image generator makes heavy use of the Midpoint Displacement algorithm. The basic idea
        of this algorithm is take the midpoint of a line segment and move it at an angle tangent to
        the original line segment. This creates two new line segments, which you can recursively
        apply the same algorithm to, as demonstrated in Figure 2.
      </Text>

      <Text variant="para">
        Before the main generation process starts, a basic two-color palette is chosen and a color
        gradient is computed to bridge the two colors.
      </Text>
      <Text variant="para">
        Each layer of terrain starts as a single line which stretches across the width of the image.
        Then the midpoint displacement algorithm is applied to this line several times. Occasinally,
        a tree will be drawn on a layer of terrain. Trees start as a single branch (the trunk) and
        then split into two smaller trees (branches), recursively. There is a reason why recursive
        data structures are called trees!
      </Text>
    </Container>
  );
};

export default BasePage(ArtAlgLandscapes, {
  meta: {
    title: 'Landscapes',
  },
});
