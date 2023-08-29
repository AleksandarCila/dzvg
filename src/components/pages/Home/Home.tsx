import React from "react";

import { Hero, PostCardList, Title, PrimaryButton } from "@/components/generic";
import { PageContainer } from "@/components/layout";

import {
  MainActionBar,
  ProveraLekaraSection,
  SluzbeSection,
} from "./components";
import { Divider, Stack, Text } from "@chakra-ui/react";
import { useGetAllPosts } from "@/api/hooks";
import Link from "next/link";

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
        <PostCardList loading={loading} posts={posts} limit={2} />
        {posts && posts?.length > 0 && (
          <Stack sx={{ justifyContent: "center", alignItems: "center", gap:2, mt:10 }}>
            <Text fontSize={20}>За све информације и најновија обавештења</Text>
            <Link href="/informacije">
              <PrimaryButton>Више информација</PrimaryButton>
            </Link>
          </Stack>
        )}
      </PageContainer>
    </div>
  );
};
