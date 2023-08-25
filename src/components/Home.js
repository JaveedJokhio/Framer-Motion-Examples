import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loader from './Loader';

const Home = () => {

  const buttonVariants = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        duration:0.3,
        repeatType: "mirror",
        repeat: Infinity,
      }
    },
  };
  const containerVariant ={
    hidden:{
      opacity: 0, y: -20 
    },
    visible:{
      opacity: 1, y: 0,
      transition:{duration:1}

    },
    exit:{
      x:'-100vw',
      transition:{ease:'easeInOut'}
    }
  }
  return (
    <motion.div className="home container" >
      <motion.h2 variants={containerVariant} initial="hidden" animate="visible" exit="exit">
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}

          whileHover="hover" // Apply the "hover" variant on hover
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader/>
    </motion.div>
  )
}

export default Home;