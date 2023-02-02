import React from "react";

import { Hero } from "@/components/generic";
import { PageContainer } from "@/components/layout";

import {
  MainActionBar,
  ProveraLekaraSection,
  SluzbeSection,
} from "./components";
import { Container, Divider, Flex } from "@chakra-ui/react";

export const Home = () => {
  return (
    <div>
      <Hero />
      <MainActionBar />
      <Divider my={5} width="100%" borderBottomWidth={3} borderColor="primary.100"/>
      <PageContainer>
        <SluzbeSection />
        <ProveraLekaraSection />
      </PageContainer>
    </div>
  );
};
