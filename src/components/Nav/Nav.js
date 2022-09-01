import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HashLink as MiddleLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

import classes from './Nav.module.scss';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';


import styled from 'styled-components';
import {
  lineBlogAnimation
} from "../animation";

const Nav = () => {
  const { pathname } = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
  });
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const aboutLinkHandler = () => {
    setSubMenuOpen(true);
  };

  useEffect(() => {
    if ((size.windowWidth > 768 && menuOpen) || subMenuOpen) {
      setMenuOpen(false);
      setSubMenuOpen(false);
    }
  }, [size.windowWidth, menuOpen, subMenuOpen]);

  const menuToggleHandler = () => {
    console.log('changed!!');
    setMenuOpen((p) => !p);
  };

  const globalHome = (
    <li>
      <Link to="/" onClick={aboutLinkHandler} key="home-lobal">
        Home
      </Link>
    </li>
  );

  const localHome = (
    <motion.li>
      <MiddleLink to="/#top" onClick={aboutLinkHandler} key="home-local">
        Home
      </MiddleLink>
      <LineStyled 
         variants={lineBlogAnimation}
         initial="hidden"
         animate="show"
      />
    </motion.li>
  );

  return (
    <motion.div className={classes.header__content}>
      <motion.nav
        id="nav"
        className={`${classes.header__content__nav} ${
          menuOpen ? classes.isMenu : ''
        }`}
      >
        <motion.ul>
          {size.windowWidth > 900 && globalHome}
          {size.windowWidth < 901 && localHome}

          <motion.li>
            <MiddleLink to="/#about" onClick={aboutLinkHandler}>
              About
            </MiddleLink>
          </motion.li>

          <motion.li path="/#projects">
            <MiddleLink to="/#projects" onClick={aboutLinkHandler}>
              Projects
            </MiddleLink>
          </motion.li>

          <motion.li>
            <MiddleLink to="/#contact" onClick={aboutLinkHandler}>
              Contact
            </MiddleLink>
          </motion.li>

          <motion.li>
            <Link to="/resume" onClick={aboutLinkHandler}>
              Resume
              <motion.div
                transition={{ duration: 0.75 }}
                initial={{ width: '0%' }}
                animate={{ width: pathname === '/resume' ? '63.5%' : '0' }}
              />
            </Link>
          </motion.li>

          <motion.li>
            <Link to="blog" onClick={aboutLinkHandler}>
              Blog
            </Link>
          </motion.li>
        </motion.ul>
      </motion.nav>

      <div className={classes.header__content__toggle}>
        {!menuOpen ? (
          <BiMenuAltRight onClick={menuToggleHandler} />
        ) : (
          <AiOutlineClose
            onClick={menuToggleHandler}
            className={classes.header__content__toggle__close}
          />
        )}
      </div>
    </motion.div>
  );
};

const LineStyled = styled(motion.div)`
 .link{
  height: 0.3rem;
  background: #2b5876;
  border-radius: 2px;
  height: 0.3rem;
  width: 60%;
  margin: auto;

 }

`;

export default Nav;
