import React from 'react'
import { Link } from 'react-router-dom'
import { motion,AnimatePresence } from 'framer-motion'

const backdrop ={
    visible:{
        opacity:1
    },
    hidden:{
        opacity:0
    }

}
const model={
    hidden:{
        y:"-100vh",
        opacity:0
    },
    visible:{
        y:"200px",
        opacity:1,
        transtion:{delay:0.5}

    }
}

const Modal = ({showModel,setShowModel}) => {
  return (
    <AnimatePresence mode='wait'>
        {showModel && (
            <motion.div className='backdrop'
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            >
                <motion.div className='model'
                variants={model}
                
                >
                    <p>Want to make another pizza?</p>
                    <Link to='/'>
                        <button>Start Again</button>
                    </Link>
                </motion.div>
                
            </motion.div>
        )}
    </AnimatePresence>
  )
}

export default Modal