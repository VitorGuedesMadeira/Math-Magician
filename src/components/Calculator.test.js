import { fireEvent, render, screen } from '@testing-library/react';
import Calculator from './Calculator';

describe('footer component', () => {
  test('testing if the word "math!" is on it', () => {
    render(<Calculator />);
    const calculatorText = screen.getByText(/math!/);
    expect(calculatorText).toBeInTheDocument;
  });

  test('testing if theres a 2022 text in the footer', () => {
    render(<Calculator />);
    const calculatorBtn = screen.getByText(/AC/);
    expect(calculatorBtn).toBeInTheDocument;
  });

  test('testing if AC has a class', () => {
    render(<Calculator />);
    const calculatorBtn = screen.getByText(/AC/);
    expect(calculatorBtn).toHaveClass;
  });
});

describe('Calculator tests', () => {
    test('Renders Calculator component', () => {
      const tree = render(<Calculator />)
      expect(tree).toMatchSnapshot();
    });

    test('Simulating user interaction', () => {
        render(<Calculator />);
        const displayNumber = document.querySelector('.display');
        const key7 = screen.getByText('7');
        const key8 = screen.getByText('8');
        fireEvent.click(key7);
        fireEvent.click(key8);
        expect(displayNumber.textContent).toBe('78');
      });

      test('Simulating user interaction', () => {
        render(<Calculator />);
        
        const displayNumber = document.querySelector('.display');
        const key3 = screen.getByText('3');
        const key7 = screen.getByText('7');
        const keyTimes = screen.getByText('x');
        const keyEquals = screen.getByText('=');

        fireEvent.click(key3);
        fireEvent.click(keyTimes);
        fireEvent.click(key7);
        fireEvent.click(keyEquals);

        expect(displayNumber.textContent).toBe('21');
      });
});
