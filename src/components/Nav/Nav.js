import { Link } from 'react-router-dom';
import { HashLink as MiddleLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

import { NavStyled, LinkUnderlineStyled } from './NavStyles';

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <NavStyled id="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
          <LinkUnderlineStyled
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/' ? '64%' : '0' }}
          />
        </li>

        <li>
          <MiddleLink to="/#about">About</MiddleLink>
          <LinkUnderlineStyled
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/#about' ? '63.5%' : '0' }}
          />
        </li>

        <li>
          <MiddleLink to="/#projects">Projects</MiddleLink>
          <LinkUnderlineStyled
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/#projects' ? '69.5%' : '0' }}
          />
        </li>

        <li>
          <MiddleLink to="/#contact">Contact</MiddleLink>
          <LinkUnderlineStyled
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/#projects' ? '69.5%' : '0' }}
          />
        </li>

        <li>
          <Link to="/resume">Resume</Link>
          <LinkUnderlineStyled
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/resume' ? '69%' : '0' }}
          />
        </li>

        <li>
          <Link to="blog">Blog</Link>
          <LinkUnderlineStyled
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/blog' ? '54%' : '0' }}
          />
        </li>
      </ul>
    </NavStyled>
  );
};

export default Nav;
