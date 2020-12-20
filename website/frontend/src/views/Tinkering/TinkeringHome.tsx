import { Box, Container, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import ArticlePreview from 'components/ArticlePreview';
import ArticleHeading from 'components/ArticleHeading';
import { decorateWithNavBar } from 'components/NavigationBar';
import React from 'react';
import { GoTo } from 'routes';

const TinkeringHome = () => {

  return (
    <Box justifyContent="center">
      <ArticleHeading level={1}>Tinkering</ArticleHeading>

      <ArticleHeading level={3}>2016</ArticleHeading>
      <Wrap my={8} spacing={8}>
        <WrapItem>

          <ArticlePreview title="Wireless Lamp"
                          imageSrc="/images/tinkering/lamp/lamp1.jpg"
                          to={GoTo.Tinkering.Keyboard1}/>
        </WrapItem>
        <WrapItem>

          <ArticlePreview title="Fountain Pen Wrap"
                          imageSrc="/images/tinkering/penwrap/penwrap2.jpg"
                          to={GoTo.Tinkering.Keyboard1}/>
        </WrapItem>
      </Wrap>

      <ArticleHeading level={3}>2018</ArticleHeading>
      <Wrap my={8} spacing={8}>
        <ArticlePreview title="Custom Keyboard"
                        imageSrc="/images/tinkering/keyboard1/TestFit1.jpg"
                        to={GoTo.Tinkering.Keyboard1}/>
      </Wrap>
      
      <ArticleHeading level={3}>2019</ArticleHeading>
      <Wrap my={8} spacing={8}>
        <ArticlePreview title="Custom Keyboard 2"
                        imageSrc="/images/tinkering/keyboard2/mcu.jpg"
                        to={GoTo.Tinkering.Keyboard2}/>
      </Wrap>
      
      <ArticleHeading level={3}>2020</ArticleHeading>
      <Wrap my={8} spacing={8}>
        <ArticlePreview title="Custom Keyboard 3"
                        imageSrc="/images/tinkering/keyboard2/bms2.jpg"
                        to={GoTo.Tinkering.Keyboard2}/>
      </Wrap>
    </Box>
  )
}

export default decorateWithNavBar(TinkeringHome);