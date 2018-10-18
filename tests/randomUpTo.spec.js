const { randomUpTo } = require('../src/randomUpTo')

const object = { one: 1, two: 2 }
const nonEmptyString = 'Example'
const emptyString = ''
const booleanTrue = true
const booleanFalse = false
const exampleFunction = () => {
  return 1
}

describe('Type Tests for randomUpTo().', () => {
  describe('Max = Object', () => {
    test('Returns NaN if max is an object.', () => {
      expect(randomUpTo(object)).toBeFalsy()
    })
  })

  describe('Max = String', () => {
    test('Returns NaN if max is a string with length > 0.', () => {
      expect(randomUpTo(nonEmptyString)).toBeFalsy()
    })

    test('Returns NaN if max is an empty string.', () => {
      expect(randomUpTo(emptyString)).toBeFalsy()
    })
  })

  describe('Max = Number', () => {
    test('Returns a random whole number between 0 and a max if max is a number.', () => {
      expect(randomUpTo(100)).toBeGreaterThan(0)
      expect(randomUpTo(100)).toBeLessThanOrEqual(100)
    })
  })

  describe('Max = Boolean', () => {
    test('Returns NaN if max is a boolean = true.', () => {
      expect(randomUpTo(booleanTrue)).toBeFalsy()
    })

    test('Returns NaN if max is a boolean = false.', () => {
      expect(randomUpTo(booleanFalse)).toBeFalsy()
    })
  })

  describe('Max = Function', () => {
    test('Returns NaN if max is a function', () => {
      expect(randomUpTo(exampleFunction)).toBeFalsy()
    })
  })

  describe('Max = Other Falsy Types', () => {
    test('Returns NaN if max is undefined.', () => {
      expect(randomUpTo(undefined)).toBeFalsy()
    })

    test('Returns NaN if group is null.', () => {
      expect(randomUpTo(null)).toBeFalsy()
    })
  })
})
