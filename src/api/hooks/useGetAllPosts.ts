//@ts-nocheck

import { useEffect, useState } from "react";
import { client } from "../client";

export const useGetAllPosts = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await client.getAllByType("obavestenje", {
        orderings: "document.first_publication_date desc",
      });
      setPosts(res);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchPosts();
    })();
  }, []);

  return { posts, loading };
};
