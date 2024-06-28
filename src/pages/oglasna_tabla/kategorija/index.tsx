//@ts-nocheck
import { useGetAllPosts } from "@/api/hooks";
import { useGetBoardCategory } from "@/api/hooks/useGetBoardCategory";
import { PageContainer, PostCardList, Title } from "@/components";
import Head from "next/head";
import { useRouter } from "next/router";

const KategorijaOglasneTable = () => {
  const { query } = useRouter();
  const categoryId = query?.categoryId;

  const { data: category, isLoading: isLoadingCategory } =
    useGetBoardCategory(categoryId);

  const { data: posts, isLoading } = useGetAllPosts(
    category?.id,
    Boolean(category?.id)
  );

  const categoryTitle = category?.data?.naziv_kategorije?.[0]?.text;
  return (
    <>
      <Head>
        <title>DZVG - {categoryTitle ? categoryTitle : ""}</title>
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
        <Title
          title={`Огласна табла - ${categoryTitle ? categoryTitle : ""}`}
        />
        <PostCardList loading={isLoading} posts={posts} board/>
      </PageContainer>
    </>
  );
};

export default KategorijaOglasneTable;
