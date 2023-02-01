import { FC } from "react";

import { Flex, Icon, Text } from "@chakra-ui/react";

import { BsFillTelephoneFill } from "react-icons/bs";

type PhoneContactProps = {
  type: string;
  number: string;
};

export const PhoneContact: FC<PhoneContactProps> = ({ type, number }) => {
  return (
    <Flex
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="center"
      gap={5}
      py={2}
      
    >
      <Icon color="primary.200" fontSize='xl'>
        <BsFillTelephoneFill />
      </Icon>
      <Text>{number}</Text>
      -
      <Text fontStyle="italic">{type}</Text>
    </Flex>
  );
};
