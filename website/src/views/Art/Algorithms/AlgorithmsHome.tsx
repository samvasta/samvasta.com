import { Container, Link, Text, Wrap, WrapItem } from '@chakra-ui/react';
import { HashLink } from 'react-router-hash-link';
import ArticleHeading from 'components/ArticleHeading';
import React from 'react';
import ArticlePreview from 'components/ArticlePreview';

const AlgorithmsHome = () => {
  return (
    <Container variant="article">
      <ArticleHeading level={1}>Procedural Generation</ArticleHeading>
      <Text variant="para">
        The Wallpaper Generator project was created to explore different techniques of procedural
        generation.
      </Text>
      <Text variant="para">
        This project is a Java application which can procedurally generate images in various styles.
        As the name suggests, the images are intended to be used as the background or wallpaper on a
        computer, phone, or tablet. A settings file allows users to choose how many and which types
        of images to generate.
      </Text>
      <Text variant="para">
        Although each style is unique, they all share a foundation of several ideas and techniques.
        More about these ideas and techniques can be found in the{' '}
        <Link as={HashLink} to="#techniques">
          techniques
        </Link>{' '}
        section at the bottom of this page.
      </Text>

      <ArticleHeading level={3}>2013-2014</ArticleHeading>
      <Wrap my={8} spacing={8}>
        <WrapItem>
          <ArticlePreview
            title="Landscapes"
            imageSrc="/images/art/landscapes/landscape_1.png"
            to="/art/procgen/landscapes"
          />
        </WrapItem>
        <WrapItem>
          <ArticlePreview
            title="Triangles"
            imageSrc="/images/art/triangles/triangles_1.png"
            to="/art/procgen/triangles"
          />
        </WrapItem>
      </Wrap>

      <ArticleHeading level={3}>2015-2016</ArticleHeading>
      <Wrap my={8} spacing={8}>
        <WrapItem>
          <ArticlePreview
            title="Geometric"
            imageSrc="/images/art/geometric/shapes_1.png"
            to="/art/procgen/geometric"
          />
        </WrapItem>
        <WrapItem>
          <ArticlePreview
            title="Bezier"
            imageSrc="/images/art/bezier/bezier_1.png"
            to="/art/procgen/bezier"
          />
        </WrapItem>
        <WrapItem>
          <ArticlePreview
            title="Hatching"
            imageSrc="/images/art/hatched/hatched_1.png"
            to="/art/procgen/hatched"
          />
        </WrapItem>
      </Wrap>

      <ArticleHeading level={3}>2017</ArticleHeading>
      <Wrap my={8} spacing={8}>
        <WrapItem>
          <ArticlePreview
            title="All Colors"
            imageSrc="/images/art/all_colors/all_colors_1.png"
            to="/art/procgen/all-colors"
          />
        </WrapItem>
        <WrapItem>
          <ArticlePreview
            title="Tesselation"
            imageSrc="/images/art/tesselation/tess_1.png"
            to="/art/procgen/tesselation"
          />
        </WrapItem>
        <WrapItem>
          <ArticlePreview
            title="Triangulation"
            imageSrc="/images/art/delaunay/delaunay_1.png"
            to="/art/procgen/delaunay"
          />
        </WrapItem>
        <WrapItem>
          <ArticlePreview
            title="Watercolors"
            imageSrc="/images/art/watercolors/fog_1.png"
            to="/art/procgen/watercolors"
          />
        </WrapItem>
      </Wrap>

      <ArticleHeading level={2} id="techniques">
        Techniques
      </ArticleHeading>
      <Wrap my={8} spacing={8}>
        <WrapItem>
          <ArticlePreview
            title="Randomness"
            imageSrc="/images/art/geometric/shapes_1.png"
            to="/art/procgen/geometric"
          />
        </WrapItem>
        <WrapItem>
          <ArticlePreview
            title="Color"
            imageSrc="/images/art/bezier/bezier_1.png"
            to="/art/procgen/bezier"
          />
        </WrapItem>
        <WrapItem>
          <ArticlePreview
            title="Midpoint Displacement"
            imageSrc="/images/art/techniques/midpoint_displacement.png"
            to="/art/procgen/techniques/midpoint-displacement"
          />
        </WrapItem>
      </Wrap>
    </Container>
  );
};

export default AlgorithmsHome;
