import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'gatsby';
import LogoIcon from '../../images/logo.png';
import Button from '../Button';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    console.log('yup');
    console.log('th', this.state.isOpen);
    const isOpen = !this.state.isOpen;
    console.log('isope', isOpen);
    this.setState({ isOpen });
  }

  render() {
    return (
      <header className="sticky top-0 bg-white shadow z-50">
        <div className="flex justify-between items-center mx-auto py-4 px-8">
          <a href="/">
            <img src={LogoIcon} className="w-64" alt="logo" />
          </a>
          <div className="lg:hidden">
            <button
              onClick={this.toggle}
              type="button"
              className="block text-blue-900 hover:text-blue-800 focus:text-blue-800 focus:outline-none"
            >
              <svg className="w-8 fill-current" viewBox="0 0 24 24">
                <path
                  className={this.state.isOpen ? 'text-blue-900 hover:text-blue-800' : 'hidden'}
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
                <path
                  className={!this.state.isOpen ? 'text-blue-900 hover:text-blue-800' : 'hidden'}
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:inline-flex flex mt-4 sm:mt-0">
            <Link className="px-4 nav-link" to="/">
              Home
            </Link>
            <Link className="px-4 nav-link" to="/about">
              About
            </Link>
            <Link className="px-4 nav-link" to="/events">
              Events
            </Link>
            <Link className="px-4 nav-link" to="/pro-bono-consulting">
              Pro Bono
            </Link>
            <Link className="px-4 nav-link" to="/sponsors">
              Sponsors
            </Link>
            <Link className="px-4 nav-link" to="/resources">
              Resources
            </Link>
          </div>
          <div className="hidden lg:inline-flex">
            <Button className="text-sm">Contact Us</Button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

// <div className="dropdown">
//   <span className="px-4 nav-link">About</span>
//   <div className="dropdown-content">
//     <Link className="px-4 nav-link" to="/about">
//       About us
//     </Link>
//     <Link className="px-4 nav-link" to="/">
//       Test
//     </Link>
//     <Link className="px-4 nav-link" to="/">
//       Tes
//     </Link>
//   </div>
// </div>

// <AnchorLink className="px-4 nav-link" href="#top">
//   Home
// </AnchorLink>
