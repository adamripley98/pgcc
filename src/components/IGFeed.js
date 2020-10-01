import React from 'react';

let width = 800;
if (typeof window !== `undefined`) {
  width = window.innerWidth > 0 ? window.innerWidth : screen.width;
}

const getWidth = () => {
  if (width > 950) {
    return '900px';
  }
  if (width > 700) {
    return '600px';
  }
  return '400px';
};

const IGFeed = () => {
  return (
    <div className="container mx-auto text-center flex justify-center">
      <div>
        <h5 className="text-3xl font-bold leading-tight text-center mb-12">
          Find us on{' '}
          <a href="https://www.instagram.com/upenn_pgcc/" rel="noreferrer" target="_blank">
            Instagram
          </a>
        </h5>
        <iframe
          title="ig-feed"
          src="https://embedsocial.com/facebook_album/pro_instagram/9fffdfec5d37bf8f66d4ece32184079a51042de3"
          width={getWidth()}
          height="1300px"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        />
      </div>
    </div>
  );
};

export default IGFeed;
