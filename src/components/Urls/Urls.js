import React from 'react';
import { isArray } from 'util';

const Urls = ({ urls }) => (
  <ul>
    {isArray(urls) &&
      urls.map(url => (
        <li key={`url-${url.url}`}>
          <a href={url.url}>{url.type}</a>
        </li>
      ))}
  </ul>
);

Urls.defaultProps = {
  urls: [
    {
      url: '',
      type: '',
    },
  ],
};

export default Urls;
