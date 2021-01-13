import React, { useState } from 'react';
import sortBy from 'lodash/sortBy';
import PhotoGallery from 'react-photo-gallery';
import { Image, Modal, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react';

export interface GalleryProps {
  landscapeUrls: GalleryItem[];
  portraitUrls: GalleryItem[];
  squareUrls: GalleryItem[];
}

export interface GalleryItem {
  src: string;
  width: number;
  height: number;
}

interface KeyedGalleryItem extends GalleryItem {
  id: number;
}

const urlToPhoto = (item: GalleryItem, index: number): KeyedGalleryItem => {
  const photo: KeyedGalleryItem = {
    ...item,
    id: index,
  };
  return photo;
};

const Gallery = (props: GalleryProps): JSX.Element => {
  const { landscapeUrls, portraitUrls, squareUrls } = props;

  const [currentImage, setCurrentImage] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    onOpen();
  };

  const photos: KeyedGalleryItem[] = sortBy(
    [...landscapeUrls, ...portraitUrls, ...squareUrls].map(urlToPhoto),
    ['rand'],
  );

  return (
    <>
      <PhotoGallery
        photos={photos}
        direction="row"
        margin={10}
        onClick={(_, { index }) => openLightbox(index)}
      />
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay bg="#000000BB" />
        <ModalContent maxH="80vh" maxW="80vw" bg="transparent" boxShadow="none" width="unset">
          <Image src={photos[currentImage].src} fit="contain" maxH="80vh" maxW="100%" />
        </ModalContent>
      </Modal>
    </>
  );
};

export default Gallery;
