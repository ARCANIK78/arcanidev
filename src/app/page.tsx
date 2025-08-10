// app/page.tsx
"use client";
import NextLink from 'next/link';
import Paragraph from "@/components/paragraph";
import Section from "@/components/section";
import { BioSection, BioYear } from '@/components/bio';
import {
  Link,
  Container,
  Box,
  Heading,
  useColorModeValue,
  Button,
  Center,
  ListItem,
  List,Image
} from "@chakra-ui/react";
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons';
import { FaLinkedin,FaFacebook } from "react-icons/fa";
import { IoLogoGithub } from 'react-icons/io5'
import Layout from '@/components/article';

const Home = () => {
  const perfil = '/picture/perfil/perfilito.jpg';
  return (
    <Layout title='page'>
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
            Luis Arcani Ribera
          </Heading>
          <p> Software Engineer / Full Stack Developer /</p>
        </Box>
        <Box flexShrink={0} mt={{based: 4, md: 0}} ml={{ md:6}} textAlign="center" >
          <Box borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" w="120px" h="120px" display="inline-block" borderRadius="full" overflow="hidden" >
            <Image src={perfil} alt="Profiel image" width={120} height={175} />
          </Box>
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
        <Heading as="h3" variant="section-title">
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
      <Section>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href='https://github.com/ARCANIK78' target='_blank'>
            <Button variant="ghost" colorScheme='teal' leftIcon={<IoLogoGithub />}>
              @ARCANIK
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/luis-edgar-arcani-ribera-278645257/" target="_blank">
              <Button variant="ghost" colorScheme='teal' leftIcon={<FaLinkedin />}>
              @LuisArcani
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href='https://www.facebook.com/profile.php?id=61578898216834' target='_blank'>
            <Button variant="ghost" colorScheme='teal' leftIcon={<FaFacebook />}>
              @ArcaniDev
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
      <Section>
        <Heading as="h3" variant="section-title">
            Contact
        </Heading>
        <p>
           If you&apos;d like to discuss a project, request information, or establish a collaboration,
           you can contact us via the following link.
        </p>
        <Box textAlign="center" my={4} >
          <Button as={NextLink} href="mailto:luisedgararcaniribera@gmail.com"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal" >
              Contact my email
            </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
  );
};

export default Home;