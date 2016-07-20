import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class ItemList extends Component {
  renderList(item) {
    return (
      <li key={item.id}>
        <img alt="book cover" src={item.thumbnail}></img>
        <h1>{item.title}</h1>
        <h2>{item.subtitle}</h2>
      </li>
    );
  }
  render() {
    return (
      <ul>
        {this.props.items.map(item => this.renderList(item))}
      </ul>
    );
  }
}
ItemList.propTypes = {
  items: PropTypes.object,
};
function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

export default connect(mapStateToProps)(ItemList);
