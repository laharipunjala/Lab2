const {
  add,
  subtract,
  multiply,
  divide,
  square,
  squareRoot
} = require('./calculator');

describe('Calculator', () => {
  describe('add()', () => {
    it('should add two numbers', () => {
      expect(add(1, 2)).toBe(3);
      expect(add(-1, 2)).toBe(1);
    });

    it('should throw an error if arguments are not numbers', () => {
      expect(() => add('1', 2)).toThrow('Both arguments must be numbers');
    });
  });

  describe('subtract()', () => {
    it('should subtract two numbers', () => {
      expect(subtract(5, 2)).toBe(3);
      expect(subtract(2, 5)).toBe(-3);
    });

    it('should throw an error if arguments are not numbers', () => {
      expect(() => subtract(5, '2')).toThrow('Both arguments must be numbers');
    });
  });

  describe('multiply()', () => {
    it('should multiply two numbers', () => {
      expect(multiply(3, 4)).toBe(12);
      expect(multiply(-2, 4)).toBe(-8);
    });

    it('should throw an error if arguments are not numbers', () => {
      expect(() => multiply(3, '4')).toThrow('Both arguments must be numbers');
    });
  });

  describe('divide()', () => {
    it('should divide two numbers', () => {
      expect(divide(10, 2)).toBe(5);
      expect(divide(9, 3)).toBe(3);
    });

    it('should throw an error if arguments are not numbers', () => {
      expect(() => divide(10, '2')).toThrow('Both arguments must be numbers');
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('square()', () => {
    it('should return the square of a number', () => {
      expect(square(5)).toBe(25);
      expect(square(-3)).toBe(9);
    });

    it('should throw an error if input is not a number', () => {
      expect(() => square('5')).toThrow('Argument must be a number');
    });
  });

  describe('squareRoot()', () => {
    it('should return the square root of a number', () => {
      expect(squareRoot(25)).toBe(5);
      expect(squareRoot(9)).toBe(3);
    });

    it('should throw an error if input is negative', () => {
      expect(() => squareRoot(-1)).toThrow(
        'Cannot calculate square root of a negative number'
      );
    });

    it('should throw an error if input is not a number', () => {
      expect(() => squareRoot('25')).toThrow('Argument must be a number');
    });
  });
});
