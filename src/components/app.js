import React, { Component } from 'react';
import ItemList from '../containers/item_list';
import ItemDetail from '../containers/item_detail';

export default function App() {
  return (
    <div>
      <ItemDetail />
      <ItemList />
    </div>
  );
}
