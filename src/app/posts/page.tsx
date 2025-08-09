'use client';

import { useEffect, useState } from 'react';
import {
  Container,
  Heading,
  SimpleGrid,
  Box,
  Image,
  Text,
  Link,
  Spinner,
  VStack,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

type AttachmentMedia = {
  source?: string;
  image?: { src: string };
};

type Attachment = {
  type: string; 
  media: AttachmentMedia;
  subattachments?: { data: Attachment[] }; 
};

type FacebookPost = {
  id: string;
  message?: string;
  created_time: string;
  permalink_url: string;
  attachments?: {
    data: Attachment[];
  };
  full_picture?: string;
};

export default function PostsPage() {
  const [posts, setPosts] = useState<FacebookPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/facebook-posts')
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
        } else {
          setPosts(data.data || []);
        }
      })
      .catch(() => setError('Error al cargar publicaciones'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Container pt={20} textAlign="center">
        <Spinner size="xl" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container pt={20}>
        <Text color="red.500" fontWeight="bold">
          {error}
        </Text>
      </Container>
    );
  }

  return (
    <Container pt={20}>
      <Heading mb={6}>Posts</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {posts.map(post => {
          const attachment = post.attachments?.data[0];
          
          if (attachment?.type.startsWith('video') && attachment.media.source) {
            return (
              <Box
                key={post.id}
                borderRadius="lg"
                overflow="hidden"
                p={4}
                boxShadow="md"
              >
                <video controls width="100%" src={attachment.media.source} />
                <VStack align="start" spacing={2} mt={4}>
                  <Text noOfLines={3} fontWeight="semibold">
                    {post.message || '(Sin título)'}
                  </Text>
                  <Link
                    href={post.permalink_url}
                    color="blue.500"
                    isExternal
                    fontWeight="bold"
                    display="flex"
                    alignItems="center"
                  >
                    Ver publicación <ExternalLinkIcon ml={1} />
                  </Link>
                </VStack>
              </Box>
            );
          }

          const thumbnail = attachment?.media.image?.src || post.full_picture;

          return (
            <Box
              key={post.id}
              borderRadius="lg"
              overflow="hidden"
              p={4}
              boxShadow="md"
            >
              {thumbnail && (
                <Image
                  src={thumbnail}
                  alt={post.message || 'Miniatura de publicación'}
                  borderRadius="md"
                  mb={4}
                  maxH="200px"
                  objectFit="cover"
                  width="100%"
                />
              )}
              <VStack align="start" spacing={2}>
                <Text noOfLines={3} fontWeight="semibold">
                  {post.message || '(Sin título)'}
                </Text>
                <Link href={post.permalink_url} isExternal color="blue.500" fontWeight="bold" display="flex" alignItems="center">
                    Ver publicación <ExternalLinkIcon ml={1} />
                </Link>
              </VStack>
            </Box>
          );
        })}
      </SimpleGrid>
    </Container>
  );
}
