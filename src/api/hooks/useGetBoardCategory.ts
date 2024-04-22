//@ts-nocheck

import { client } from "../client";
import { useQuery } from "@tanstack/react-query";

export const useGetBoardCategory = (id: string) => {
  const fetchCategory = async () => {
    try {
      return await client.getByUID("kategorija_na_oglasnoj", id);
    } catch (err) {
      console.log(err);
    }
  };

  return useQuery({
    queryKey: ["board_category", { id }],
    queryFn: fetchCategory,
    staleTime: Infinity,
    cacheTime: Infinity,
    enabled: Boolean(id),
  });
};
