import { Box, EASINGS, Heading, Link, SlideFade } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

export interface ILinkButtonProps {
  to: string;
  texts: string[];
}
const transitions = {
  enter: {
    duration: 0.2,
    ease: EASINGS.easeOut,
  },
  exit: {
    duration: 0.1,
    ease: EASINGS.easeIn,
  },
}

const FadeInText = (props: { text: string }) => {
  const { text } = props;
  return (
    <motion.div 
      exit={(props) => ({
        opacity: 0,
        transition: transitions.exit,
        ...(props.reverse && {
          x: props.offsetX,
          y: props.offsetY,
        }),
        ...(!props.reverse && {
          transitionEnd: {
            x: props.offsetX,
            y: props.offsetY,
          },
        }),
      })}
      enter={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: transitions.enter,
      }}>
      <Heading textAlign="left" size="3xl">
        {text}
      </Heading>
    </motion.div>
  );
}

const LinkButton = (props: ILinkButtonProps) => {
  const { to, texts } = props;

  const [index, setIndex] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (index >= texts.length - 1) {
      return;
    }

    const timeout = setTimeout(() => {
      setIndex(index + 1);
      setStartAnimation(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, [index]);

  const text = texts[index];

  return (
    <Link to={to} as={ReactRouterLink} width="full" variant="noUnderline">
      <Box bg="yellow.500" color="gray.900" p={8} width="full" _hover={{ bg: "yellow.600" }}>
        <FadeInText text={text} />
      </Box>
    </Link>);
}
export default LinkButton;