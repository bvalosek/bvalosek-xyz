import { extendTheme, ThemeConfig, ThemeOverride } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
};

const overrides: ThemeOverride = {
  components: {
    Link: {
      baseStyle: {
        fontWeight: 'bold',
      },
    },
  },
};

export const theme = extendTheme(overrides, { config });
