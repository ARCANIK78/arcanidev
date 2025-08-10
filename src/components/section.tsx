"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  delay?: number;
}

const Section = ({ children, delay = 0 }: SectionProps) => (
  <motion.div
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    style={{ marginBottom: "1.5rem" }}
  >
    {children}
  </motion.div>
);

export default Section;

