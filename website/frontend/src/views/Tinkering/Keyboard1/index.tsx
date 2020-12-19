import { Container, Image, Link, List, ListItem, OrderedList, Table, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import {Light as Code} from 'react-syntax-highlighter';
import cpp from 'react-syntax-highlighter/dist/esm/languages/hljs/cpp';
import plaintext from 'react-syntax-highlighter/dist/esm/languages/hljs/plaintext';
import {obsidian as codeStyle} from 'react-syntax-highlighter/dist/esm/styles/hljs'

import DocumentHeading from 'components/DocumentHeading';
import CaptionedImage from 'components/CaptionedImage';
import QuoteText from 'components/QuoteText';

Code.registerLanguage('cpp', cpp);
Code.registerLanguage('plaintext', plaintext);

const Keyboard1 = () => {

  return (
    <Container variant="article">
      <DocumentHeading level={1}>Hand-Wired Custom Keybaord</DocumentHeading>
        <DocumentHeading level={2}>Hardware</DocumentHeading>
        <Text variant="para">
          For my first keyboard, I decided to use a hand-wired approach to connect the components,
          as opposed to using a printed circuit boad (PCB). Other than an easier learning curve and
          lower cost, the hand-wired design allowed me to start with the physical design. The first
          step was finding a layout that I liked.
        </Text>

        <DocumentHeading level={3}>CAD &amp; Prototyping</DocumentHeading>
        <CaptionedImage src="/images/tinkering/keyboard1/cad1.png" caption="LibreCAD Layout" />
        <Text variant="para">
          I used a 2D CAD program called LibreCAD to lay out the key switches and other components
          like the microcontroller and LCD screen. I then printed the CAD file, pasted it onto some
          foamboard, and cut out holes for the key switches to get a sense of how the design felt.
        </Text>

        <CaptionedImage src="/images/tinkering/keyboard1/Prototype1.jpg" caption="Physical Prototype" />
        
        <Text variant="para">
          Naturally I didn't get it perfect on the first attempt. Revisions include changing the vertical staggering on the inner-most column, changing the thumb cluster from one column of 3 keys to a 2x2 grid, and rearranging the other components.
        </Text>

        <CaptionedImage src="/images/tinkering/keyboard1/Prototype2.jpg" caption="Revised Prototype" />


        <DocumentHeading level={3}>Assembly</DocumentHeading>
        
        <CaptionedImage src="/images/tinkering/keyboard1/LaserCutParts.jpg" caption="Top and Bottom Plate"/>
        <CaptionedImage src="/images/tinkering/keyboard1/TopPlateClearCoat.jpg" caption="Top Plate Finished"/>

        
        <CaptionedImage src="/images/tinkering/keyboard1/TestFit1.jpg" caption="Test Fit"/>
        <CaptionedImage src="/images/tinkering/keyboard1/TestFit2.jpg" caption="Test Fit"/>

        
        <CaptionedImage src="/images/tinkering/keyboard1/Assembly1.jpg" caption="Buttons and Joystick Glued"/>
        <CaptionedImage src="/images/tinkering/keyboard1/Assembly2.jpg" caption="Key Switches"/>
        <Text variant="para">
          The rotary encoders turned out to be a big pain. Firstly, the holes in the top plate
          were designed to fit the shaft. It turned out that the shaft of the encoder was not
          long enough to go through both the acrylic and bamboo top plates. I ended up using a
          set of files to expand the acrylic top plate's holes to fit the rectangular footprint
          of the encoder.
        </Text>
        
        <CaptionedImage src="/images/tinkering/keyboard1/Assembly3.jpg" caption="Rotary Encoder"/>
        <Text variant="para">
          Next, the encoders had a little nub that prevented them from sitting flush against a
          top plate. That had to be removed with my flush cutters.
        </Text>
        <Text variant="para">
          With all components in place, I could plan out how to connect everything. Note that
          the wiring guide says that current goes into columns and comes out of rows, but that
          was just a helpful way for me to think about it. I'll explain in more detail in the {' '}
          <Link href="#switch-matrix">switch matrix</Link> section below.
        </Text>

        
        <CaptionedImage src="/images/tinkering/keyboard1/wiring_guide.png" caption="Wiring Plans"/>
        <Text variant="para">
          Not shown in the plans are the connections from the Teensy to the rows and columns
          (you can see them marked with colorful dots).
        </Text>
        
        <CaptionedImage src="/images/tinkering/keyboard1/Assembly4.jpg" caption="Wiring Complete"/>

        <DocumentHeading level={2}>Software</DocumentHeading>
        <DocumentHeading level={3} id="switch-matrix">Switch Matrix</DocumentHeading>
        <DocumentHeading level={3}>Display</DocumentHeading>
        <DocumentHeading level={3}>Encoders &amp; Gray Code</DocumentHeading>
        <Text variant="para">
          Most rotary encoders use <Link href="https://en.wikipedia.org/wiki/Gray_code">gray code</Link> to
          communicate when and in which direction they have been rotated. Gray code is an ordered sequence
          of codes (usually represented as binary) where each code differs from its immediate neighbors by
          only 1 bit.
        </Text>

        <Text variant="para">
          StackExchange user Spehro Pefhany wrote a great explanation of{' '}
          <Link href="https://electronics.stackexchange.com/a/464420">why gray code is better than binary</Link>.{' '}
          Essentially, due to mechanical imperfections it is nearly impossible to change multiple bits at the
          same time. If the encoder used binary, the logic system may not be able to accommodate the "in-between"
          states when multiple bits are changing. Gray code is preferable because only one bit changes between each
          state, so no need to worry about different bits changing at different times.
        </Text>

        <Text variant="para">
          So gray code is awesome because it is inherently robust. The disadvantage is that programming
          a micro-controller (MCU), or reading code that other people have programmed to interpret it,
          is way more work than it ought to be. And indeed, there is a standard function that most
          people just copy/paste. Here it is:
        </Text>

        <Code language="cpp" style={codeStyle} >
{`void encoder_read(void) {
    for (int i = 0; i < NUMBER_OF_ENCODERS; i++) {
        encoder_state[i] <<= 2;
        encoder_state[i] |= (readPin(encoders_pad_a[i]) << 0) | (readPin(encoders_pad_b[i]) << 1);
        encoder_value[i] += encoder_LUT[encoder_state[i] & 0xF];
        if (encoder_value[i] >= ENCODER_RESOLUTION) {
            encoder_update_kb(i, COUNTRECLOCKWISE);
        }
        if (encoder_value[i] <= -ENCODER_RESOLUTION) { // direction is arbitrary here, but this is clockwise on my encoder
            encoder_update_kb(i, CLOCKWISE);
        }
        encoder_value[i] %= ENCODER_RESOLUTION;
    }
}`}
        </Code>
        <Text variant="para">
          Gross. But I had to write the firmware from scratch and I wanted to really understand how the code works,
          so I had the pleasure of trying to figure out what was going on. I ended up doing some light refactoring,
          but at the end of the day, this code needs to be as fast as possible, so making it any more readable would
          probably make it less efficient. Here is what I did:
        </Text>
        <Code language="cpp" style={codeStyle}>
{`void scan_encoders(){
    for(int i = 0; i < NUMBER_OF_ENCODERS; i++){
        //Prev state is still in the left-most 2 bits. Move it over 2 to make room for the next state
        last_encoder_states[i] <<= 2;

        //Read pin A and B into the 2 left-most bits where B is in the left-most bit and A is in the second-to-left-most bit
        last_encoder_states[i] |= ((read_pin(encoders_pin_a[i]) << 0) | (read_pin(encoders_pin_b[i]) << 1));

        //look up value using state table
        encoder_values[i] += enc_states[last_encoder_states[i] & 0xf];

        if(encoder_values[i] >= ENCODER_RESOLUTION){
            on_encoder(i, true);    //Encoder rotated clockwise
        }
        else if(encoder_values[i] <= -ENCODER_RESOLUTION){
            on_encoder(i, false);   //Encoder rotated counter-clockwise
        }

        encoder_values[i] %= ENCODER_RESOLUTION;
    }
}`}
        </Code>

        <Text variant="para">
          The first step to understanding this is to grasp how the states work. Each encoder has two pads (or pins,
          depending on how you think about the circuit), so the state can be stored as 2 bits (AB). However, we want to
          know when the state changes, so we need to keep track of the previous state. We're up to 4 bits total (ABAB).
          The first two bits are the previous state, and the final two are the current state. Now the first line
          makes sense:
        </Text>

        <Code language="cpp" style={codeStyle}>
{`//Prev state is still in the left-most 2 bits.
//Move it over 2 to make room for the next state
last_encoder_states[i] <<= 2;`}
        </Code>

        <Text variant="para">
          But the real work in this function is done on this line:
        </Text>
        <Code language="cpp" style={codeStyle}>
{`//look up value using state table
encoder_values[i] += enc_states[last_encoder_states[i] & 0xf];`}
        </Code>

        <Text variant="para">
          "enc_states" is a lookup table that translates the gray code into a
          clockwise (1), counter-clockwise (-1), or no-change (0) value. The lookup
          table is constructed using a few rules:
        </Text>
        <QuoteText>
          <Text variant="para">
            <b>Rule 1:</b> The encoder must have been rotated counter-clockwise if...
            <OrderedList ml={8}>
                <ListItem>A has change and it is equal to B, or</ListItem>
                <ListItem>B has changed and it is opposite of A</ListItem>
            </OrderedList>
          </Text>
          <Text variant="para">
            <b>Rule 2:</b> The encoder must have been rotated clockwise if...
            <OrderedList ml={8}>
                <ListItem>A has changed and it is opposite of B, or</ListItem>
                <ListItem>B has changed and it is equal to A</ListItem>
            </OrderedList>
          </Text>
        </QuoteText>
        <Text variant="para">
          These rules may be more obvious next to diagrams of A and B while the encoder is rotating.
          Remember that the encoders were designed with these rules as part of the specification.
        </Text>

        <Code language="plaintext" style={codeStyle}>
{`COUNTER-CLOCKWISE diagram

A
      ________      ________      ________
      |      |      |      |      |      |
      |      |      |      |      |      |
______|      |______|      |______|      |
---------------------------------------------------> time

B
   ________      ________      ________
   |      |      |      |      |      |
   |      |      |      |      |      |
___|      |______|      |______|      |___
---------------------------------------------------> time

Rule 1.a) When A changes, it is equal to B
Rule 1.b) When B changes, it is opposite of A`}
        </Code>
        <br/>
        <Code language="plaintext" style={codeStyle}>
{`CLOCKWISE diagram

A
      ________      ________      ________
      |      |      |      |      |      |
      |      |      |      |      |      |
______|      |______|      |______|      |
---------------------------------------------------> time


B
_____      ________      ________      ______
    |      |      |      |      |      |
    |      |      |      |      |      |
    |______|      |______|      |______|
---------------------------------------------------> time

Rule 2.a) When A changes, it is opposite of B
Rule 2.b) When B changes, it is equal to A`}
        </Code>

        <Text variant="para">
          On to building the lookup table. Each index is a 4-bit integer and can be split into
          a previous state and current state (recall the ABAB encoding from before). Then all
          we have to do is figure out which pads changed from the previous state to the current,
          and using our rules we can determine if the change was a clockwise or counter-clockwise
          rotation. Here's the full table, annotated with what changed and which rule applies:
        </Text>
      <Table fontFamily="monospace" variant="striped" size="sm" mx="auto">
          <Thead>
              <Tr>
                  <Th width={8}>Prev. AB</Th>
                  <Th width={8}>Cur. AB</Th>
                  <Th width={24} isNumeric>Index</Th>
                  <Th width={10} isNumeric>enc states</Th>
                  <Th width="auto">Description</Th>
                  <Th width="auto"></Th>
              </Tr>
          </Thead>
          <Tbody>
              <Tr>
                  <Td>LL</Td>
                  <Td>LL</Td>
                  <Td isNumeric>0  (00 00)</Td>
                  <Td isNumeric>0</Td>
                  <Td>(no change from old state)</Td>
                  <Td></Td>
              </Tr>
              <Tr>
                  <Td>LL</Td>
                  <Td>LH</Td>
                  <Td isNumeric>1  (00 01)</Td>
                  <Td isNumeric>-1</Td>
                  <Td>B changes to opposite of A</Td>
                  <Td>Rule 1.b (CCW)</Td>
              </Tr>
              <Tr>
                  <Td>LL</Td>
                  <Td>HL</Td>
                  <Td isNumeric>2  (00 10)</Td>
                  <Td isNumeric>1</Td>
                  <Td>A changes to opposite of B</Td>
                  <Td>Rule 2.a (CW)</Td>
              </Tr>
              <Tr>
                  <Td>LL</Td>
                  <Td>HH</Td>
                  <Td isNumeric>3  (00 11)</Td>
                  <Td isNumeric>0</Td>
                  <Td>(Both change, cannot determine)</Td>
                  <Td>Invalid gray code</Td>
              </Tr>
              <Tr>
                  <Td>LH</Td>
                  <Td>LL</Td>
                  <Td isNumeric>4  (01 00)</Td>
                  <Td isNumeric>1</Td>
                  <Td>B changes to equal A</Td>
                  <Td>Rule 2.b (CW)</Td>
              </Tr>
              <Tr>
                  <Td>LH</Td>
                  <Td>LH</Td>
                  <Td isNumeric>5  (01 01)</Td>
                  <Td isNumeric>0</Td>
                  <Td>(no change from old state)</Td>
                  <Td></Td>
              </Tr>
              <Tr>
                  <Td>LH</Td>
                  <Td>HL</Td>
                  <Td isNumeric>6  (01 10)</Td>
                  <Td isNumeric>0</Td>
                  <Td>(Both change, cannot determine)</Td>
                  <Td>Invalid gray code</Td>
              </Tr>
              <Tr>
                  <Td>LH</Td>
                  <Td>HH</Td>
                  <Td isNumeric>7  (01 11)</Td>
                  <Td isNumeric>-1</Td>
                  <Td>A changes to equal B</Td>
                  <Td>Rule 1.a (CCW)</Td>
              </Tr>
              <Tr>
                  <Td>HL</Td>
                  <Td>LL</Td>
                  <Td isNumeric>8  (10 00)</Td>
                  <Td isNumeric>-1</Td>
                  <Td>A changes to equal B</Td>
                  <Td>Rule 1.a (CCW)</Td>
              </Tr>
              <Tr>
                  <Td>HL</Td>
                  <Td>LH</Td>
                  <Td isNumeric>9  (10 01)</Td>
                  <Td isNumeric>0</Td>
                  <Td>(Both change, cannot determine)</Td>
                  <Td>Invalid gray code</Td>
              </Tr>
              <Tr>
                  <Td>HL</Td>
                  <Td>HL</Td>
                  <Td isNumeric>10 (10 10)</Td>
                  <Td isNumeric>0</Td>
                  <Td>(no change from old state)</Td>
                  <Td></Td>
              </Tr>
              <Tr>
                  <Td>HL</Td>
                  <Td>HH</Td>
                  <Td isNumeric>11 (10 11)</Td>
                  <Td isNumeric>1</Td>
                  <Td>B changes to equal A</Td>
                  <Td>Rule 2.b (CW)</Td>
              </Tr>
              <Tr>
                  <Td>HH</Td>
                  <Td>LL</Td>
                  <Td isNumeric>12 (11 00)</Td>
                  <Td isNumeric>0</Td>
                  <Td>(Both change, cannot determine)</Td>
                  <Td>Invalid gray code</Td>
              </Tr>
              <Tr>
                  <Td>HH</Td>
                  <Td>LH</Td>
                  <Td isNumeric>13 (11 01)</Td>
                  <Td isNumeric>1</Td>
                  <Td>A changes to opposite of B</Td>
                  <Td>Rule 2.a (CW)</Td>
              </Tr>
              <Tr>
                  <Td>HH</Td>
                  <Td>HL</Td>
                  <Td isNumeric>14 (11 10)</Td>
                  <Td isNumeric>-1</Td>
                  <Td>B changes to opposite of A</Td>
                  <Td>Rule 1.b (CCW)</Td>
              </Tr>
              <Tr>
                  <Td>HH</Td>
                  <Td>HH</Td>
                  <Td isNumeric>15 (11 11)</Td>
                  <Td isNumeric>0</Td>
                  <Td>(no change from old state)</Td>
                  <Td></Td>
              </Tr>
          </Tbody>
      </Table>

      <Text variant="para">
        So after all of that, the rest is easy. We now know the direction of rotation,
        so we can call some other function accordingly.
      </Text>

      <Code language="cpp" style={codeStyle}>
{`//look up value using state table
encoder_values[i] += enc_states[last_encoder_states[i] & 0xf];

if(encoder_values[i] >= ENCODER_RESOLUTION){
  on_encoder(i, true);    //Encoder rotated clockwise
}
else if(encoder_values[i] <= -ENCODER_RESOLUTION){
  on_encoder(i, false);   //Encoder rotated counter-clockwise
}

encoder_values[i] %= ENCODER_RESOLUTION;`}
      </Code>

      <Text variant="para">
        The ENCODER_RESOLUTION is used to slow down and sort of "smooth" the result.
        It is usually set to 2 or 4.
        If we read one clockwise rotation, did it really rotate or did the encoder
        just get nudged a little bit? If we read four rotations, we can be reasonably
        sure that the encoder did actually rotate.
      </Text>
    </Container>
  )
}

export default Keyboard1;