import { useState, useEffect } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HashLink as MiddleLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

import classes from './NavTwo.module.scss';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

const Nav = () => {
  const { pathname } = useLocation();


  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
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
    if ((size.width > 768 && menuOpen) || subMenuOpen) {
      setMenuOpen(false);
      setSubMenuOpen(false);
    }
  }, [size.width, menuOpen, subMenuOpen]);

  const menuToggleHandler = () => {
    console.log('changed!!');
    setMenuOpen((p) => !p);
  };

  const globalHome = (
    <li>
      <Link to="/" onClick={aboutLinkHandler} key='home-lobal'>
        Home
      </Link>
    </li>
  );

  const localHome = (
    <li>
      <MiddleLink to="/#top" onClick={aboutLinkHandler} key='home-local'>
        Home
      </MiddleLink>
    </li>
  );

  return (
    <div className={classes.header__content}>
      <nav
        id="nav"
        className={`${classes.header__content__nav} ${
          menuOpen ? classes.isMenu : ''
        }`}
      >
        <ul>
          {size.width > 900 && globalHome}
          {size.width < 901 && localHome}

          <li>
            <MiddleLink 
              to="/#about" 
              onClick={aboutLinkHandler}
              >
              About
            </MiddleLink>

          </li>

          <li>
            <MiddleLink 
              to="/#projects" 
              onClick={aboutLinkHandler}
              >
              Projects
            </MiddleLink>
          </li>

          <li>
            <MiddleLink 
              to="/#contact" 
              onClick={aboutLinkHandler}
              >
              Contact
            </MiddleLink>
          </li>

          <li>
            <Link 
              to="/resume" 
              onClick={aboutLinkHandler}
              >
              Resume
            </Link>
          </li>

          <li>
            <Link 
              to="blog" 
              onClick={aboutLinkHandler}
              >
              Blog
            </Link>
          </li>
        </ul>
      </nav>

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
    </div>
   
  );
};


const LinkUnderlineStyled = styled(motion.li)`
  
 
`;


export default Nav;
