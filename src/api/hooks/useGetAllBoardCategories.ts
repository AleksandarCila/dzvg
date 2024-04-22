//@ts-nocheck

import { client } from "../client";
import { useQuery } from "@tanstack/react-query";

export const useGetAllBoardCategories = () => {
  const fetchBoardCategories = async () => {
    try {
      return await client.getAllByType("kategorija_na_oglasnoj", {
        orderings: { field: "document.first_publication_date", direction: "desc" },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return useQuery({
    queryKey: ["board_categories"],
    queryFn: fetchBoardCategories,
    staleTime: Infinity,
    cacheTime: Infinity,
  });
};
