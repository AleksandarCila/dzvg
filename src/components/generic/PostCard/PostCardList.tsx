//@ts-nocheck
import { useScreenSize } from "@/utils/hooks";
import { HStack, Text } from "@chakra-ui/react";
import React from "react";
import { PostCard } from "./PostCard";
import { PostCardSkeleton } from "./PostCardSkeleton";

export const PostCardList = ({ posts, loading, limit }) => {
  const postsToRender = limit ? posts?.slice(0, limit) : posts;
  const { isDesktop } = useScreenSize();
  return (
    <HStack
      flexWrap="wrap"
      gap={5}
      p={5}
      spacing={0}
      sx={{
        width: "100%",
        justifyContent: isDesktop ? "space-between" : "center",
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
          {posts && posts.length > 0 ? (
            postsToRender?.map((post) => {
              const { title, image, body } = post.data;
              return (
                <PostCard
                  key={post.id}
                  id={post.uid}
                  title={title?.[0].text}
                  image={image.url}
                  body={body?.[0].text}
                />
              );
            })
          ) : (
            <Text>Нема обавештења</Text>
          )}
        </>
      )}
    </HStack>
  );
};
