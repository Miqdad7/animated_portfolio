import React from 'react';
import "./hero.css";
import Speech from './Speech';
import {animate, motion, stagger} from "motion/react";
import Shape from './Shape';
import { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";

const awardVariants={
    initial:{
        x:-100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.2,
        }
    }
}

const followVariants={
    initial:{
        y:-100,
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.2,
        }
    }
}

const Hero = () => {
  return (
    <div className="hero">
      <div className="hSection left">
        {/* Title */}
        <motion.h1 initial={{y:-100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1}} className="hTitle">
            Hey There,
            <br />
            <span>I'm Miqdad!</span>
        </motion.h1>
        {/* social media links */}
        <motion.div variants={awardVariants} initial="initial" animate="animate" className="awards">
            <motion.h2 variants={awardVariants}>Web,ML,AI Enthusiast</motion.h2>
            <motion.p variants={awardVariants}>currently pursuing integrated M.sc in computer science with specialization in AI and ML</motion.p>
            <motion.div variants={awardVariants} className="awardList">
                
                <a href="https://github.com/Miqdad7"><motion.img variants={awardVariants} src="/github.jpg" alt="" /></a>
                <a href="https://www.linkedin.com/in/muhammad-miqdad-10072a260/"><motion.img variants={awardVariants} src="/linkedin.png" alt="" /></a>
                
            </motion.div>
        </motion.div>
        {/* scroll svg */}
        <motion.a animate={{y:[0,5],opacity:[0,1,0]}} transition={{repeat:Infinity,duration:4,ease:"easeInOut",}} href="#services" className="scroll">
            <svg
                width="50px"
                height="50px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
                    stroke="white"
                    strokeWidth="1"
                />
                <motion.path
                  animate={{y:[0,5]}}
                  transition={{repeat:Infinity,duration:4,ease:"easeInOut",}}
                    d="M12 5V8"
                    stroke="white"
                    strokeWidth="1"
                    strokeLinecap="round"
                />
            </svg>
        </motion.a>
      </div>
      <div className="hSection right">
        {/* Follow */}
        <motion.div variants={followVariants} initial="initial" animate="animate" className="follow">
            <motion.a variants={followVariants} href="https://www.instagram.com/m_i_q_d_a_d?igsh=b2p1ZHRmM200dzBs">
                <img src="/instagram.png" alt="" />
            </motion.a>
            <motion.a variants={followVariants} href="https://www.facebook.com/share/1DqsCk6HKX/">
                <img src="/facebook.png" alt="" />
            </motion.a>
            <motion.a variants={followVariants} href="https://x.com/Muhamma09874832?t=fpylTSVs6bk-hLJVu6gHWA&s=09">
                <img src="/x.png" alt="" />
            </motion.a>
            <motion.div variants={followVariants} className="followTextContainer">
                <div className="followText">FOLLOW ME</div>
            </motion.div>
        </motion.div>
        {/* bubble*/}
        <Speech/>
        {/* Certificate */}
        <div className="certificate">

        </div>
        {/* contact button */}
        <motion.a href="/#contact" className="contactLink" animate={{x:[200,0],opacity:[0,1]}} transition={{duration:2,}}>
            <motion.div animate={{rotate:[0,360]}} transition={{duration:10,repeat:Infinity,ease:"linear",}} className="contactButton">
                <svg viewBox="0 0 200 200" width="150" height="150">
                    <circle cx="100" cy="100" r="90" fill="pink" />
                    <path
                        id="innerCirclePath"
                        fill="none"
                        d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                    />
                    <text className="circleText">
                        <textPath href="#innerCirclePath">Contact Me •</textPath>
                    </text>
                    <text className="circleText">
                        <textPath href="#innerCirclePath" startOffset="44%">
                        Contact Me •
                        </textPath>
                    </text>
                </svg>
                <div className="arrow">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="50"
                        height="50"
                        fill="none"
                        stroke="black"
                        strokeWidth="2"
                    >
                        <line x1="6" y1="18" x2="18" y2="6" />
                        <polyline points="9 6 18 6 18 15" />
                    </svg>
                </div>
            </motion.div>
        </motion.a>
      </div>
      <div className="bg">
        {/* 3D*/}
        <Canvas>
          <Suspense fallback="loading...">
            <Shape />
          </Suspense>
        </Canvas>
        <div className="hImg">
            <img src="miqdad.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
