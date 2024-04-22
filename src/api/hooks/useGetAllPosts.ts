//@ts-nocheck

import { client } from "../client";
import { useQuery } from "@tanstack/react-query";
import * as prismic from "@prismicio/client";

export const useGetAllPosts = (boardCategoryId?: string, enabled?: boolean) => {
  const fetchPosts = async () => {
    try {
      return await client.getAllByType("obavestenje", {
        filters: boardCategoryId
          ? [prismic.filter.at("my.obavestenje.category", boardCategoryId)]
          : [],
        orderings: {
          field: "document.first_publication_date",
          direction: "desc",
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return useQuery({
    queryKey: ["posts", { boardCategoryId }],
    queryFn: fetchPosts,
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: enabled !== undefined ? enabled : true,
  });
};
