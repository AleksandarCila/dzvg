//@ts-nocheck
import { useGetAllPosts } from "@/api/hooks";
import {
  PageContainer,
  PostCardList,
  Title,
} from "@/components";
import Head from "next/head";

const Informacije = () => {
  const { posts, loading } = useGetAllPosts();
  return (
    <>
      <Head>
        <title>DZVG - Informacije</title>
        <meta
          name="description"
          content="Važni informacije iz Doma Zdravlja Veliko Gradište"
        />
        <meta
          name="keywords"
          content="informacije, obaveštenja, dom zdravlja, veliko gradište"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <Title title="Информације" />
        <PostCardList loading={loading} posts={posts} />
      </PageContainer>
    </>
  );
};

export default Informacije;
