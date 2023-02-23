import { extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans/300.cs";
import "@fontsource/open-sans/400.cs";
import "@fontsource/open-sans/700.cs";
// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      100: "#FF3c00",
    },
  },
  fonts: {
    body: "Open Sans, sans-serif",
  },
  styles :{
    global: () => ({
        body: {
            bg: "gray.200",
        },
    }),
  },
  components: {
        // Button
  }
});