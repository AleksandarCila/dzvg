//@ts-nocheck
import { useScreenSize } from "@/utils/hooks";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { BoardCategoryCardSkeleton } from "./BoardCategoryCardSkeleton";
import { BoardCategoryCard } from "./BoardCategoryCard";

export const BoardCategoryList = ({ categories, loading, limit }) => {
  const categoriesToRender = limit ? categories?.slice(0, limit) : categories;
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
          <BoardCategoryCardSkeleton />
          <BoardCategoryCardSkeleton />
          <BoardCategoryCardSkeleton />
        </>
      ) : (
        <>
          {categories && categories.length > 0 ? (
            categoriesToRender?.map((post) => {
              const { naziv_kategorije: title, opis_kategorije: body } =
                post.data;
              return (
                <GridItem key={post.id}>
                  <BoardCategoryCard
                    id={post.uid}
                    title={title?.[0]?.text}
                    description={body?.[0]?.text}
                  />
                </GridItem>
              );
            })
          ) : (
            <Text>Огласна табла је тренутно празна!</Text>
          )}
        </>
      )}
    </Grid>
  );
};
