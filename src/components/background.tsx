"use client";
import { Box, useColorMode } from "@chakra-ui/react";

export default function Background() {
    const {colorMode } = useColorMode();
    if(colorMode !== "dark"){
        return null;
    }
  return (
    <Box
      position="fixed"
  top={0}
  left={0}
  w="100vw"
  h="100vh"
  zIndex={-1}
  _dark={{
    bg: "radial-gradient(circle at top left, #111, #000)",
    backgroundImage:
      "repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 5px)",
  }}
    />
  );
}