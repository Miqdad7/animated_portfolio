import React from 'react'
import {TypeAnimation} from "react-type-animation"
import {motion} from "motion/react"
const Speech = () => {
  return (
    <motion.div animate={{opacity:[0,1]}} transition={{duration:1}} className="bubbleContainer">
        <div className="bubble">
        <TypeAnimation
      sequence={[
        1000,
        "Crafting intelligent web experiences with AI & ML",
        1000,
        'From pixels to predictions – Innovating at the intersection of Web, AI, and ML',
        1000,
      ]}
      wrapper="span"
      speed={40}
      deletionSpeed={60}
      repeat={Infinity}
    />
        </div>
        <img src="man.png" alt="" />
    </motion.div>
  )
}

export default Speech
