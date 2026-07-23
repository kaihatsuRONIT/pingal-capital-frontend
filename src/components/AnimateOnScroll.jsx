"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const directionMap = {
  up:    { x: 0,   y: 40 },
  down:  { x: 0,   y: -40 },
  left:  { x: 40,  y: 0 },
  right: { x: -40, y: 0 },
};

export default function AnimateOnScroll({ children, delay = 0, direction = "up" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { x, y } = directionMap[direction];

  // Skip animation on mobile — just render children
  if (isMobile) return <>{children}</>;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}