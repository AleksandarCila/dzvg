//@ts-nocheck
import { useScreenSize } from "@/utils/hooks";
import { Grid, GridItem, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { PostCard } from "./PostCard";
import { PostCardSkeleton } from "./PostCardSkeleton";

export const PostCardList = ({ posts, loading, limit, board }) => {
  const filteredPosts = posts?.filter((post) =>
    board
      ? post?.tags?.includes("OglasnaTabla")
      : !post?.tags?.includes("OglasnaTabla")
  );
  const postsSorted = filteredPosts?.sort((a, b) => {
    const isAPinned = a?.tags?.includes("Bitno");
    const isBPinned = b?.tags?.includes("Bitno");

    if (isAPinned && !isBPinned) return -1;
    if (!isAPinned && isBPinned) return 1;
    return 0;
  });

  const postsToRender = limit ? postsSorted?.slice(0, limit) : filteredPosts;
  const { isDesktop, isTablet } = useScreenSize();

  const getGridColumns = () => {
    if (isDesktop) return "repeat(3, 1fr)";
    if (isTablet) return "repeat(2, 1fr)";
    return "repeat(1, 1fr)";
  };

  return (
    <Grid
      flexWrap="wrap"
      templateColumns={getGridColumns()}
      gap={5}
      p={5}
      spacing={0}
      sx={{
        width: "100%",
      }}
    >
      {loading ? (
        <>
          <PostCardSkeleton />
          <PostCardSkeleton />
          <PostCardSkeleton />
        </>
      ) : (
        <>
          {postsToRender && postsToRender.length > 0 ? (
            postsToRender?.map((post) => {
              const { title, image, body } = post.data;
              return (
                <GridItem key={post.id}>
                  <PostCard
                    id={post.uid}
                    title={title?.[0]?.text}
                    image={image?.url}
                    body={body?.[0]?.text}
                  />
                </GridItem>
              );
            })
          ) : (
            <Text>Нема обавештења</Text>
          )}
        </>
      )}
    </Grid>
  );
};
