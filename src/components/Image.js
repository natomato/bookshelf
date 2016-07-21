import React, { Component, PropTypes } from 'react';

class Image extends Component {
  constructor(props) {
    super(props);
    this.handleError = this.handleError.bind(this);
  }
  handleError() {
    // load '?' image from static folder
    console.log('image error');
  }
  render() {
    return (
      <img onError={this.handleError} {...this.props}></img>
    );
  }
}
Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
