import React from 'react';

const Banner = ({ title, subtitle }) => (
  <div className="banner flex flex-col justify-center items-center px-10 text-center">
    <p className="text-white text-4xl lg:text-5xl xl:text-6xl leading-none font-semibold mb-6">
      {title}
    </p>
    <p className="text-white text-lg lg:text-xl xl:text-2xl font-light leading-none">{subtitle}</p>
  </div>
);

export default Banner;
