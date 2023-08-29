//@ts-nocheck
import { HStack, Text } from "@chakra-ui/react";
import React from "react";
import { PostCard } from "./PostCard";
import { PostCardSkeleton } from "./PostCardSkeleton";

export const PostCardList = ({ posts, loading }) => {
  return (
    <HStack flexWrap="wrap" gap={5} p={5} spacing={0} sx={{ width: "100%" }}>
      {loading ? (
        <>
          <PostCardSkeleton />
          <PostCardSkeleton />
          <PostCardSkeleton />
        </>
      ) : (
        <>
          {posts && posts.length > 0 ? (
            posts?.map((post) => {
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
