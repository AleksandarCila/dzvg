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
import { useScreenSize } from "@/utils/hooks";

export const Home = () => {
  const { data: posts, isLoading } = useGetAllPosts();
  const { isDesktop } = useScreenSize();

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
        <Stack
          sx={{
            bg: "primary.500",
            my: 5,
            py: isDesktop ? 5 : 2,
            borderRadius: isDesktop ? 25 : 0,
          }}
        >
          <Title title="Огласна табла" invert size={isDesktop ? "lg" : "sm"} />
          <Text sx={{ p: 5, color: "white" }} fontSize="xl">
            Пронађите најновије информације на огласној табли
          </Text>
          <Link href="/oglasna_tabla" style={{ alignSelf: "center" }}>
            <PrimaryButton
              colorScheme="whiteAlpha"
              variant="solid"
              sx={{ mb: 4 }}
            >
              Огласна табла
            </PrimaryButton>
          </Link>
        </Stack>
        <Title title="Информације" />
        <PostCardList
          loading={isLoading}
          posts={posts}
          limit={isDesktop ? 6 : 3}
        />
        {posts && posts?.length > 0 && (
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              mt: 10,
              p: isDesktop ? 0 : 5,
            }}
          >
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
