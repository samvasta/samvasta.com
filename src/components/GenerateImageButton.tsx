import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { Box, BoxProps, Image } from '@chakra-ui/react';
import { useQuery } from 'react-query';

interface GenerateImageProps {
  genWidth: number;
  genHeight: number;
  generator: string;
}

function hexToBase64(str) {
  return btoa(
    String.fromCharCode.apply(
      null,
      str
        .replace(/\r|\n/g, '')
        .replace(/([\da-fA-F]{2}) ?/g, '0x$1 ')
        .replace(/ +$/, '')
        .split(' '),
    ),
  );
}

type GenerateImageButtonProps = GenerateImageProps & BoxProps;

const useGenerateImage = (imageProps: GenerateImageProps) => {
  const { generator, genWidth, genHeight } = imageProps;
  return useQuery([generator, genWidth, genHeight], async () => {
    const { data } = await axios.get(`/api/procgen/${generator}/${genWidth}/${genHeight}`);
    return data;
  });
};

const GenerateImageButton = (props: GenerateImageButtonProps) => {
  const { genWidth, genHeight, generator, ...boxProps } = props;
  // const [src, setSrc] = useState('');

  const { data, isError, isLoading, isFetching, error } = useGenerateImage({
    genWidth,
    genHeight,
    generator,
  });

  console.log(data);

  // useEffect(() => {
  // const b64 = Buffer.from(data.toString(), 'binary').toString('base64');
  // const url = (window.URL ? URL : webkitURL).createObjectURL(b64);
  // setSrc(url);
  // }, [data, genWidth, genHeight, generator]);

  // if (src === '') {
  //   return null;
  // }
  // console.log(data);

  // console.log(b64);
  // const dataUrl = useMemo(() => {
  //   const b64 = data && Buffer.from(data.toString(), 'binary').toString('base64');
  //   return b64 && `data:image/png;base64,${b64}`;
  // }, [generator, genWidth, genHeight]);

  const url = `/api/procgen/${generator}/${genWidth}/${genHeight}`;
  console.log(url);

  return (
    <Box {...boxProps}>
      <Image src="" minW="md" minH="sm" />
    </Box>
  );
};

export default GenerateImageButton;
