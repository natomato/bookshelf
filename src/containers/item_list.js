import React from 'react';
import { connect } from 'react-redux';
import Image from '../components/Image';

const ItemList = ({ items }) => (
  <ul>
    {items.map(item => <Item item={item} key={item.id} />)}
  </ul>
);

const Item = ({ item }) => (
  <li>
    <Image alt="book cover" src={item.thumbnail} />
    <h1>{item.title}</h1>
    <h2>{item.subtitle}</h2>
  </li>
);

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

export default connect(mapStateToProps)(ItemList);
