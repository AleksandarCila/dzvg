import { useScreenSize } from "@/utils/hooks";
import { Button, Card, Image, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";

interface PostCardProps {
  id: string;
  title: string;
  image: string;
  body: string;
}

export const PostCard: FC<PostCardProps> = ({ id, title, image, body }) => {
  const slicedTitle = title.length > 30 ? `${title.slice(0, 30)}...` : title;
  const { isDesktop, isTablet } = useScreenSize();

  return (
    <Card
      sx={{
        height: "100%",
      }}
    >
      <Stack
        sx={{ height: "100%", bgcolor: "#fefefe", borderRadius: 25 }}
        justifyContent="space-between"
      >
        <Image
          src={image}
          alt="image"
          sx={{
            height: 150,
            objectFit: "contain",
            boxShadow: "0 2px 2px rgba(0,0,0,0.12)",
          }}
        />
        <Stack sx={{ gap: 1, py: 4, px: 4, flex: 1 }}>
          <Text as="h2" fontSize={24}>
            {isDesktop || isTablet ? slicedTitle : title}
          </Text>
          {body && <Text>{`${body.slice(0, 80)}...`}</Text>}
        </Stack>
        <Link href={`/informacije/objava?slug=${id}`}>
          <Button sx={{ width: "100%" }}>Прочитај више</Button>
        </Link>
      </Stack>
    </Card>
  );
};
