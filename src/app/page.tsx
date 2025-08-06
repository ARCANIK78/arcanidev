// app/page.tsx
"use client";

import {
  Container,
  Box,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <Container pt={20}>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        css={{ backdropFilter: "blur(10px)" }}
      >
        Hello, I&apos;m a full stack developer based in Bolivia!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            I am LuisArcani
          </Heading>
          <p> Software Engineer / Full Stack Developer /</p>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;