import { Box, Circle, Collapse, Flex, Grid, GridItem, Heading, Icon, Text, useTheme } from '@chakra-ui/react';
import React from 'react';
import icons from 'theme/icons';

export interface TimelineData {
  date: string;
  icon: any;
  title: any;
  subtitle?: any;
  activeContent?: any;
  alwaysActive?: boolean;
}

export interface TimelineStyle {
  itemMargin?: number;
  lineColor?: string;
  lineMargin?: number | string;
  contentBg?: string;
  contentColor?: string;
};

export interface TimelineItemProps extends TimelineData, TimelineStyle {
  active: boolean;
  onToggle: () => void;
}

const TimelineItem = (props: TimelineItemProps) => {
  const { date, icon, title, subtitle, activeContent, alwaysActive = false,
    itemMargin = 4, lineColor = "black", lineMargin = 8, contentBg = "white", contentColor = "black",
    active, onToggle } = props;

  const theme = useTheme();

  const isActive = active || alwaysActive;

  return (
    <>
      {/* Date Label */}
      <GridItem py={{ base: 0, md:3 + itemMargin}} textAlign={{base: "center", md: "right"}}  onClick={onToggle} cursor="pointer">
        <Text fontWeight={isActive ? "bold" : "light"} borderWidth={isActive ? 1 : 0} borderColor={lineColor} p={2} rounded="lg" ml="auto" mr={{base: "auto", md: "unset"}} width="fit-content">
          {date}
        </Text>
      </GridItem>

      {/* Line & Marker */}
      <GridItem  onClick={onToggle} cursor="pointer">
        <Grid templateRows={{base: "1fr auto 1fr", md:`${theme.sizes[itemMargin + 4]} ${theme.sizes[8]} 1fr`}}
              mx={lineMargin}
              justifyItems="center"
              h="full">
          <Box w={1} bg={lineColor} zIndex={5} />
          <Circle size={8} bg={isActive ? "transparent" : lineColor}
                  borderColor={lineColor}
                  borderWidth={isActive ? 2 : 0}
                  zIndex={16}>
            <Icon w={5} h={5} as={icon} color={isActive ? "inherit" : contentColor}/>
          </Circle>
          <Box w={1} bg={lineColor} zIndex={5} />
        </Grid>
      </GridItem>

      {/* Content Card */}
      <GridItem  onClick={onToggle} cursor="pointer">
        <Box bg={contentBg} color={contentColor} my={itemMargin} p={4} boxShadow={isActive ? "2xl" : "none"} rounded="lg">
          <Heading size="md">{title}</Heading>
          {subtitle && <Text opacity="0.67" size="sm" >{subtitle}</Text>}
          {activeContent &&
          <>
            {!alwaysActive && <Text color="red.500" visibility={isActive ? "hidden" : "visible"}>Read more  </Text>}
            <Collapse in={isActive} animateOpacity>
              {activeContent}
            </Collapse>
          </>
          }
        </Box>
      </GridItem>
    </>
  );
}

export default TimelineItem;