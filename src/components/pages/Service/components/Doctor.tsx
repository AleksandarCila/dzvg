import { FC } from "react";

import { Box, Heading, Text } from "@chakra-ui/react";

type DoctorProps = {
  title: string;
  children?: React.ReactNode;
};

export const Doctor: FC<DoctorProps> = ({ title, children }) => {
  return children ? (
    <Box my={2}>
      <Text fontSize='xl' fontWeight="bold">
        {title}
      </Text>
      <Text fontStyle="italic" fontSize="md">
        {children}
      </Text>
    </Box>
  ) : null;
};
