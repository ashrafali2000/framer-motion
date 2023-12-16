"use client"
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type Image = {
  images: string;
};

const images: Image[] = [
  { images: "flower1.avif" },
  { images: "flower2.jpg" },
  { images: "flower3.jpg" },
  { images: "flower4.jpeg" },
  { images: "flowr4.avif" },
];

export const Slideshow: React.FC = () => (
  <AnimatePresence>
    {images.map((p: Image) => (
      <motion.img
        key={p.images}
        src={p.images}
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    ))}
  </AnimatePresence>
);