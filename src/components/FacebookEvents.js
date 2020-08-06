import React from 'react';

const style = {
  border: 'none',
  overflow: 'hidden'
};

const FacebookEvents = () => (
  <div className="my-20 flex justify-center">
    <iframe
      title="events"
      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Flandomusiclive%2F&tabs=events&width=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=206640596556006"
      width="500"
      height="500"
      style={style}
      scrolling="no"
      frameBorder="0"
      allowTransparency="true"
      allow="encrypted-media"
    />
  </div>
);

export default FacebookEvents;
