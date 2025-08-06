// app/page.tsx
"use client";
import NextLink from 'next/link';
import Paragraph from "@/components/paragraph";
import Section from "@/components/section";
import { BioSection, BioYear } from '@/components/bio';
import {
  Container,
  Box,
  Heading,
  useColorModeValue,
  Button,
  Center,
} from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons';

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
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Luis Arcani is a freelance full-stack software developer focused on creating desktop, web, and mobile applications. He is passionate about tackling technical challenges and solving real-world problems through code.
        </Paragraph>
        <Box textAlign="center" my={4}>
          <Button as={NextLink} href={"/works"} scroll={false} rightIcon={<ChevronRightIcon/>} colorScheme='teal'>
            My portfolio
          </Button>
        </Box>
      </Section>
      <Section>
        <Heading>
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in San Borja, Beni, Bolivia
        </BioSection>
        <BioSection>
          <BioYear>2025</BioYear>
          Graduated from the Autonomous University of Beni
        </BioSection>
        <BioSection>
          <BioYear>2024 to present</BioYear>
          Working as a freelancer
        </BioSection>
      </Section>
    </Container>
  );
};

export default Home;