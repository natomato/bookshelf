import React, { Component } from 'react';
import { connect } from 'react-redux';

class ItemList extends Component {
  render() {
    return (
      <ul>
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

export default connect(mapStateToProps)(ItemList);
