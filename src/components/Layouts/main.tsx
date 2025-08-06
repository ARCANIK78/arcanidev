"use client";
import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import Navbar from "../navbar";
import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  const path = usePathname(); // ✅ obtiene la ruta actual correctamente

  return (
    <Box as="main" pb={8}>
      <Head>
        <title>arcanidev</title>
      </Head>

      <Navbar path={path} /> {/* ✅ pasamos la ruta actual correctamente */}

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
