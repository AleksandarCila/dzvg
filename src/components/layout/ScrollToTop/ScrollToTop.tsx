import { IconButton } from "@chakra-ui/react";
import React, { FC } from "react";

import { IoArrowUpOutline } from "react-icons/io5";

type ScrollToTopProps = {
  show: boolean;
  onClick: () => void;
};

export const ScrollToTop: FC<ScrollToTopProps> = ({ show, onClick }) => {
  return show ? (
    <IconButton
      aria-label="scroll-to-top"
      variant="solid"
      borderRadius="50%"
      icon={<IoArrowUpOutline />}
      colorScheme="primary"
      position="fixed"
      bottom="20px"
      right="20px"
      onClick={onClick}
    />
  ) : null;
};
