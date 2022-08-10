import calculate from '../logic/calculate';
import operate from '../logic/operate';

describe('testing calculate functions', () => {
  test('Additions', () => {
    const buttonName = '+';
    const object = {
      total: '-5',
      next: '3',
      operation: buttonName,
    };
    expect(calculate(object, buttonName).total).toBe('-2');
    expect(calculate(object, buttonName).next).toBe(null);
    expect(calculate(object, buttonName).operation).toBe(buttonName);
  });

  test('Multiplication', () => {
    const buttonName = 'x';
    const obj = {
      total: '2',
      next: '4',
      operation: buttonName,
    };
    expect(calculate(obj, buttonName).total).toBe('8');
    expect(calculate(obj, buttonName).next).toBeNull();
    expect(calculate(obj, buttonName).operation).toBe(buttonName);
  });

  test('Substraction', () => {
    const buttonName = '-';
    const obj = {
      total: '10',
      next: '9',
      operation: buttonName,
    };
    expect(calculate(obj, buttonName).total).toBe('1');
    expect(calculate(obj, buttonName).next).toBeNull();
    expect(calculate(obj, buttonName).operation).toBe(buttonName);
  });

  test('Division', () => {
    const buttonName = '÷';
    const obj = {
      total: '10',
      next: '5',
      operation: buttonName,
    };
    expect(calculate(obj, buttonName).total).toBe('2');
    expect(calculate(obj, buttonName).next).toBeNull();
    expect(calculate(obj, buttonName).operation).toBe(buttonName);
  });

  test('AC to reset values', () => {
    const buttonName = 'AC';
    const object = {
      total: '-9',
      next: '13',
      operation: buttonName,
    };
    expect(calculate(object, buttonName).total).toBe(null);
    expect(calculate(object, buttonName).next).toBe(null);
    expect(calculate(object, buttonName).operation).toBe(null);
  });

  test('. tests', () => {
    const buttonName = '.';
    const object = {
      total: '4',
      next: '2',
      operation: buttonName,
    };
    expect(calculate(object, buttonName).next).toBe('2.');
    expect(calculate(object, buttonName).operation).toBe(buttonName);
  });

  test('+/- tests', () => {
    const buttonName = '+/-';
    const object = {
      total: '-9',
      next: '-2',
      operation: buttonName,
    };
    expect(calculate(object, buttonName).next).toBe('2');
    expect(calculate(object, buttonName).operation).toBe(buttonName);
  });

  test('= tests', () => {
    const buttonName = '=';
    const object = {
      total: '-9',
      next: '-2',
      operation: '+',
    };
    expect(calculate(object, buttonName).total).toBe('-11');
    expect(calculate(object, buttonName).next).toBe(null);
    expect(calculate(object, buttonName).operation).toBe(null);
  });

  test('0 tests', () => {
    const buttonName = '÷';
    const object = {
      total: '8',
      next: '0',
      operation: buttonName,
    };
    expect(calculate(object, buttonName).total).toBe("Can't divide by 0.");
    expect(calculate(object, buttonName).next).toBe(null);
    expect(calculate(object, buttonName).operation).toBe('÷');
  });
});

describe('testing operate functions', () => {
  test('addition', () => {
    expect(operate(1, 3, '+')).toBe('4');
  });

  test('subtraction', () => {
    expect(operate(10, 3, '-')).toBe('7');
  });

  test('division', () => {
    expect(operate(4, 2, '÷')).toBe('2');
  });

  test('multiplication', () => {
    expect(operate(1, 3, 'x')).toBe('3');
  });

  test('percentage', () => {
    expect(operate(100, 24, '%')).toBe('4');
  });
});
