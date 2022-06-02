import React from 'react'
import Hero from '../Hero'
import About from '../About'
import Projects from '../Projects'
import Contact from '../Contact'

import  {motion} from 'framer-motion'
import {pageTransitionAnimation} from '../animation'

const Main = () => {
  return (
    <motion.div variants={pageTransitionAnimation} initial="hidden" animate="show" exit="exit">
        <Hero />
        <About />
        <Projects />
        <Contact />
    </motion.div>
  )
}

export default Main