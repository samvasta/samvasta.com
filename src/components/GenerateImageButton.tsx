import React, { useState } from 'react';
import axios from 'axios';
import Icons from 'theme/icons';
import {
  AspectRatio,
  Box,
  BoxProps,
  Button,
  CircularProgress,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberInput,
  NumberInputField,
  Radio,
  RadioGroup,
  Select,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

interface GenerateImageProps {
  generator: string;
}

const commonResolutions = [
  // 1080p
  { w: 1920, h: 1080 },
  // 1200p
  { w: 1920, h: 1200 },
  { w: 1200, h: 1200 },
  // 1440p
  { w: 2560, h: 1440 },
  { w: 3440, h: 1440 },
  // 1600p
  { w: 2560, h: 1600 },
  { w: 3840, h: 1600 },
  // 1920p
  { w: 1080, h: 1920 },
  // 2160p
  { w: 3840, h: 2160 },
];

type GenerateImageButtonProps = GenerateImageProps & BoxProps;

const GenerateImageButton = (props: GenerateImageButtonProps) => {
  const { generator, ...boxProps } = props;
  const [src, setSrc] = useState('');
  const [isCustomDimensions, setIsCustomDimensions] = useState('false');
  const [isLoading, setIsLoading] = useState(false);
  const [genWidth, setGenWidth] = useState(1920);
  const [genHeight, setGenHeight] = useState(1080);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const generateImage = async () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    const { data } = await axios.get(`/api/procgen/${generator}/${genWidth}/${genHeight}`);
    if (data.url) {
      setSrc(data.url);
    }
    setIsLoading(false);
  };

  return (
    <Box {...boxProps} w={{ base: '65vw', md: 'xl', lg: '2xl' }}>
      <Heading size="md" textAlign="center">
        Generate a completely new image on-demand
      </Heading>
      <Text textAlign="center">
        Click the generate button to create a completely unique image just for you.
      </Text>
      {(src || isLoading) && (
        <Box
          backgroundColor="#ddc"
          border="solid 2.5vmin #eee"
          borderBottomColor="#d6b13b"
          borderLeftColor="#cf9834"
          borderRightColor="#cf9834"
          borderTopColor="#c18822"
          boxShadow="0 0 5px 0 rgba(0,0,0,0.25) inset, 0 5px 10px 5px rgba(0,0,0,0.25)"
          borderRadius="2px"
          boxSizing="border-box"
          padding="0vmin"
        >
          <AspectRatio
            ratio={genWidth / genHeight}
            bg="gray.200"
            maxW={{ base: '65vw', md: 'xl', lg: '2xl' }}
          >
            <Box>
              {src && !isLoading && <Image src={src} width="full" />}
              {isLoading && <CircularProgress isIndeterminate color="red.600" />}
            </Box>
          </AspectRatio>
        </Box>
      )}

      <Flex flexDir="row" justifyContent="flex-start" my={4}>
        {src && (
          <Button
            as={Link}
            href={isLoading ? '#' : src}
            download={isLoading ? undefined : src}
            colorScheme="red"
            mr={4}
            disabled={isLoading}
            isDisabled={isLoading}
          >
            Download
          </Button>
        )}
        <Button colorScheme="blue" onClick={generateImage} isDisabled={isLoading} mr={4}>
          {src ? 'Generate Another' : 'Generate!'}
        </Button>
        <IconButton
          aria-label="Settings"
          icon={<Icons.Settings />}
          onClick={(_e) => {
            if (!isLoading) {
              onOpen();
            }
          }}
          isDisabled={isLoading}
          variant="ghost"
        />
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading>Image Dimensions</Heading>
          </ModalHeader>
          <ModalBody>
            <RadioGroup
              mb={4}
              onChange={(value) => {
                if (value === 'false') {
                  setGenWidth(commonResolutions[0].w);
                  setGenHeight(commonResolutions[0].h);
                }
                setIsCustomDimensions(value.toString());
              }}
              value={isCustomDimensions}
            >
              <HStack direction="row">
                <Radio value="false">Common</Radio>
                <Radio value="true">Custom</Radio>
              </HStack>
            </RadioGroup>
            {isCustomDimensions === 'true' && (
              <HStack>
                <Text>Image Size:</Text>
                <NumberInput
                  defaultValue={genWidth}
                  max={4096}
                  min={256}
                  keepWithinRange
                  clampValueOnBlur
                  width={40}
                  onChange={(valueStr) => {
                    setGenWidth(Number.parseInt(valueStr, 10));
                  }}
                >
                  <NumberInputField placeholder="Width" />
                </NumberInput>
                <Text>X</Text>
                <NumberInput
                  defaultValue={genHeight}
                  max={4096}
                  min={256}
                  keepWithinRange
                  clampValueOnBlur
                  width={40}
                  onChange={(valueStr) => {
                    setGenHeight(Number.parseInt(valueStr, 10));
                  }}
                >
                  <NumberInputField />
                </NumberInput>
              </HStack>
            )}
            {isCustomDimensions === 'false' && (
              <Select
                value={`${genWidth}.${genHeight}`}
                onChange={(e) => {
                  const [width, height] = e.target.value.split('.');
                  setGenWidth(Number.parseInt(width, 10));
                  setGenHeight(Number.parseInt(height, 10));
                }}
              >
                {commonResolutions.map((res) => {
                  return (
                    <option key={`${res.w}.${res.h}`} value={`${res.w}.${res.h}`}>
                      {res.w}x{res.h}
                    </option>
                  );
                })}
              </Select>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default GenerateImageButton;
