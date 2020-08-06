import React from 'react';
import request from 'request';
import cheerio from 'cheerio';

class IGFeed extends React.Component {
  componentDidMount() {
    request(
      'https://embedsocial.com/facebook_album/pro_instagram/9fffdfec5d37bf8f66d4ece32184079a51042de3',
      (error, response, body) => {
        const $ = cheerio.load(body);
        document.getElementById('gallery-html').innerHTML = $.html();
      }
    );
  }

  render() {
    return (
      <div className="container">
        <div id="gallery-html" />
      </div>
    );
  }
}

export default IGFeed;
