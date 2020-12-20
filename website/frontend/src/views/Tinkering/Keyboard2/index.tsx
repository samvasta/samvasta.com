import { Box, Container, Grid, Link, ListItem, OrderedList, SimpleGrid, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import Code from 'react-syntax-highlighter';
import {obsidian as codeStyle} from 'react-syntax-highlighter/dist/esm/styles/hljs'

import ArticleHeading from 'components/ArticleHeading';
import CaptionedImage from 'components/CaptionedImage';
import QuoteText from 'components/QuoteText';
import { decorateWithNavBar } from 'components/NavigationBar';

const Keyboard2 = () => {

  return (
    <Container variant="article">
      <ArticleHeading level={1}>Custom Keyboard Mk.II</ArticleHeading>
      <ArticleHeading level={2}>Improving on the Original</ArticleHeading>

      <Text variant="para">
        The original <code>Wing_it!</code> was a surprising success, but there is always
        room for improvement. Using the Mk. I as my daily driver quickly brought to light
        the deficiencies of my original design and got me thinking of an even better keyboard.
      </Text>

      <ArticleHeading level={3}>Keeping the Good</ArticleHeading>
      <ArticleHeading level={4}>Layout</ArticleHeading>
      <Text variant="para">
        The general layout of the original <code>Wing_it!</code> fit my hands well. This wasn't
        a big surprise considering the amount of time I spent prototyping and refining the layout.
        The Mk. II fits in the exact same footprint as the Mk. I.
      </Text>

      <ArticleHeading level={4}>Vertical Scrolling</ArticleHeading>
      <Text variant="para">
        The rotary encoder used for vertical scrolling in the original <code>Wing_it!</code> was
        effective and helpful. Plans for the Mk. II includes a rotary encoder in an optional module.
      </Text>

      <ArticleHeading level={3}>Improving the Bad</ArticleHeading>
      <ArticleHeading level={4}>Horizontal Scrolling</ArticleHeading>
      <Text variant="para">
        The 2nd rotary encoder used for horizontal scrolling had one fatal flaw. Almost no
        applications actually support horizontal scrolling. The dedicated horizontal scroll
        wheel was awesome when it worked, but I don't think it worth keeping for Mk. II.
      </Text>

      <ArticleHeading level={4}>Analog Thumbstick Mouse Controller</ArticleHeading>
      <Text variant="para">
        The thumbstick in the middle of the original <code>Wing_it!</code> design was one of
        those "because I can" features. There were three main issues, all hardware limitations.
      </Text>
      <Text variant="para">
        First, the thumbstick components I received are not precision devices. Releasing the
        stick would cause it to spring back to center, but the area that the stick could
        eventually settle (called the "dead zone") in was too big. I ended up having to set
        the dead zone to cover 50% of both the X and Y axis.
      </Text>
      <Text variant="para">
        The second issue was exacerbated by the first. The analog-to-digital converters (ADC)
        I used were built into the microcontroller and were not precise enough to make up for
        the large dead zone.
      </Text>
      <Text variant="para">
        Finally, the thumbstick is difficult to move presicely. The stick takes a lot of force
        to get moving so by the time it's moving you have already pushed it against the edge of
        its restraining outer ring. It is also difficult to move the thumbstick at any angle
        off of the X/Y axes unless the stick is riding against that outer ring.
      </Text>
      <Text variant="para">
        The end result was that the thumbstick acted more like an 8-direction D-pad, nullifying
        the utility of the thumbstick. I'm not giving up on the idea of controlling the mouse,
        but I am giving up on that particular component, and the ADC embedded in the microcontroller.
      </Text>

      <ArticleHeading level={4}>LCD Screen</ArticleHeading>
      <Text variant="para">
        The LCD Screen actually worked really well. I did not end up using it to its fullest
        potential and it became a glorified num/caps lock indicator. So I decided the Mk. II
        would not feature a display.
      </Text>

      <ArticleHeading level={3}>New Features</ArticleHeading>
      <Text variant="para">
        Refining a successful design is nice but I enjoy inventing even more. There was a
        long list of new features I considered but here is what I settled on:
      </Text>

      <UnorderedList>
        <ListItem>Wireless/Bluetooth Connectivity</ListItem>
        <ListItem>USB Type-C</ListItem>
        <ListItem>Expansion Module(s)</ListItem>
        <ListItem>Not hand-wired</ListItem>
      </UnorderedList>

      <ArticleHeading level={2}>PCB Design</ArticleHeading>
      <Text variant="para">
        A non-hand-wired custom layout keyboard requires designing a custom PCB. Luckily
        there is an excellent{' '}
        <Link href="https://github.com/ruiqimao/keyboard-pcb-guide">guide written by github user Ruiqi Mao</Link>.
      </Text>

      <ArticleHeading level={2}>Hardware Design</ArticleHeading>
      <Text variant="para">
        The main focus of the Mk. II was the PCB design, so I chose to reuse the form-factor of
        the original, including the outline and layout.
      </Text>

      <ArticleHeading level={2}>Executing the Plan*</ArticleHeading>
      <Text as="sup">*consider the keyboard was named 'wing it' for a reason</Text>

      <ArticleHeading level={2}>Outcome</ArticleHeading>
      <ArticleHeading level={3}>What Went Wrong</ArticleHeading>
      <ArticleHeading level={3}>Lessons Learned</ArticleHeading>
      
      <ArticleHeading level={2}>Future Keyboard(s)</ArticleHeading>
    </Container>
  )
}

export default decorateWithNavBar(Keyboard2);