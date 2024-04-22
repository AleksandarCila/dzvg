import { useScreenSize } from "@/utils/hooks";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Card, HStack, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { FC } from "react";

interface BoardCategoryCardProps {
  id: string;
  title: string;
  description: string;
}

export const BoardCategoryCard: FC<BoardCategoryCardProps> = ({
  id,
  title,
  description,
}) => {
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
        <Link href={`/oglasna_tabla/kategorija?categoryId=${id}`}>
          <HStack
            sx={{
              justifyContent: "space-between",
              gap: 4,
              p: 4,
              bgColor: "#f2f2f2",
            }}
          >
            <Text as="h2" fontSize={24}>
              {isDesktop || isTablet ? slicedTitle : title}
            </Text>
            <ChevronRightIcon sx={{ color: "primary.200" }} />
          </HStack>
        </Link>

        {description && (
          <Stack sx={{ gap: 1, py: 4, px: 4, flex: 1 }}>
            <Text>{`${description.slice(0, 80)}...`}</Text>
          </Stack>
        )}
      </Stack>
    </Card>
  );
};
