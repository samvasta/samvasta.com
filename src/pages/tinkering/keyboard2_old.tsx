import { Container, Grid, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react';

import ArticleHeading from 'components/ArticleHeading';
import BasePage from 'components/BasePage';
import Code from 'components/Code';

const Keyboard2 = () => {
  return (
    <Container variant="article">
      <ArticleHeading level={1}>Custom Keyboard Mk.II</ArticleHeading>
      <ArticleHeading level={2}>Improving on the Original</ArticleHeading>

      <Text variant="para">
        The original <code>Wing_it!</code> was a surprising success, but there is always room for
        improvement. Using the Mk. I as my daily driver quickly brought to light the deficiencies of
        my original design and got me thinking of an even better keyboard.
      </Text>

      <ArticleHeading level={3}>Keeping the Good</ArticleHeading>
      <ArticleHeading level={4}>Layout</ArticleHeading>
      <Text variant="para">
        The general layout of the original <code>Wing_it!</code> fit my hands well. This wasn&apos;t
        a big surprise considering the amount of time I spent prototyping and refining the layout.
        To reduce the number of things that could go wrong, I decided to re-use my original CAD
        drawings so the Mk. II fits in the exact same footprint as the Mk. I.
      </Text>

      <ArticleHeading level={4}>Vertical Scrolling</ArticleHeading>
      <Text variant="para">
        The rotary encoder used for vertical scrolling in the original <code>Wing_it!</code> was
        effective and helpful. Plans for the Mk. II included a rotary encoder in an optional module.
      </Text>

      <ArticleHeading level={3}>Improving the Bad</ArticleHeading>
      <ArticleHeading level={4}>Horizontal Scrolling</ArticleHeading>
      <Text variant="para">
        The 2nd rotary encoder used for horizontal scrolling had one fatal flaw. Very few
        applications actually support horizontal scrolling. The dedicated horizontal scroll wheel
        was awesome when it worked, but I did not think it was worth keeping for Mk. II.
      </Text>

      <ArticleHeading level={4}>Analog Thumbstick Mouse Controller</ArticleHeading>
      <Text variant="para">
        The thumbstick in the middle of the original <code>Wing_it!</code> design was one of those
        &quot;because I can&quot; features. There were three main issues, all hardware limitations.
      </Text>
      <Text variant="para">
        First, the thumbstick components I received are not precision devices. Releasing the stick
        would cause it to spring back to center, but the area that the stick could eventually settle
        in (called the &quot;dead zone&quot;) was too big. I ended up having to set the dead zone to
        cover 50% of both the X and Y axis.
      </Text>
      <Text variant="para">
        The second issue was exacerbated by the first. The analog-to-digital converters (ADC) I used
        were built into the microcontroller and were not precise enough to make up for the large
        dead zone.
      </Text>
      <Text variant="para">
        Finally, the thumbstick is difficult to move precisely. The stick has high "stiction" - it
        takes a lot of force to get moving - so by the time it&apos;s moving you have already pushed
        it against the edge of its restraining outer ring. It is also difficult to move the
        thumbstick at any angle off of the X/Y axes unless the stick is riding against that outer
        ring.
      </Text>
      <Text variant="para">
        The end result was that the thumbstick acted more like an 8-direction D-pad, nullifying the
        utility of the thumbstick. I did not giving up on the idea of controlling the mouse, but I
        did give up on that particular component, and the ADC embedded in the microcontroller.
      </Text>

      <ArticleHeading level={4}>LCD Screen</ArticleHeading>
      <Text variant="para">
        The LCD Screen actually worked really well. I did not end up using it to its fullest
        potential and it became a glorified num/caps lock indicator. So I decided the Mk. II would
        not feature a display. Instead a few simple LEDs would indicate the caps lock and num lock
        states.
      </Text>

      <ArticleHeading level={3}>New Features</ArticleHeading>
      <Text variant="para">
        Refining a successful design is nice but I enjoy inventing even more. There was a long list
        of new features I considered but here is what I settled on:
      </Text>

      <UnorderedList>
        <ListItem>Wireless/Bluetooth Connectivity</ListItem>
        <ListItem>USB Type-C</ListItem>
        <ListItem>Expansion Module(s)</ListItem>
        <ListItem>Not hand-wired</ListItem>
      </UnorderedList>

      <ArticleHeading level={2}>Hardware Design</ArticleHeading>
      <Text variant="para">
        The main focus of the Mk. II was the PCB design, so I chose to reuse the form-factor of the
        original, including the footprint and layout. Missing from the original design were the
        extra components like rotary encoders, the analog thumbstick and LCD display. Removing those
        components made room for new components like a battery, bluetooth adapters and other
        components that would replace the microcontroller from the old design.
      </Text>

      <Text variant="para">
        A new trend of using through-hole components had developed since I worked on the original{' '}
        <code>wing_it</code>. I liked the idea of being able to see all of the components that made
        the keyboard work, so I used a &quot;skeleton&quot; design for the top plate which would not
        obscure the electronics. The skeleton design meant there would be less material to support
        the keys and the thin acrylic sheet from the Mk I. may not have been strong enough. That
        constraint drove the decision to build the Mk II. out of stainless steel, which has recently
        become more affordable to laser cut.
      </Text>

      <Grid gridTemplateColumns="1fr auto" columnGap={4}>
        <Text>The plan for Mk II. was another 5 layer stackup:</Text>
        <Code language="plaintext">
          {`      Layer Stackup
┌─────────────────┐  # 1.2mm stainless steel top plate
├─────────────────┤ 
│                 │  # 3.8mm spacer
├─────────────────┤  # 1.6mm PCB
├─────────────────┤
│                 │  # 3.8mm spacer
├─────────────────┤
└─────────────────┘  # 1.2mm stainless steel bottom plate`}
        </Code>
      </Grid>

      <Text variant="para">
        The last piece was a clear 0.5mm then acrylic sheet that would cover the otherwise exposed
        pcb from accidental damage.
      </Text>

      <ArticleHeading level={2}>PCB Design</ArticleHeading>
      <Text variant="para">
        A non-hand-wired custom layout keyboard requires designing a custom PCB. Luckily there is an
        excellent{' '}
        <Link href="https://github.com/ruiqimao/keyboard-pcb-guide">
          guide written by github user Ruiqi Mao
        </Link>
        . After following the guide it was relatively simple to expand the simple example to the
        layout I had in mind.
      </Text>

      <Text variant="para">
        The decision to keep the electronic components visible also came with the added constraint
        of where I could place the components. That constraint meant I had to design the PCB
        backwards. Typically the schematic drives component placement which drives the size and
        shape of the PCB, but I started with a size and shape and had to figure out how to cram all
        of my components into that space. It turned into an exercise of breaking the entire keyboard
        into groups of components for each system, placing each group in a general area, then
        refining the layout to fit inside the footprint I had alloted myself.
      </Text>

      <ArticleHeading level={2}>Executing the Plan*</ArticleHeading>
      <Text as="sup">*consider the keyboard was named &apos;wing it&apos; for a reason</Text>

      <Text variant="para">
        
      </Text>

      <ArticleHeading level={2}>Outcome</ArticleHeading>
      <ArticleHeading level={3}>What Went Wrong</ArticleHeading>
      <ArticleHeading level={3}>Lessons Learned</ArticleHeading>

      <ArticleHeading level={2}>Future Keyboard(s)</ArticleHeading>
    </Container>
  );
};

export default BasePage(Keyboard2, {
  meta: {
    title: 'Custom Keyboard v2',
  },
});
