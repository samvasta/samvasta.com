import { Box, EASINGS, Heading, Link, SlideFade } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

export interface ILinkButtonProps {
  to: string;
  texts: string[];
  start: boolean;
  onFinished?: () => void;
  hoverBackgroundImg?: string;
}

const LinkButton = (props: ILinkButtonProps) => {
  const { to, texts, start, onFinished, hoverBackgroundImg } = props;

  const [index, setIndex] = useState(-1);
  
  const onAnimationEnded = () => {
    if(index < texts.length-1) {
      setTimeout(() => {
        setIndex(index+1);
      }, 200);
    }
    else if(onFinished){
      onFinished();
    }
  }

  useEffect(() => {
    if(start){
      onAnimationEnded();
    }
  });

  const text = texts[index];

  if(!start){
    return null;
  }

  const hover = hoverBackgroundImg ?
      {
        bgImage: hoverBackgroundImg,
        bgSize: "cover",
        bgPosition: "center",
        color: "white",
        textShadow: "3px 3px rgba(0,0,0,0.7)"
      } :
      {
        bg: "yellow.600"
      };

  return (
    <Link to={to} as={ReactRouterLink} width="full" variant="noUnderline" >
      <Box bg="yellow.500" color="gray.900" px={8} py={4} width="full" _hover={hover}  >
        {index >= 0 && 
          <SlideFade key={text} in={start} 
                     onAnimationComplete={onAnimationEnded}>
            <Heading textAlign="left" size="2xl" >
              {text}
            </Heading>
          </SlideFade>
        }
      </Box>
    </Link>);
}
export default LinkButton;