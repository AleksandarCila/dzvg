import { FC } from "react";
import { Box, Heading, Stack, Text, Image } from "@chakra-ui/react";

import Link from "next/link";

type ActionCardProps = {
  title: string;
  text: string;
  imageSrc: string;
  href: string;
};

export const ActionCard: FC<ActionCardProps> = ({
  title,
  text,
  imageSrc,
  href,
}) => {
  return (
    <Link href={href}>
      <Stack
        spacing={2}
        p={10}
        direction="column"
        justify="center"
        align="center"
        textAlign="center"
        flex={1}
        w={{base:"100%",lg:"300px",xl:"400px"}}
      >
        <Image
          src={imageSrc}
          alt={title}
          width="100px"
          height="100px"
          objectFit="cover"
          objectPosition="center"
        />
        <Heading as="h4" color="primary.200" _hover={{ color: "primary.100" }} fontSize="3xl">
          {title}
        </Heading>
        <Text>{text}</Text>
      </Stack>
    </Link>
  );
};
