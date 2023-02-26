import { FC } from "react";

import { Text, Box, Divider, Flex } from "@chakra-ui/react";
import { PageContainer } from "@/components/layout";
import { Title } from "@/components/generic";

import { kalendar_zdravlja } from "@/data/kalendar_zdravlja/kalendar_zdravlja";
import { KalendarZdravlja } from "@/data/kalendar_zdravlja";

type DayComponentProps = {
  day: KalendarZdravlja[0]["days"][0];
};

const DayComponent: FC<DayComponentProps> = ({ day }) => {
  return (
    <Flex
      justifyContent={{ base: "space-between", md: "flex-start" }}
      alignItems="center"
      py={2}
    >
      <Text fontWeight="bold" mr={2}>
        {day.day}
      </Text>
      -{" "}
      <Text mx={2} textAlign={{ base: "right", md: "left" }} flex={1}>
        {day.title}
      </Text>
    </Flex>
  );
};

type DaysProps = {
  days: KalendarZdravlja[0]["days"];
};

const Days: FC<DaysProps> = ({ days }) => {
  return (
    <Flex px={5} py={2} flexDirection="column">
      {days.map((day) => (
        <DayComponent key={day.day} day={day} />
      ))}
    </Flex>
  );
};

type MonthTitleProps = {
  title: string;
  desc: string;
};

const MonthTitle: FC<MonthTitleProps> = ({ title, desc }) => {
  return (
    <Box p={5}>
      <Text fontSize="lg" fontWeight="bold">
        {title}
      </Text>
      <Text fontSize="md" fontStyle="italic">
        {desc}
      </Text>
      <Divider borderColor="primary.200" borderBottomWidth={2} my={2} />
    </Box>
  );
};

type MonthProps = {
  month: KalendarZdravlja[0];
};

const Month: FC<MonthProps> = ({ month }) => {
  return (
    <Box>
      <MonthTitle title={month.name} desc={month.desc} />
      <Days days={month.days} />
    </Box>
  );
};

export const HealthCalendar = () => {
  return (
    <PageContainer>
      <Title title="Календар здравља" />
      {kalendar_zdravlja.map((month) => (
        <Month key={month.name} month={month} />
      ))}
    </PageContainer>
  );
};
