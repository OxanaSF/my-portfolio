import React from 'react'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'

import  {motion} from 'framer-motion'
import {pageTransitionAnimation} from '../animation'

const Main = () => {
  return (
    <motion.div variants={pageTransitionAnimation} initial="hidden" animate="show" exit="exit" id='home'>
        <Hero />
        <About />
        <Projects />
        <Contact />
    </motion.div>
  )
}

export default Main