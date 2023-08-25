import React, { useEffect, useState } from 'react';
import { motion,AnimatePresence } from 'framer-motion';

const containerVariant = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { 
      type: 'spring', 
      mass:0.4,
      damping:8,
      when:"beforeChildren",
      staggerChildren:0.4
    
    }
  },
  exit:{
    x:'-100vw',
    transition:{ease:'easeInOut'}
  }

}
const childVariants={
  hidden:{
    opacity:0
  },
  visible:{
    opacity:1
  }
}
const Order = ({ pizza, setShowModel }) => {

  useEffect(()=>{
    setTimeout(() => {
      setShowModel(true)
    }, 5000);
  },[setShowModel])

  const [showTitle,setShowTitle] = useState(true);
  setTimeout(() => {
    setShowTitle(false)
  },  4000);


  return (
    <motion.div className="container order"
    variants={containerVariant}
    initial="hidden"
      animate="visible"
      exit="exit"
    >

      {/* The code of the left must be true so code of the right can execute */}
    <AnimatePresence>
      {showTitle && (
      <motion.h2
      exit={{ y:-1000}}
      >I Will GO</motion.h2>
      )}
      </AnimatePresence>
      <h2>Thank you for your order :)</h2>
      <motion.p
      variants={childVariants}
      >You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div
      variants={childVariants}
      >
      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;