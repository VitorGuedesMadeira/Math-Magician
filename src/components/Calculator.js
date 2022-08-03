/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import calculate from '../logic/calculate';

// function Calculator(props) {}
function Calculator() {
  const [state, setState] = useState({ total: null, next: null, operation: null });

  const handleClick = (event) => {
    setState((prevState) => {
      console.log(prevState);
      return ({ ...prevState, ...calculate(prevState, event.target.textContent) });
    });
  };

  return (
    <section className="calculator">
      <div className="display">{state.next || state.total || 0}</div>
      {/* display calculation */}

      <button onClick={handleClick} className="btns hover" type="button">AC</button>
      <button onClick={handleClick} className="btns hover" type="button">+/-</button>
      <button onClick={handleClick} className="btns hover" type="button">%</button>
      <button onClick={handleClick} className="operators hover" type="button">÷</button>
      {/* first row */}

      <button onClick={handleClick} className="btns hover" type="button">7</button>
      <button onClick={handleClick} className="btns hover" type="button">8</button>
      <button onClick={handleClick} className="btns hover" type="button">9</button>
      <button onClick={handleClick} className="operators hover" type="button">x</button>
      {/* second row */}

      <button onClick={handleClick} className="btns hover" type="button">4</button>
      <button onClick={handleClick} className="btns hover" type="button">5</button>
      <button onClick={handleClick} className="btns hover" type="button">6</button>
      <button onClick={handleClick} className="operators hover" type="button">-</button>
      {/* third row */}

      <button onClick={handleClick} className="btns hover" type="button">1</button>
      <button onClick={handleClick} className="btns hover" type="button">2</button>
      <button onClick={handleClick} className="btns hover" type="button">3</button>
      <button onClick={handleClick} className="operators hover" type="button">+</button>
      {/* fourth row */}

      <button onClick={handleClick} className="zero hover" type="button">0</button>
      <button onClick={handleClick} className="btns hover" type="button">.</button>
      <button onClick={handleClick} className="operators hover" type="button">=</button>
      {/* fifth row */}
    </section>
  );
}

export default Calculator;
