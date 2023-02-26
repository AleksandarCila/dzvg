import { FC } from "react";

import { Box, Heading, Text } from "@chakra-ui/react";

type MainDoctorProps = {
  title: string;
  children?: React.ReactNode;
};

export const MainDoctor: FC<MainDoctorProps> = ({ title, children }) => {
  return children ? (
    <Box my={2}>
      <Heading as="h6" fontWeight="bold" fontSize='xl'>
        {title}
      </Heading>
      <Text fontStyle="italic" fontSize="lg">
        {children}
      </Text>
    </Box>
  ) : null;
};
