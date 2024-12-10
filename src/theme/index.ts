import { defineStyleConfig, extendTheme } from '@chakra-ui/react';

export default extendTheme({
  components: {
    Card: defineStyleConfig({
      defaultProps: {
        variant: 'solid',
      },
      variants: {
        solid: {
          container: {
            border: '1px solid transparent',
            boxShadow: 'none',
          },
        },
      },
    }),
    Heading: {
      baseStyle: {
        fontWeight: 'semibold',
      },
    },
  },
  fonts: {
    body: '',
    heading: '',
  },
});
