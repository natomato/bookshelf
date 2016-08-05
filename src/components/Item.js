import React from 'react';
import Image from '../components/Image';

export default (item) => (
  <li>
    <Image alt="book cover" src={item.thumbnail} />
    <h1>{item.title}</h1>
    <h2>{item.subtitle}</h2>
  </li>
);
