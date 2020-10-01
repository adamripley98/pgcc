import React from 'react';
import request from 'request';
import cheerio from 'cheerio';

class IGFeed extends React.Component {
  componentDidMount() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl =
      'https://embedsocial.com/facebook_album/instagram_album_media/9fffdfec5d37bf8f66d4ece32184079a51042de3';
    request(proxyUrl + targetUrl, (error, response, body) => {
      const $ = cheerio.load(body);
      $('.estitle').addClass('hidden');
      $('.espagination').addClass('hidden');
      $('.powered-by').addClass('hidden');
      $('.developed-by').addClass('hidden');
      document.getElementById('gallery-html').innerHTML = $.html();
    });
  }

  render() {
    return (
      <div className="container">
        <h5 className="text-3xl font-bold leading-tight text-center mb-12">
          Find us on{' '}
          <a href="https://www.instagram.com/upenn_pgcc/" rel="noreferrer" target="_blank">
            Instagram
          </a>
        </h5>
        <div id="gallery-html" />
      </div>
    );
  }
}

export default IGFeed;
