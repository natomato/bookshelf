import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class ItemDetail extends Component {
  render() {
    const item = this.props.item;
    if (!item) {
      return <div>Nothing to see here</div>;
    }
    return (
      <div>
        <h1>Item Detail</h1>
        <img alt="book cover" src={item.thumbnail}></img>
        <div>{item.title}</div>
        <div>{item.subtitle}</div>
      </div>
    );
  }
}

ItemDetail.propTypes = {
  item: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    item: state.activeItem,
  };
}

export default connect(mapStateToProps)(ItemDetail);
