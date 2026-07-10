import type { Variants } from "framer-motion";

export const EASE_CUBIC: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
export const EASE_SPRING: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const EASE_SMOOTH: [number, number, number, number] = [0.4, 0, 0.2, 1];

export const SPRING_GENTLE = { type: "spring" as const, stiffness: 120, damping: 20 };
export const SPRING_SNAPPY = { type: "spring" as const, stiffness: 260, damping: 22 };
export const SPRING_BOUNCY = { type: "spring" as const, stiffness: 400, damping: 15 };

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_CUBIC },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_SPRING },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.2,
    },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: EASE_CUBIC },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: EASE_CUBIC },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const scaleInBounce: Variants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: SPRING_BOUNCY,
  },
};

export const blurFadeIn: Variants = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 16 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.7, ease: EASE_SPRING },
  },
};

export const blurFadeInFast: Variants = {
  hidden: { opacity: 0, filter: "blur(8px)", y: 10 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.45, ease: EASE_SPRING },
  },
};

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 18, filter: "blur(4px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: EASE_SPRING },
  },
  exit: {
    opacity: 0,
    y: -12,
    filter: "blur(4px)",
    transition: { duration: 0.3, ease: EASE_SMOOTH },
  },
};

export const cardHover: Variants = {
  rest: { y: 0, boxShadow: "0 1px 3px rgba(0,0,0,0.08)" },
  hover: {
    y: -5,
    boxShadow: "0 12px 30px rgba(29,78,216,0.14)",
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.62, ease: EASE_SPRING },
  },
};

export const lineDrawH: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: EASE_SPRING },
  },
};

export const lineDrawV: Variants = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: EASE_SPRING },
  },
};

export const wordReveal: Variants = {
  hidden: { y: "105%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: EASE_SPRING },
  },
};

export const socialHover: Variants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.15,
    rotate: -5,
    transition: { duration: 0.22, ease: "easeOut" },
  },
};

export const badgePop: Variants = {
  hidden: { opacity: 0, scale: 0.75, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: SPRING_SNAPPY,
  },
};
