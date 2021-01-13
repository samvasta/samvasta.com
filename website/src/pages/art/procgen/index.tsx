import { Container, Text, Wrap, WrapItem } from '@chakra-ui/react';
import fromPairs from 'lodash/fromPairs';
import ArticleHeading from 'components/ArticleHeading';
import React from 'react';
import ArticlePreview from 'components/ArticlePreview';
import { GoTo } from 'routes';
import Link from 'components/Link';
import BasePage from 'components/BasePage';
import { getThumbnailUrl } from 'data/gcp';
import { AlgorithmNames } from 'data/Art/procgen';

interface IGeneratorThumbs {
  [generatorName: string]: string;
}

const AlgorithmsHome = (props: IGeneratorThumbs) => {
  const {
    landscape,
    bezier,
    tessellation,
    triangulation,
    circlewave,
    flowfield,
    tangles,
    wovengrid,
    amoebas,
  } = props;

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
        <Link to="#techniques">techniques</Link> section at the bottom of this page.
      </Text>

      <ArticleHeading level={3}>2013-2014</ArticleHeading>
      <Wrap my={8} spacing={8}>
        <WrapItem>
          <ArticlePreview title="Landscapes" imageSrc={landscape} to="/art/procgen/landscapes" />
        </WrapItem>
        <WrapItem>
          <ArticlePreview
            title="Triangles"
            imageSrc="/images/art/triangles/triangles_1.png"
            to={GoTo.Art.Algorithms.Triangles}
          />
        </WrapItem>
      </Wrap>

      <ArticleHeading level={3}>2015-2016</ArticleHeading>
      <Wrap my={8} spacing={8}>
        <WrapItem>
          <ArticlePreview
            title="Geometric"
            imageSrc="/images/art/geometric/shapes_1.png"
            to={GoTo.Art.Algorithms.Geometric}
          />
        </WrapItem>
        <WrapItem>
          <ArticlePreview title="Bezier" imageSrc={bezier} to="/art/procgen/bezier" />
        </WrapItem>
        <WrapItem>
          <ArticlePreview
            title="Hatching"
            imageSrc="/images/art/hatched/hatched_1.png"
            to={GoTo.Art.Algorithms.Hatched}
          />
        </WrapItem>
      </Wrap>

      <ArticleHeading level={3}>2017</ArticleHeading>
      <Wrap my={8} spacing={8}>
        <WrapItem>
          <ArticlePreview
            title="All Colors"
            imageSrc="/images/art/all_colors/all_colors_1.png"
            to="/art/procgen/allColors"
          />
        </WrapItem>
        <WrapItem>
          <ArticlePreview
            title="Tesselation"
            imageSrc={tessellation}
            to="/art/procgen/tessellation"
          />
        </WrapItem>
        <WrapItem>
          <ArticlePreview
            title="Triangulation"
            imageSrc={triangulation}
            to="/art/procgen/delaunay"
          />
        </WrapItem>
        <WrapItem>
          <ArticlePreview
            title="Watercolors"
            imageSrc="/images/art/watercolors/fog_1.png"
            to={GoTo.Art.Algorithms.Watercolors}
          />
        </WrapItem>
      </Wrap>

      <ArticleHeading level={3}>2018</ArticleHeading>
      <Wrap my={8} spacing={8}>
        <WrapItem>
          <ArticlePreview title="Circle Waves" imageSrc={circlewave} to="/art/procgen/circleWave" />
        </WrapItem>
      </Wrap>

      <ArticleHeading level={3}>2019</ArticleHeading>
      <Wrap my={8} spacing={8}>
        <WrapItem>
          <ArticlePreview title="Flow Field" imageSrc={flowfield} to="/art/procgen/flowfield" />
        </WrapItem>
        <WrapItem>
          <ArticlePreview title="Tangles" imageSrc={tangles} to="/art/procgen/tangles" />
        </WrapItem>
      </Wrap>

      <ArticleHeading level={3}>2020</ArticleHeading>
      <Wrap my={8} spacing={8}>
        <WrapItem>
          <ArticlePreview title="Woven Grid" imageSrc={wovengrid} to="/art/procgen/wovenGrid" />
        </WrapItem>
        <WrapItem>
          <ArticlePreview title="Amoebas" imageSrc={amoebas} to="/art/procgen/amoebas" />
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
            to={GoTo.Art.Techniques.Randomness}
          />
        </WrapItem>
        <WrapItem>
          <ArticlePreview
            title="Color"
            imageSrc="/images/art/bezier/bezier_1.png"
            to={GoTo.Art.Techniques.Color}
          />
        </WrapItem>
        <WrapItem>
          <ArticlePreview
            title="Midpoint Displacement"
            imageSrc="/images/art/techniques/midpoint_displacement.png"
            to={GoTo.Art.Techniques.MidpointDisplacement}
          />
        </WrapItem>
      </Wrap>
    </Container>
  );
};

export const getStaticProps = async () => {
  const algorithmThumbsPromises = AlgorithmNames.map(async (name) => {
    return [name, await getThumbnailUrl(name)];
  });

  const algorithmThumbs = await Promise.all(algorithmThumbsPromises);

  return {
    props: {
      ...fromPairs(algorithmThumbs),
    },
  };
};

export default BasePage(AlgorithmsHome, {
  meta: {
    title: 'Procedural Generation',
  },
});
