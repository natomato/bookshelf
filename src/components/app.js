import React, { Component } from 'react';
import BookList from '../containers/book_list';
import ItemDetail from '../containers/item_detail';

export default function App() {
  return (
    <div>
      <ItemDetail />
      <BookList />
    </div>
  );
}
