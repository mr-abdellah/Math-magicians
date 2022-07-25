import calculate from '../logic/calculate';

describe('Test calculate functions', () => {
    test('Test AC', () => {
        const result = calculate({ total: '233', next: '33', operation: '' }, 'AC');
        expect(result).toStrictEqual({ total: null, next: null, operation: null });
    });

    test('Test x', () => {
        const result = calculate({ total: '20', next: '10', operation: 'x' }, '=');
        expect(result).toStrictEqual({ total: '200', next: null, operation: null });
    });

    test('Test +/-', () => {
        const result = calculate({ total: 40, next: null, operation: null }, '+/-');
        expect(result).toStrictEqual({ total: '-40', next: null, operation: null });
    });

    test('Test dot', () => {
        let result = calculate({ total: null, next: null, operation: null }, '6');
        result = calculate(result, '.');
        result = calculate(result, '00');
        expect(result).toStrictEqual({ total: null, next: '6.00' });
    });

    test('Test -', () => {
        const result = calculate({ total: '30', next: '50', operation: '-' }, 'x');
        expect(result).toStrictEqual({ total: '-20', next: null, operation: 'x' });
    });

    test('Test +', () => {
        const result = calculate({ total: '5', next: '7', operation: '-' }, '+');
        expect(result).toStrictEqual({ total: '-2', next: null, operation: '+' });
    });

    test('Test ÷', () => {
        const result = calculate({ total: '10', next: '10', operation: '÷' }, '=');
        expect(result).toStrictEqual({ total: '1', next: null, operation: null });
    });

    test('Test %', () => {
        const result = calculate({ total: null, next: '1', operation: null }, '%');
        expect(result).toStrictEqual({ total: '1', next: null, operation: '%' });
    });
});