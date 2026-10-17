import type { Variants, Transition } from "framer-motion";

/**
 * Shared physics-based transitions for cinematic space aesthetics.
 * Uses high damping to avoid spring oscillations, maintaining a crisp, professional feel.
 */
export const spaceTransitions = {
  smooth: {
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1], // easeOutQuint-like curve
  } as Transition,
  gentleSpring: {
    type: "spring",
    stiffness: 280,
    damping: 24,
    mass: 0.8,
  } as Transition,
  snappySpring: {
    type: "spring",
    stiffness: 400,
    damping: 30,
  } as Transition,
  subtleHover: {
    duration: 0.25,
    ease: [0.25, 0.46, 0.45, 0.94],
  } as Transition,
};

/**
 * Stagger container for section headers, grids, and list items.
 */
export const staggerContainer = (
  staggerDelay = 0.08,
  delayChildren = 0.05
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
});

/**
 * Standard fade & slide up for content items.
 */
export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: spaceTransitions.smooth,
  },
};

/**
 * Subtler fade & slide up for text paragraphs and telemetry tags.
 */
export const fadeUpSubtle: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/**
 * Slide in from left for timeline milestones and badges.
 */
export const fadeSlideLeft: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: spaceTransitions.smooth,
  },
};

/**
 * Slide in from right for secondary badges and telemetry metrics.
 */
export const fadeSlideRight: Variants = {
  hidden: { opacity: 0, x: 16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: spaceTransitions.smooth,
  },
};

/**
 * Subtle scale pop for icons, avatars, and badges on entrance.
 */
export const scalePopItem: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: spaceTransitions.gentleSpring,
  },
};

/**
 * Hover & tap micro-interaction presets for interactive cards and buttons.
 */
export const cardHoverMotion = {
  rest: { y: 0 },
  hover: {
    y: -4,
    transition: spaceTransitions.subtleHover,
  },
};

export const buttonTapMotion = {
  tap: { scale: 0.97 },
  hover: { scale: 1.02 },
};
