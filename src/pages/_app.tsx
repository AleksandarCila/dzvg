import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { colors } from "../styles";

import type { AppProps } from "next/app";

import { Navbar } from "../components";

import { Montserrat, Manrope } from "@next/font/google";

const montserrat = Montserrat({ subsets: ["cyrillic"] });
const manrope = Manrope({ subsets: ["cyrillic"] });

const theme = extendTheme({ colors });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <main className={`${montserrat.className} ${manrope.className}`}>
        <Navbar />
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
}
