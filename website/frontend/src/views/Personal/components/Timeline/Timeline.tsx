import { Grid } from '@chakra-ui/react';
import React, { useState } from 'react';
import TimelineItem, { TimelineData, TimelineStyle } from './TimelineItem';

export interface TimelineProps extends TimelineStyle {
  items: TimelineData[];
}

const Timeline = (props: TimelineProps) => {
  const {items, ...style} = props;

  const [activeIndex, setActiveIndex] = useState(-1);
  
  return (
    <Grid templateColumns={{base: "1fr", md: "auto auto 1fr"}} my={12}>
      {items.map((item, index) => {
        const onToggle = () => {
          if(activeIndex === index){
            setActiveIndex(-1);
          }
          else {
            setActiveIndex(index);
          }
        }

        return <TimelineItem {...item} {...style} active={index===activeIndex} onToggle={onToggle}/>;
      })}
    </Grid> 
  )
};

export default Timeline;