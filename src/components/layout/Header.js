import React from 'react';
import { Link } from 'gatsby';
import LogoIcon from '../../images/logo.png';
import Button from '../Button';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      eventsOpen: false,
      aboutOpen: false
    };
    this.toggle = this.toggle.bind(this);
    this.toggleMobile = this.toggleMobile.bind(this);
  }

  toggle() {
    const isOpen = !this.state.isOpen;
    this.setState({ isOpen, eventsOpen: false, aboutOpen: false });
  }

  toggleMobile(which) {
    if (which === 'events') {
      const eventsOpen = !this.state.eventsOpen;
      this.setState({ eventsOpen });
    } else if (which === 'about') {
      const aboutOpen = !this.state.aboutOpen;
      this.setState({ aboutOpen });
    }
  }

  render() {
    return (
      <>
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
            <div className="hidden lg:inline-flex flex">
              <div className="lg:inline-flex flex self-center mr-4">
                <Link
                  className="px-4 nav-link"
                  activeStyle={{ 'text-decoration': 'underline' }}
                  to="/"
                >
                  Home
                </Link>
                <div className="about-dropdown">
                  <Link
                    className="px-4 nav-link about-link"
                    activeStyle={{ 'text-decoration': 'underline' }}
                    to="/about"
                  >
                    About
                  </Link>
                  <div className="about-dropdown-content rounded">
                    <Link className="px-4 nav-link my-1" to="/about">
                      Overview
                    </Link>
                    <Link className="px-4 nav-link my-1" to="/about/#executive-board">
                      Executive Board
                    </Link>
                    <Link className="px-4 nav-link my-1" to="/about/#alumni">
                      Alumni
                    </Link>
                  </div>
                </div>
                <div className="events-dropdown">
                  <Link
                    className="px-4 nav-link about-link"
                    activeStyle={{ 'text-decoration': 'underline' }}
                    to="/events"
                  >
                    Events
                  </Link>
                  <div className="events-dropdown-content rounded">
                    <Link className="px-4 nav-link whitespace-no-wrap my-1" to="/events">
                      Upcoming Events
                    </Link>
                    <Link className="px-4 nav-link whitespace-no-wrap my-1" to="/case-competition">
                      2023 Case Competition
                    </Link>
                  </div>
                </div>
                <Link
                  className="px-4 nav-link"
                  activeStyle={{ 'text-decoration': 'underline' }}
                  to="/pro-bono-consulting"
                >
                  Consulting
                </Link>
                <Link
                  className="px-4 nav-link"
                  activeStyle={{ 'text-decoration': 'underline' }}
                  to="/sponsors"
                >
                  Sponsors
                </Link>
                <Link
                  className="px-4 nav-link"
                  activeStyle={{ 'text-decoration': 'underline' }}
                  to="/resources"
                >
                  Resources
                </Link>
              </div>
              <Button className="text-sm">
                <Link className="btn-link" to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </header>
        <div
          className={`lg:hidden ${
            this.state.isOpen ? 'inline-block' : 'hidden'
          } flex flex-col items-start px-5 bg-gray-400 py-2 shadow sticky top-20 z-50 -my-2`}
        >
          <div>
            <Link className="my-2 nav-link" activeStyle={{ 'text-decoration': 'underline' }} to="/">
              Home
            </Link>
            <div className="flex">
              <Link
                className="nav-link my-2"
                activeStyle={{ 'text-decoration': 'underline' }}
                to="/about"
              >
                About
              </Link>
              <div
                className="text-2xl ml-2 text-blue-900 cursor-pointer"
                onClick={() => this.toggleMobile('about')}
              >
                ›
              </div>
            </div>
            <div className={this.state.aboutOpen ? 'inline' : 'hidden'}>
              <Link className="px-4 nav-link my-1" to="/about">
                Overview
              </Link>
              <Link className="px-4 nav-link my-1" to="/about/#executive-board">
                Executive Board
              </Link>
              <Link className="px-4 nav-link my-1" to="/about/#advisors">
                Advisors
              </Link>
              <Link className="px-4 nav-link my-1 mb-4" to="/about/#alumni">
                Alumni
              </Link>
            </div>
            <div className="flex">
              <Link
                className="nav-link my-2"
                activeStyle={{ 'text-decoration': 'underline' }}
                to="/events"
              >
                Events
              </Link>
              <div
                className="text-2xl ml-2 text-blue-900 cursor-pointer"
                onClick={() => this.toggleMobile('events')}
              >
                ›
              </div>
            </div>
            <div className={this.state.eventsOpen ? 'inline' : 'hidden'}>
              <Link className="px-4 nav-link whitespace-no-wrap my-1" to="/events">
                Upcoming Events
              </Link>
              <Link className="px-4 nav-link whitespace-no-wrap my-1 mb-4" to="/case-competition">
                2021 Case Competition
              </Link>
            </div>
            <Link
              className="nav-link my-2"
              activeStyle={{ 'text-decoration': 'underline' }}
              to="/pro-bono-consulting"
            >
              Pro Bono
            </Link>
            <Link
              className="nav-link my-4"
              activeStyle={{ 'text-decoration': 'underline' }}
              to="/sponsors"
            >
              Sponsors
            </Link>
            <Link
              className="nav-link my-4"
              activeStyle={{ 'text-decoration': 'underline' }}
              to="/resources"
            >
              Resources
            </Link>
            <Button className="text-sm mb-3">
              <Link className="btn-link" to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </>
    );
  }
}

export default Header;

// <AnchorLink className="px-4 nav-link" href="#top">
//   Home
// </AnchorLink>
