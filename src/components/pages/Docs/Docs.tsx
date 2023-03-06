import { Title, PrimaryButton } from "@/components/generic";
import { PageContainer } from "@/components/layout";
import { Text, Stack, Link,Box } from "@chakra-ui/react";
import React from "react";

import { dokumenti } from "@/data/dokumenti";
import { DocItem } from "./DocItem";

export const Docs = () => {
  return (
    <PageContainer>
      <Title title="Документи" />
      <Stack gap={2} px={5} mb={5}>
        {dokumenti.map((doc) => (
          <DocItem key={doc.name} doc={doc} />
        ))}
      </Stack>
      <Title title="Информатор о раду" size="sm"/>
      <Stack p={5} gap={5}>
        <Text >
          На основу Закона о слободном приступу информацијама од јавног значаја
          и Упутства за израду и објављивање информатора о раду државног органа
          донетог од стране Повереника за информације од јавног значаја („Сл.
          Гласник РС „ број 68/2010), директорка Дома здравља Велико
          Градиште“донела је ИНФОРМАТОР О РАДУ ДОМА ЗДРАВЉА Велико Градиште Овим
          информатором ближе се одређује садржина, обим као и поступак за
          остваривање права заинтересованих лица на приступ информацијама од
          јавног значаја. Ради спровођења Закона о слободном приступу
          информацијама од јавног значаја Информатор садржи основне податке о
          раду Дома здравља Велико Градиште.
        </Text>
        <Link href="https://informator.poverenik.rs/informator?org=9KCNrMewWvX8CQy2H">
          <PrimaryButton>ИНФОРМАТОР О РАДУ</PrimaryButton>
        </Link>
      </Stack>
    </PageContainer>
  );
};
