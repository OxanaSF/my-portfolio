import React from 'react'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import styled from 'styled-components'

import  {motion} from 'framer-motion'
import {pageTransitionAnimation} from '../animation'

const Main = () => {
  return (
    <HomeStyled
      variants={pageTransitionAnimation} 
      initial="hidden" animate="show" 
      exit="exit" 
      id='home'>
        <Hero />
        <About />
        <Projects />
        <Contact />
    </HomeStyled>
  )
}

const HomeStyled = styled(motion.main)`
  overflow-x: hidden;
`

export default Main