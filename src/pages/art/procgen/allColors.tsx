import { Container, Link, ListItem, OrderedList, Text } from '@chakra-ui/react';
import ArticleHeading from 'components/ArticleHeading';
import BasePage from 'components/BasePage';
import Gallery from 'components/Gallery';
import React from 'react';

const ArtAlgAllColors = () => {
  return (
    <Container variant="article">
      <ArticleHeading>All Colors</ArticleHeading>

      <Text variant="para">
        The{' '}
        <b>
          <i>All Colors</i>
        </b>{' '}
        generator creates an image with a simple goal: create an image which contains every color in
        a given color space. The inspiration for this generator came from a{' '}
        <Link href="https://codegolf.stackexchange.com/q/22144" isExternal>
          post of the Code Golf stack exchange
        </Link>
        , specifically the accepted answer from user <i>fejesjoco</i>. My algorithm is loosely based
        on fejesjoco&apos;s, mainly differing in how colors are sorted and placed, and choosing what
        colors are available.
      </Text>
      <Text variant="para">
        This generator consumed more of my time than any other generator. It seems like a simple
        problem at first until you realize that it involves keeping several lists, some sorted, each
        with lengths in the millions if not billions. Speeding up this generator was a challenge,
        but I think I found a good balance between cutting corners and optimization.
      </Text>

      <ArticleHeading level={3}>Process</ArticleHeading>
      <Text variant="para">Image generation happens in three main steps:</Text>
      <OrderedList>
        <ListItem>Chose and sort colors</ListItem>
        <ListItem>Place colors</ListItem>
        <ListItem>Clean up</ListItem>
      </OrderedList>
      <Text variant="para">
        The first phase, <i>choose and sort colors</i>, involves iterating through the RGB color
        space and adding these colors to a giant list. The size of each step through the color space
        is determined by the size of the image. I look for the greatest power of 2 which does not
        exceed a value. Usually this value is the total number of pixels in the image, but sometimes
        I set it higher so that the entire image is filled with color (see Figure 4). The list is
        then sorted according to some criteria. To sort the colors, I first convert the RGB values
        into HSB values, and then sort with a specific comparison function which prioritizes the hue
        above saturation and brightness.
      </Text>
      <Text variant="para">
        To place the colors, I first place one or more &quot;seed&quot; pixels. This seed is very
        intentionally never in the middle of the image, as <i>fejesjoco</i> chose, to follow the
        rule of thirds. Whenever a pixel is placed, its empty neighbors get added to a list of
        &quot;available&quot; pixels. Then I take the next color from the list and search over the
        available pixels for the best match. This repeats until all colors have been placed, or
        there are no more available pixels.
      </Text>
      <Text variant="para">
        The clean up step is the simplest of the three. The entire image is scanned for small gaps
        and fills them in with the average color of their surrounding neighbors. The algorithm does
        not always apply this step, just to add a little bit more variety in the output.
      </Text>

      <ArticleHeading level={3}>Optimizations</ArticleHeading>
      <Text variant="para">
        Most of the images output by this generator include a lot of negative black space. I think
        this improves the composition of the images, but it also has the wonderful consequence of
        less colors to place, and therefore a faster execution time.
      </Text>
      <Text variant="para">
        Sorting the list before placing colors is an extremely important step to improve the
        performance of this algorithm. Because the colors are already sorted, I can assume that the
        next color in the list must be very close to at least one color which has already been
        placed. This assumption means that I do not have to check every best possible color for
        every available pixel during each loop. Instead, the next color is assumed to be the best
        possible match for at least one available pixel, and all I have to do is find that pixel.
      </Text>
      <Text variant="para">
        A lot of time was also spent in making this algorithm able to place several colors in
        parallel. It took a lot of trial and error to figure out the best number of threads to get
        the quickest execution time while ensuring no color was ever stuck in a limbo trying to find
        the best location, but always being beat by another thread.
      </Text>
      <Text variant="para">
        Finally, the last major optimization is that the algorithm actually scales down the
        requested image size before choosing and placing colors, then scales it back up at the end.
        The effect is that the individual &quot;pixels&quot; are more visible, and, more
        importantly, the algorithm takes much less time to run.
      </Text>

      <ArticleHeading level={3}>Gallery</ArticleHeading>
      <Gallery
        landscapeUrls={[
          '/images/art/all_colors/all_colors_1.png',
          '/images/art/all_colors/all_colors_2.png',
          '/images/art/all_colors/all_colors_3.png',
          '/images/art/all_colors/all_colors_4.png',
          // '/images/art/all_colors/all_colors_limited_range_1.png',
          // '/images/art/all_colors/all_colors_limited_range_2.png',
          // '/images/art/all_colors/all_colors_limited_range_3.png',
          // '/images/art/all_colors/all_colors_limited_range_4.png',
        ].map((x) => {
          return { src: x, width: 16, height: 9 };
        })}
        portraitUrls={[]}
        squareUrls={[]}
      />
    </Container>
  );
};

export default BasePage(ArtAlgAllColors, {
  meta: {
    title: 'All Colors',
  },
});
