/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Calculator from './components/Calculator';
import Navigation from './components/Navigation';

class App extends React.Component {
  render() {
    return (
      <div>
        <header><Navigation /></header>
        <main className="main-container">
          <Calculator />
        </main>
        <footer className="footer-container" />
      </div>
    );
  }
}

export default App;
