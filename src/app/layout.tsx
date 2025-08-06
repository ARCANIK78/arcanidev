
import Background from "@/components/background";
import ChakraWrapper from "../lib/chakra-provider"; 
import Navbar from "@/components/navbar";
import { ReactNode } from "react";

export const metadata = {
  title: "ArcaniDev",
  description: "SitioWeb",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ChakraWrapper>
          <Background />
          <Navbar path="/" />
          {children}
        </ChakraWrapper>
      </body>
    </html>
  );
}
