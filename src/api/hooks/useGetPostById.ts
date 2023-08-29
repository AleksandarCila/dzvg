//@ts-nocheck

import { useEffect, useState } from "react";
import { client } from "../client";

export const useGetPostById = (id: string) => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState();

  const fetchPost = async () => {
    try {
      setLoading(true);
      const res = await client.getByUID("obavestenje", id);
      console.log(res);
      setPost(res);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      if (id) await fetchPost();
    })();
  }, [id]);

  return { post, loading };
};
