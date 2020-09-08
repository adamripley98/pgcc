import React from 'react';

const style = {
  border: 'none',
  overflow: 'hidden'
};

let width = 800;
if (typeof window !== `undefined`) {
  width = window.innerWidth > 0 ? window.innerWidth : screen.width;
}

const FacebookEvents = () => (
  <div className="mt-20 flex justify-center">
    <iframe
      title="events"
      src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FPennGradConsulting%2F&tabs=events&width=${Math.min(
        500,
        width - 100
      )}&height=244&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId=733305677505596`}
      height="244"
      style={style}
      scrolling="no"
      frameBorder="0"
      allowTransparency="true"
      allow="encrypted-media"
    />
  </div>
);

export default FacebookEvents;
