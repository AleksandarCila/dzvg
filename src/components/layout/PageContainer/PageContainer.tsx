import { FC } from "react";

import { Container, ContainerProps } from "@chakra-ui/react";

export const PageContainer: FC<ContainerProps> = (props) => {
  return (
    <Container
      width="1100px"
      maxW="100%"
      justifyContent="center"
      alignItems="center"
      p={0}
    >
      {props.children}
    </Container>
  );
};
