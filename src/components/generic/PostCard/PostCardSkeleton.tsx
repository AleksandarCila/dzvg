import { Skeleton } from "@chakra-ui/react";
import React from "react";

export const PostCardSkeleton = () => {
  return (
    <Skeleton
      sx={{
        width: { base: "100%", md: 320 },
        maxWidth: { base: "100%", md: 320 },
        height: 400,
        maxHeight: 400,
      }}
    />
  );
};
