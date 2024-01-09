import { useMediaQuery } from "@chakra-ui/react";

export const useScreenSize = () => {
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");

  return { isDesktop: isLargerThan1000 };
};
