import { useMediaQuery } from "@chakra-ui/react";

export const useScreenSize = () => {
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const isTablet = isLargerThan600 && !isLargerThan1000;
  return { isDesktop: isLargerThan1000, isTablet };
};
