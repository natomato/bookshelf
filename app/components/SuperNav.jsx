import React from 'react';

export default class SuperNav extends React.Component {
  render() {
    return (
      <div className="main-container">
        <nav className="navbar navbar-default">
          <div className="col-sms-7 col-sms-offset-2" style={{marginTop: 15}}>
            Login: [____] [Sign Up]
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
