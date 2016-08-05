import React from 'react';
import { connect } from 'react-redux';
import Item from '../components/Item';

const ItemList = ({ items }) => (
  <ul>
    {items.map(item => <Item {...item} key={item.id} />)}
  </ul>
);

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

export default connect(mapStateToProps)(ItemList);
