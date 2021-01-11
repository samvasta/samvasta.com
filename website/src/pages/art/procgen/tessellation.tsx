import { Container, Link, ListItem, OrderedList, Text, UnorderedList } from '@chakra-ui/react';
import ArticleHeading from 'components/ArticleHeading';
import BasePage from 'components/BasePage';
import React from 'react';

const ArtAlgTessellation = () => {
  return (
    <Container variant="article">
      <ArticleHeading>Tessellation</ArticleHeading>
      The{' '}
      <b>
        <i>Tesselation</i>
      </b>{' '}
      generator currently has several unique patterns, but any tesselation pattern could be added.
      The options include:
      <UnorderedList>
        <ListItem>Regular Hexagons</ListItem>
        <ListItem>Equilateral Triangles</ListItem>
        <ListItem>Parallelograms</ListItem>
        <ListItem>
          4.6.12{' '}
          <Link
            href="https://en.wikipedia.org/wiki/Euclidean_tilings_by_convex_regular_polygons#Archimedean,_uniform_or_semiregular_tilings"
            isExternal
          >
            Archimedean Tiling
          </Link>{' '}
          (See figure 6)
        </ListItem>
      </UnorderedList>
      <Text variant="para">
        That last one just means there are three types of shapes: a 4-sided regular polygon, a
        6-sided regular polygon, and a 12-sided regular polygon. Any linear transformation
        (rotation, reflection, shear, and scale) could be applied to the entire pattern while
        maintaining the tessellating properties. Therefore the pattern does not require all polygons
        to be regular; you could apply a shear.
      </Text>
      <Text variant="para">
        The{' '}
        <b>
          <i>Tesselation</i>
        </b>{' '}
        generator is currently only capable of applying a scale and rotation to patterns. While
        shearing is planned, I will not bother with reflection because all three patterns are
        radially symmetrical so a reflection could be achieved with a rotation.
      </Text>
      <ArticleHeading level={3}>Process</ArticleHeading>
      <Text variant="para">
        Figure 1 shows a little bit about how the{' '}
        <b>
          <i>Tesselation</i>
        </b>{' '}
        images are generated.
      </Text>
      <Text variant="para">
        Before the main generation process starts, a pattern and palette is chosen and some linear
        transformations are applied to the pattern such as rotating, shearing, or scaling.
      </Text>
      <Text variant="para">
        Each pattern is composed of a set of tiles and a list of neighbor points and rotations where
        the pattern can be duplicated to continue the tessellation. Patterns often contain just one
        tile, for example the regular hexagons.
      </Text>
      <Text variant="para">
        <OrderedList>
          <ListItem>
            First, a single point is chosen as the &quot;seed&quot; location and added to a list of
            locations to stamp.
          </ListItem>
          <ListItem>
            Next, a copy of the pattern is stamped at every location in the to-stamp list.
            <UnorderedList>
              <ListItem>
                Note that the outline of each pattern is shown for demonstration only and is
                actually rendered in a single pass at the end.
              </ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>
            For each stamped copy, the possible locations of neighbor copies are added to the
            to-stamp list.
          </ListItem>
          <ListItem>Steps 2 &amp; 3 are repeated until the to-stamp list is empty.</ListItem>
          <ListItem>
            Each polygon is filled in with a color slightly different that that used on the previous
            polygon, with a small chance to use a completely different color.
            <UnorderedList>
              <ListItem>
                Polygons are filled in the order in which they were placed, so sometimes a spiral
                effect can be seen (as in Figure 7).
              </ListItem>
            </UnorderedList>
          </ListItem>
        </OrderedList>
      </Text>
    </Container>
  );
};

export default BasePage(ArtAlgTessellation, {
  meta: {
    title: 'Tessellation',
  },
});
