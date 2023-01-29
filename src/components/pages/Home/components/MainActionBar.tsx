import React from "react";

import { Flex } from "@chakra-ui/react";

import { ActionCard } from "@/components/generic";

export const MainActionBar = () => {
  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      bg="secondary.100"
      margin={0}
      w="100%"
      justify="center"
    >
      <ActionCard
        title="Телефонски именик"
        text="Контакт телефони служби Дома Здравља Велико Градиште и амбуланти Средњево и Мајиловац"
        imageSrc="/images/phone_medic.png"
        href="/telefonski_imenik"
      />
      <ActionCard
        title="Радно време"
        text="Радно време служби Дома Здравља Велико Градиште и амбуланти Средњево и Мајиловац"
        imageSrc="/images/work_hours.png"
        href="/"
      />
      <ActionCard
        title="Мој Доктор"
        text="Упутство за заказивање прегледа помоћу платформе Мој Доктор"
        imageSrc="/images/my_doctor.png"
        href="/"
      />
    </Flex>
  );
};
