import React from 'react'
import {TypeAnimation} from "react-type-animation"
const Speech = () => {
  return (
    <div className="bubbleContainer">
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
    </div>
  )
}

export default Speech
