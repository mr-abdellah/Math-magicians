import operate from '../logic/operate';

describe('Test operate functions ', () => {
  test('Test multiply', () => {
    const product = operate(20, 30, 'x');
    expect(product).toBe('600');
  });

  test('Test add', () => {
    const product = operate(2, 7, '+');
    expect(product).toBe('9');
  });

  test('Test subtract', () => {
    const product = operate(2, 7, '-');
    expect(product).toBe('-5');
  });

  test('Test divide', () => {
    const product = operate(6, 2, '÷');
    expect(product).toBe('3');
  });

  test('Test modulus', () => {
    const product = operate(50, 2, '%');
    expect(product).toBe('0');
  });
});
