import { motion,useCycle } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import './TypingAnimation.css'; // Import your CSS file

const loaderVariants={
    AnimationOne:{
        x:[-20,20],
        y:[0,-30],
        transition:{
            x:{duration:0.5,repeatType: "mirror",
            repeat: Infinity,},
            y:{duration:0.25,repeatType: "mirror",
            repeat: Infinity,ease:"easeOut"}
        }
    },
    AnimationTwo:{
        y:[0,-40],
        x:0,
        transition:{  
            y:{ duration:0.25,
            repeatType: "mirror",
            repeat: Infinity,
            ease:"easeOut"
        }}
      
    }
}

// ########### Text Animation ##########
const TypingAnimation = ({ texts, speed = 70 }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const currentText = texts[currentIndex];
  
      let typingInterval;
      if (currentText) {
        let currentTextIndex = 0;
        typingInterval = setInterval(() => {
          if (currentTextIndex < currentText.length) {
            setDisplayText(currentText.slice(0, currentTextIndex + 1));
            currentTextIndex++;
          } else {
            clearInterval(typingInterval);
            setTimeout(() => {
              setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
            }, 1000); // Delay before starting the next text
          }
        }, speed);
      }
  
      return () => {
        clearInterval(typingInterval);
      };
    }, [texts, currentIndex, speed]);
  
    return (
      <div className="typing-container">
        <motion.span
          className="typing-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {displayText}
        </motion.span>
        <motion.span
          className="blinking-cursor"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 0.6 }}
        >
          |
        </motion.span>
      </div>
    );
  };
const Loader = () => {

    const texts = ['Hello there!', 'Welcome to the animation.', 'Framer Motion is amazing!'];

    const [animatation,cycleAnimation]= useCycle("AnimationOne","AnimationTwo")
  return (
    <>
    <motion.div
    variants={loaderVariants}
    animate={animatation}
    className='loader'>
    </motion.div>
    <div onClick={()=>cycleAnimation()}>
        <h4>Cycle Loader    <TypingAnimation texts={texts}/></h4>
    </div>
    </>
  )
}

export default Loader