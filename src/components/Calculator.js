/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  handleClick = (event) => {
    const res = calculate(this.state, event.target.textContent);
    this.setState(res);
  }

  render() {
    const { total, next } = this.state;
    return (
      <section className="calculator">
        <div className="display">{next || total}</div>
        {/* display calculation */}

        <button onClick={this.handleClick} className="btns hover" type="button">AC</button>
        <button onClick={this.handleClick} className="btns hover" type="button">+/-</button>
        <button onClick={this.handleClick} className="btns hover" type="button">%</button>
        <button onClick={this.handleClick} className="operators hover" type="button">÷</button>
        {/* first row */}

        <button onClick={this.handleClick} className="btns hover" type="button">7</button>
        <button onClick={this.handleClick} className="btns hover" type="button">8</button>
        <button onClick={this.handleClick} className="btns hover" type="button">9</button>
        <button onClick={this.handleClick} className="operators hover" type="button">x</button>
        {/* second row */}

        <button onClick={this.handleClick} className="btns hover" type="button">4</button>
        <button onClick={this.handleClick} className="btns hover" type="button">5</button>
        <button onClick={this.handleClick} className="btns hover" type="button">6</button>
        <button onClick={this.handleClick} className="operators hover" type="button">-</button>
        {/* third row */}

        <button onClick={this.handleClick} className="btns hover" type="button">1</button>
        <button onClick={this.handleClick} className="btns hover" type="button">2</button>
        <button onClick={this.handleClick} className="btns hover" type="button">3</button>
        <button onClick={this.handleClick} className="operators hover" type="button">+</button>
        {/* fourth row */}

        <button onClick={this.handleClick} className="zero hover" type="button">0</button>
        <button onClick={this.handleClick} className="btns hover" type="button">.</button>
        <button onClick={this.handleClick} className="operators hover" type="button">=</button>
        {/* fifth row */}
      </section>
    );
  }
}

export default Calculator;
