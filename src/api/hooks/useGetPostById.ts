//@ts-nocheck

import { client } from "../client";
import { useQuery } from "@tanstack/react-query";

export const useGetPostById = (id: string) => {
  const fetchPost = async () => {
    try {
      return await client.getByUID("obavestenje", id);
    } catch (err) {
      console.log(err);
    }
  };

  return useQuery({
    queryKey: ["post", { id }],
    queryFn: fetchPost,
    staleTime: Infinity,
    cacheTime: Infinity,
    enabled: Boolean(id),
  });
};
