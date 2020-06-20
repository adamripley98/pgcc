import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from "gatsby";
import LogoIcon from '../../images/logo.png';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <img src={LogoIcon} className="w-64" alt="logo" />
      <div className="flex mt-4 sm:mt-0">
        <Link className="px-4 nav-link" to="/">
          Home
        </Link>
        <Link className="px-4 nav-link" to="/about">
          About
        </Link>
        <Link className="px-4 nav-link" to="/about">
          Test
        </Link>
        <Link className="px-4 nav-link" to="/about">
          Test
        </Link>
        <Link className="px-4 nav-link dropdown" to="/about">
          About
        </Link>
        <div className="dropdown">
          <span className="px-4 nav-link">About</span>
          <div className="dropdown-content">
            <Link className="px-4 nav-link" to="/about">
              About us
            </Link>
            <Link className="px-4 nav-link" to="/">
              Test
            </Link>
            <Link className="px-4 nav-link" to="/">
              Tes
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">Contact Us</Button>
      </div>
    </div>
  </header>
);

// <AnchorLink className="px-4 nav-link" href="#top">
//   Home
// </AnchorLink>

export default Header;
