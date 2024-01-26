//@ts-nocheck
import { useGetPostById } from "@/api/hooks";
import { PageContainer, Title } from "@/components";
import { Image, Progress, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";

const Informacija = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { post, loading } = useGetPostById(slug);

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
        {!post || loading ? (
          <Progress size="xs" isIndeterminate colorScheme="orange" />
        ) : (
          <Stack sx={{ gap: 2, p: 5, pb: 10, textAlign: "justify" }}>
            <Title title={post.data.title?.[0].text} />
            <Stack sx={{ justifyContent: "center" }}>
              <Image
                src={post.data.image.url}
                alt={post.data.title?.[0].text}
                sx={{ height: 250, objectFit: "contain" }}
              />
            </Stack>
            {post.data.body?.map((paragraph, ind) => (
              <Text key={ind}>{paragraph.text}</Text>
            ))}
          </Stack>
        )}
      </PageContainer>
    </>
  );
};

export default Informacija;
