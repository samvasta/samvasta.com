const variantNoUnderline = {
  _hover: {
    textDecoration: 'none',
  },
};

export default {
  baseStyle: {
    color: 'red.400',
    _active: {
      boxShadow: 'none',
    },
    _focus: {
      boxShadow: 'none',
    },
  },
  variants: {
    noUnderline: variantNoUnderline,
  },
};
