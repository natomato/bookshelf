import React, { Component } from 'react';
import { connect } from 'react-redux';

class ItemDetail extends Component {
  render() {
    const item = this.props.item;
    if (!item) {
      return <div>Highlight a book below</div>;
    }
    return (
      <div>
        <h1>Item Detail</h1>
        <img src={item.thumbnail}></img>
        <div>{item.title}</div>
        <div>{item.subtitle}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    item: state.activeItem,
  };
}


export default connect(mapStateToProps)(ItemDetail);
