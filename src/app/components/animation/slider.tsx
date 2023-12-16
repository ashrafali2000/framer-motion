"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";

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

const Slideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="flex gap-80">
      <button onClick={handlePrev}>Previous</button>
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -200 }}
        transition={{ duration: 0.5 }}
      >
        <img
          key={images[currentIndex].images}
          src={images[currentIndex].images}
          alt={`flower-${currentIndex}`}
        />
      </motion.div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Slideshow;