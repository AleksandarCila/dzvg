import React, { FC } from "react";

import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";

type ContactsGroupProps = {
  contactsGroup: {
    title: string;
    children: { title: string; number: string }[];
  };
};

export const ContactsGroup: FC<ContactsGroupProps> = ({ contactsGroup }) => {
  return (
    <TableContainer py={5} width="100%">
      <Table variant="simple" layout="fixed">
        <Thead>
          <Tr>
            <Th fontSize="xl" fontWeight="bold">
              {contactsGroup.title}
            </Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {contactsGroup.children.map((contact) => (
            <Tr key={`${contact.title}${contact.number}`}>
              <Td whiteSpace='pre-wrap'>{contact.title}</Td>
              <Td fontWeight="bold">{contact.number}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
