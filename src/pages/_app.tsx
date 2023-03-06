import { useRef, useState, useEffect } from "react";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { colors } from "../styles";

import type { AppProps } from "next/app";

import { Footer, Navbar, ScrollToTop } from "../components";

import { Montserrat, Manrope } from "@next/font/google";

import '../styles/Carousel.css'

const montserrat = Montserrat({ subsets: ["cyrillic"] });
const manrope = Manrope({ subsets: ["cyrillic"] });

const theme = extendTheme({ colors });

export default function App({ Component, pageProps }: AppProps) {
  const pageTopRef = useRef<HTMLDivElement>(null);

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const scrollListener = (e: Event) => {
      if (pageTopRef.current)
        if (window.pageYOffset >= 100) setShowScrollToTop(true);
        else setShowScrollToTop(false);
    };

    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  const handleScrollToTop = () => {
    if (pageTopRef.current)
      pageTopRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ChakraProvider theme={theme}>
      <div ref={pageTopRef}>
        <Navbar />
        <main
          className={`${montserrat.className} ${manrope.className}`}
          style={{ minHeight: "50vh", marginBottom: "20px" }}
        >
          <Component {...pageProps} />
        </main>
        <Footer />
        <ScrollToTop show={showScrollToTop} onClick={handleScrollToTop} />
      </div>
    </ChakraProvider>
  );
}
