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
        // borderColor="primary.200"
        borderRadius={25}
        my={4}
        boxShadow="0px 0px 5px rgba(227, 127, 125, 0.7)"
        _hover={{boxShadow:"0px 0px 10px rgba(227, 127, 125, 0.8)"}}
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
