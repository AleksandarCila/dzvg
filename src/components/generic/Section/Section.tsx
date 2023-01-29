import { FC } from "react";

import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { PrimaryButton } from "../Button";

type SectionProps = {
  title: string;
  text: string;
  imageSrc: string;
  cta: string;
  href: string;
  direction?: 'row' | 'row-reverse'
};

export const Section: FC<SectionProps> = ({
  title,
  text,
  imageSrc,
  cta,
  href,
  direction = 'row'
}) => {
  return (
    <Flex
      width="100%"
      justify="center"
      align="center"
      direction={{ base: "column", lg: direction }}
      
    >
      <Box width={{ base: "100%", lg: "50%" }}>
        <Image
          src={imageSrc}
          alt={title}
          width="100%"
          height="400px"
          objectFit="cover"
          objectPosition="center"
        />
      </Box>

      <Stack
        direction="column"
        justify={{ base: "center", md: "flex-start" }}
        spacing={8}
        py={8}
        px={8}
        width={{ base: "100%", lg: "50%" }}
      >
        <Heading as="h5">{title}</Heading>
        <Divider width="100px" borderColor="primary.100" borderWidth={3} />
        <Text>{text}</Text>
        <PrimaryButton>{cta}</PrimaryButton>
      </Stack>
    </Flex>
  );
};
