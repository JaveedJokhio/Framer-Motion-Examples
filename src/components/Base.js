import React from 'react';
import { Link } from 'react-router-dom';
import { delay, motion, transform } from 'framer-motion';

const containerVariant = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', delay: 0.5 }
  },
  exit:{
    x:'-100vw',
    transition:{ease:'easeInOut'}
  }

}

const nextVariant={
  hidden:{
    x: '-100vw'
  },
  visible:{
    x: 0,
    trannsition:{ type: 'spring', stiffness: 120 }
  }
}


const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      exit="exit"

    >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
              whileHover={{
                scale: 1.3, color: 'white', originX: 0
              }}
              transition={{ type: 'keyframes' }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
        variants={nextVariant}
         
          
        >
          <Link to="/toppings">
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;