'use client'
import NextLink from "next/link";
import Image, { StaticImageData } from "next/image";
import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { ReactNode } from "react";

interface GridItemProps {
  children: ReactNode;
  href: string;
  title: string;
  thumbnail: StaticImageData | string;
}

export const GridItem: React.FC<GridItemProps> = ({ children, href, title, thumbnail, }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        layout="responsive"
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank" rel="noopener noreferrer">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

interface WorkGridItemProps {
  children: ReactNode;
  category?: string;
  id: string;
  title: string;
  thumbnail: StaticImageData | string;
}

export const WorkGridItem: React.FC<WorkGridItemProps> = ({ children, category = "works", id, title, thumbnail, }) => (
  <Box w="100%" textAlign="center">
    <LinkBox
      as={NextLink}
      href={`/${category}/${id}`}
      scroll={false}
      cursor="pointer"
      passHref
    >
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
      />
      <LinkOverlay as="div" href={`/${category}/${id}`}>
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

export const GridItemStyle: React.FC = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
);
