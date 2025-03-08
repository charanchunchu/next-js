"use client";

import { ReactNode } from "react";
import { LazyMotion, domAnimation, motion } from "framer-motion";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | null;
  fullWidth?: boolean;
  padding?: boolean;
  amount?: number;
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  direction = null,
  fullWidth = false,
  padding = true,
  amount = 0.7,
}: FadeInProps) {
  const variants = {
    hidden: {
      opacity: 0,
      ...(direction === "up" && { y: 24 }),
      ...(direction === "down" && { y: -24 }),
      ...(direction === "left" && { x: -24 }),
      ...(direction === "right" && { x: 24 }),
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, ease: "easeOut", delay },
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        className={`${className} ${padding ? "py-4" : ""} ${fullWidth ? "w-full" : ""}`}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount }}
        variants={variants}
      >
        {children}
      </motion.div>
    </LazyMotion>
  );
}
