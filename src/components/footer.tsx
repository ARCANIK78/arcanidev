'use client'
import { Box, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      textAlign="center"
      opacity={0.6}
      fontSize="sm"
      py={4}
      color={useColorModeValue("gray.600", "gray.400")}
    >
      &copy; {new Date().getFullYear()} ArcaniDev. All Rights Reserved.
    </Box>
  );
};

export default Footer;
