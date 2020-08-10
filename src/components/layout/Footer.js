import React from 'react';

const Footer = () => (
  <>
    <footer className="py-10 px-6 mt-24 mb-8 text-gray-800">
      <div className="flex">
        <div className="flex-1 px-3">
          <h2 className="text-lg font-bold">About Us</h2>
          <p className="mt-5">
            Premiere student-run consulting club at the University of Pennsylvania, 500+ members
            strong.
          </p>
        </div>
        <div className="flex-1 px-3">
          <h2 className="text-lg font-bold">Important Links</h2>
          <ul className="mt-4 leading-loose">
            <li>
              <a href="https://www.google.com/">TODO: Add link</a>
            </li>
            <li>
              <a href="https://www.google.com/">TODO: Add link</a>
            </li>
          </ul>
        </div>
        <div className="flex-1 px-3">
          <h2 className="text-lg font-bold">Social Media</h2>
          <ul className="mt-4 leading-loose">
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/upenn_pgcc/">
                Instagram
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/PennGradConsulting/"
              >
                Facebook
              </a>
            </li>
            <li>
              <a href="mailto:pgcc.comm@gmail.com">Email</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    <div className="flex justify-center py-4 mx-3 border-t">
      <p className="text-gray-600 text-sm text-center">
        Penn Graduate Consulting Club © 2020, all rights reserved. Website developed by{' '}
        <a target="_blank" rel="noreferrer" href="https://www.riplo.io/">
          Riplo
        </a>
        .
      </p>
    </div>
  </>
);

export default Footer;
