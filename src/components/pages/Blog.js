import React from 'react'

import  {motion} from 'framer-motion'
import {pageTransitionAnimation} from '../animation'


const Blog = () => {
  return (
    <motion.div variants={pageTransitionAnimation} initial="hidden" animate="show" exit="exit">
      <h1>This is  my Blog</h1>
    </motion.div >
  )
}

export default Blog