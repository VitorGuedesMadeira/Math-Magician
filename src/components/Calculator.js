/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Calculator extends React.Component {
  render() {
    return (
      <section className="calculator">
        <div className="display">0</div>
        {/* display calculation */}

        <button className="btns hover" type="button">AC</button>
        <button className="btns hover" type="button">+/-</button>
        <button className="btns hover" type="button">%</button>
        <button className="operators hover" type="button">÷</button>
        {/* first row */}

        <button className="btns hover" type="button">7</button>
        <button className="btns hover" type="button">8</button>
        <button className="btns hover" type="button">9</button>
        <button className="operators hover" type="button">x</button>
        {/* second row */}

        <button className="btns hover" type="button">4</button>
        <button className="btns hover" type="button">5</button>
        <button className="btns hover" type="button">6</button>
        <button className="operators hover" type="button">-</button>
        {/* third row */}

        <button className="btns hover" type="button">1</button>
        <button className="btns hover" type="button">2</button>
        <button className="btns hover" type="button">3</button>
        <button className="operators hover" type="button">+</button>
        {/* fourth row */}

        <button className="zero hover" type="button">0</button>
        <button className="btns hover" type="button">.</button>
        <button className="operators hover" type="button">=</button>
        {/* fifth row */}
      </section>
    );
  }
}

export default Calculator;
