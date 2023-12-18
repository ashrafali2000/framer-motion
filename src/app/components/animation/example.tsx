"use client"
import { motion } from "framer-motion"
import style from "./example.module.css"
 const Example1 = ({ children }:{children:any}) => {
  return ( <motion.div
  className={style.example1}
    initial={{ opacity: 0, scale: 0.1 }}
    animate={{ opacity: 1, scale: 1}}
    transition={{ duration: 0.5 }}
  >
  {children}
  </motion.div>
)}

export default Example1;