"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

export default function ScrollProgress() {
  const [rawProgress, setRawProgress] = useState(0);

  // Spring-smooth the raw scroll percentage
  const spring = useSpring(rawProgress, { stiffness: 180, damping: 30, mass: 0.5 });
  // Convert 0-100 → "0%" – "100%" for the scaleX transform
  const scaleX = useTransform(spring, [0, 100], [0, 1]);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setRawProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        background: "linear-gradient(90deg, #1d4ed8, #3b82f6, #60a5fa)",
        transformOrigin: "0% 50%",
        scaleX,
        zIndex: 9999,
      }}
      role="progressbar"
      aria-valuenow={Math.round(rawProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
}
