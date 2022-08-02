/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Navigation extends React.Component {
  render() {
    return (
      <div className="nav-container">
        <div className="logo">MATH MAGICIAN</div>
        <ul className="nav-ul">
          <li><a href="https://www.google.com/">HOME</a></li>
          <li><a href="https://www.google.com/">CALCULATOR</a></li>
          <li><a href="https://www.google.com/">QUOTE</a></li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
