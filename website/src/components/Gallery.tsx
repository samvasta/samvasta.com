import React, { useState } from 'react';
import sortBy from 'lodash/sortBy';
import PhotoGallery from 'react-photo-gallery';
import { Image, Modal, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react';

export interface GalleryProps {
  landscapeUrls: string[];
  portraitUrls: string[];
  squareUrls: string[];
}

interface GalleryItem {
  src: string;
  width: number;
  height: number;
  rand: number;
}

const urlToPhoto = (url: string): GalleryItem => {
  const regex = /\d+-\d+-\d+_\d+-\d+-\d+-\d+_(\d+)x(\d+)_([a-fA-F0-9-]*)/;
  const match = url.match(regex);

  if (match) {
    const photo: GalleryItem = {
      width: Number.parseInt(match[1], 10),
      height: Number.parseInt(match[2], 10),
      src: url,
      rand: Number.parseInt(match[3], 16),
    };
    return photo;
  }

  return {
    width: 1,
    height: 1,
    src: url,
    rand: -1,
  };
};

const Gallery = (props: GalleryProps): JSX.Element => {
  const { landscapeUrls, portraitUrls, squareUrls } = props;

  const [currentImage, setCurrentImage] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    onOpen();
  };

  const photos: GalleryItem[] = sortBy(
    [...landscapeUrls, ...portraitUrls, ...squareUrls].map(urlToPhoto),
    ['rand'],
  );

  return (
    <>
      <PhotoGallery photos={photos} onClick={(_, { index }) => openLightbox(index)} />
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent maxH="80vh" maxW="80vw" bg="transparent" boxShadow="none" width="unset">
          <Image src={photos[currentImage].src} fit="contain" maxH="80vh" maxW="100%" />
        </ModalContent>
      </Modal>
    </>
  );
};

export default Gallery;
