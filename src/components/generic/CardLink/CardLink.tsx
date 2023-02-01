import { FC } from "react";

import Link from "next/link";

import { Flex, Text, Icon } from "@chakra-ui/react";
import { BsChevronRight } from "react-icons/bs";

type CardLinkProps = {
  text: string;
  href: string;
};

export const CardLink: FC<CardLinkProps> = ({ text, href }) => {
  return (
    <Link href={href}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        p={5}
        borderWidth={1}
        borderColor="primary.200"
        borderRadius={25}
        my={4}
        boxShadow="1px 2px 2px #00000060"
        _hover={{boxShadow:"2px 4px 4px #000000a0"}}
      >
        <Text fontSize="xl" flex={1}>
          {text}
        </Text>
        <Icon color="primary.200">
          <BsChevronRight />
        </Icon>
      </Flex>
    </Link>
  );
};
