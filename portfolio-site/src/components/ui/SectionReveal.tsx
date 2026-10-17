"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { staggerContainer, fadeUpItem, spaceTransitions } from "@/lib/animations";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
  staggerDelay?: number;
}

/**
 * Scroll-triggered reveal container.
 * When `stagger` is true, child `<RevealItem>` components will enter with a cohesive cascade.
 * Naturally respects prefers-reduced-motion via Framer Motion.
 */
export function SectionReveal({
  children,
  className = "",
  delay = 0,
  stagger = false,
  staggerDelay = 0.08,
}: SectionRevealProps) {
  if (stagger) {
    return (
      <motion.div
        variants={staggerContainer(staggerDelay, delay)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface RevealItemProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
}

/**
 * Child element designed to be used inside a `<SectionReveal stagger>` parent.
 */
export function RevealItem({
  children,
  className = "",
  variants = fadeUpItem,
}: RevealItemProps) {
  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}
