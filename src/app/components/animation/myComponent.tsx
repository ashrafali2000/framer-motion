"use client"
import { motion } from "framer-motion"
export const MyComponent = () => (
  <motion.div
  animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    style={{backgroundColor:"blue",width:300, height:300,}}
  />
)