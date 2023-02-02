import React from "react";

import { Box, Flex, Text } from "@chakra-ui/react";
import { PrimaryButton, Title } from "@/components/generic";
import { PageContainer } from "@/components/layout";

export const ElektronskoZakazivanje = () => {
  return (
    <PageContainer>
      <Title title="Електронско заказивање - Мој Доктор" />
      <Box p={5}>
        <Text>
          Помоћу Интегрисаног здравственог информационог система Републике
          Србије „ИЗИС“ можете проверити слободне термине код Вашег изабраног
          лекара.
          <br />
          <br />
          Након што проверите слободне термине, можете заказати термин позивом
          на број <strong>011/362-0000</strong>
          <br />
          <br />
          Преглед електронским путем могу заказати само пацијенти који имају
          изабраног лекара.
          <br />
          <br />
          Приступите платформи Мој Доктор кликом на дугме.
        </Text>
        <Flex width="100%" justifyContent="center" alignItems="center" my={5}>
          <PrimaryButton>Мој Доктор</PrimaryButton>
        </Flex>
      </Box>
    </PageContainer>
  );
};
