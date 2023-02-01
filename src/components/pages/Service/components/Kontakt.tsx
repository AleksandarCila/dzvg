import { FC } from "react";

import { Divider, Text, Box } from "@chakra-ui/react";
import { PhoneContact } from "./PhoneContact";

import { ServiceType } from "@/data";

type KontaktProps = {
  phones: ServiceType["phones"];
};

export const Kontakt: FC<KontaktProps> = ({ phones }) => {
  const shouldRender = phones.length > 0 ? true : false;
  return (
    <Box p={1} mt={10} mb={5}>
      {shouldRender && (
        <>
          <Text fontSize="xl" fontWeight="bold">
            Контакт
          </Text>
          <Divider
            my={4}
            width="100%"
            borderBottomWidth={2}
            borderColor="primary.200"
          />
        </>
      )}

      {shouldRender &&
        phones.map((phone, index) => (
          <PhoneContact
            key={`${phone.type}${phone.number}${index}`}
            type={phone.type}
            number={phone.number}
          />
        ))}
    </Box>
  );
};
