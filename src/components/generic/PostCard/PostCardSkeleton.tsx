import { Skeleton } from "@chakra-ui/react";
import React from "react";

export const PostCardSkeleton = () => {
  return (
    <Skeleton
      sx={{
        width: { base: "100%", md: 250 },
        maxWidth: { base: "100%", md: 250 },
        height: 400,
        maxHeight: 400,
      }}
    />
  );
};
