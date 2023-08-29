import React from "react";

import { Hero, PostCardList, Title } from "@/components/generic";
import { PageContainer } from "@/components/layout";

import {
  MainActionBar,
  ProveraLekaraSection,
  SluzbeSection,
} from "./components";
import {  Divider, } from "@chakra-ui/react";
import { useGetAllPosts } from "@/api/hooks";

export const Home = () => {
  const { posts, loading } = useGetAllPosts();

  return (
    <div>
      <Hero />

      <MainActionBar />
      <Divider
        my={5}
        width="100%"
        borderBottomWidth={3}
        borderColor="primary.100"
      />
      <PageContainer>
        <SluzbeSection />
        <ProveraLekaraSection />
        <Title title="Информације" />
        <PostCardList loading={loading} posts={posts} />
      </PageContainer>
    </div>
  );
};
