import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectItem } from '../actions/index';
import { bindActionCreators } from 'redux';
import randomColor from 'randomcolor';

function style() {
  return {
    listStyleType: 'none',
  };
}
function itemBinding(item) {
  const { height, width } = item.dimensions;

  return {
    height: scaled(height) + 'px',
    width: scaled(width) + 'px',
    backgroundColor: randomColor(),
    writingMode: 'vertical-rl',
    overflow: 'hidden',
    color: 'white',
    fontSize: '2vw',
    borderStyle: 'none solid',
    borderColor: 'white',
    borderWidth: '1px',
  };
}

function scaled(num) {
  return num / 5;
}

class BookList extends Component {
  renderList() {
    return this.props.items.map((item) => (
      <li
        key={item.id}
        onMouseOver={() => this.props.selectItem(item)}
        style={Object.assign(itemBinding(item), style())}
      >
        {item.title}
      </li>
    ));
  }
  render() {
    return (
      <ul
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          fontSize: '1em',
        }}
      >
        {this.renderList()}
      </ul>
    );
  }
}

BookList.propTypes = {
  items: React.PropTypes.array.isRequired,
  selectItem: React.PropTypes.function,
};

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectItem }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
