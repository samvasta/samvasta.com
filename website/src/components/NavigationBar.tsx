import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  useDisclosure,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import React from 'react';
import { GoTo } from 'routes';
import icons from 'theme/icons';
import Link from './Link';
import SocialLinks from './SocialLinks';

const fontSize = { base: '2xl', md: 'lg', lg: 'md' };

export interface NavigationBarProps {
  bg: string;
  color: string;
  mb: number | string;
  activeStyle: any;
}

const NavigationBar = (props: NavigationBarProps): JSX.Element => {
  const { bg, color, mb, activeStyle } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navItems = [
    <Link to={GoTo.Home} color={color} activeStyle={activeStyle}>
      Home
    </Link>,
    <Link to={GoTo.Home} color={color} activeStyle={activeStyle}>
      Software
    </Link>,
    <Link to={GoTo.Tinkering.Home} color={color} activeStyle={activeStyle}>
      Tinkering
    </Link>,
    <Link to={GoTo.Art.Home} color={color} activeStyle={activeStyle}>
      Art
    </Link>,
    <Link to={GoTo.Personal.Resume} color={color} activeStyle={activeStyle}>
      Resume
    </Link>,
  ];

  return (
    <Flex
      dir="row"
      flexWrap="wrap"
      justifyContent="space-between"
      bg={bg}
      mb={mb}
      alignItems="center"
    >
      {/* Non-Mobile */}
      <Wrap spacing={4} p={4} fontSize={fontSize} display={{ base: 'none', md: 'inherit' }}>
        {navItems.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <WrapItem key={index}>{item}</WrapItem>
        ))}
      </Wrap>

      {/* Mobile */}
      <IconButton
        bg={bg}
        color={color}
        display={{ base: 'inherit', md: 'none' }}
        icon={<Icon w={6} h={6} as={icons.HamburgerMenu} />}
        aria-label="Navigation"
        onClick={onOpen}
        _focus={{ borderWidth: 0 }}
        _active={{ bg }}
      />
      <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg={bg} color={color}>
            <DrawerCloseButton _focus={{ borderWidth: 0 }} />
            <DrawerHeader>Sam Vasta</DrawerHeader>

            <DrawerBody>
              <VStack alignItems="start" spacing={3}>
                {navItems}
              </VStack>
            </DrawerBody>

            <DrawerFooter>
              <SocialLinks color={color} />
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>

      {/* Always visible  */}
      <SocialLinks color={color} />
    </Flex>
  );
};

export default NavigationBar;
