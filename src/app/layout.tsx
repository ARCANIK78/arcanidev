
import Background from "@/components/background";
import ChakraWrapper from "../lib/chakra-provider"; 
import Navbar from "@/components/navbar";
import { ReactNode } from "react";
import Fonts from "@/components/fonts";
import Footer from "@/components/footer";

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
          <Fonts />
          <Navbar path="/" />
          {children}
        </ChakraWrapper>
        <Footer />
      </body>
    </html>
  );
}
