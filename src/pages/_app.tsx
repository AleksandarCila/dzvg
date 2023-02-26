import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { colors } from "../styles";

import type { AppProps } from "next/app";

import { Footer, Navbar } from "../components";

import { Montserrat, Manrope } from "@next/font/google";

const montserrat = Montserrat({ subsets: ["cyrillic"] });
const manrope = Manrope({ subsets: ["cyrillic"] });

const theme = extendTheme({ colors });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <main className={`${montserrat.className} ${manrope.className}`} style={{minHeight:'50vh', marginBottom:"20px"}}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </ChakraProvider>
  );
}
