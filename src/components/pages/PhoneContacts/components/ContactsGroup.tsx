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
      <Table variant="simple" layout="fixed" borderColor='primary.100'>
        <Thead borderColor='primary.100'>
          <Tr borderColor='primary.100'>
            <Th fontSize="xl" fontWeight="bold" borderColor='primary.100'>
              {contactsGroup.title}
            </Th>
            <Th borderColor='primary.100'></Th>
          </Tr>
        </Thead>
        <Tbody borderColor='primary.100'>
          {contactsGroup.children.map((contact) => (
            <Tr key={`${contact.title}${contact.number}`} borderColor='primary.100'>
              <Td whiteSpace='pre-wrap' borderColor='transparent'>{contact.title}</Td>
              <Td fontWeight="bold" borderColor='transparent'>{contact.number}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
