// components/Doodles.tsx
"use client";
import { motion } from "framer-motion";

export default function Doodles() {
  return (
    <>
      {/* Rechts oben vom Main */}
      <motion.img
        src="/doodle-heart.svg"
        alt="Kritzelei rechts oben"
        className="absolute top-16 right-2 sm:top-70 sm:right-190 w-16 sm:w-24 pointer-events-none z-0"
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      {/* Links unten vom Main */}
      <motion.img
        src="/doodle-flower.svg"
        alt="Kritzelei links unten"
        className="absolute bottom-2 left-2 sm:bottom-70 sm:left-170 w-16 sm:w-24 pointer-events-none z-0"
        animate={{ y: [0, 6, 0], rotate: [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
    </>
  );
}