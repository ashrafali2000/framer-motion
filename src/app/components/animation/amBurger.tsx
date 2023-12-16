"use client"
import { motion } from "framer-motion"
import { useState } from "react"

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
}
const arr = [1, 3, 5, 6, 7, 8]
export default function HumBurger  ()  {
    const [isOpen, setIsOpen] = useState<Boolean>(false)
    //   const handleClick = () => {
    //     setIsOpen((prevIsOpen) => !prevIsOpen);
    //   };
    return (
        <motion.nav
            animate={isOpen ? "open" : "closed"}
            variants={variants}
     style={{}} >
            <div style={{width:50, height:20,backgroundColor:"red"}} onClick={() => setIsOpen(isOpen => !isOpen)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>   </div>

            {arr.map(i => <div>{i}</div>)}
        </motion.nav>
    )
}