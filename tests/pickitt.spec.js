const { pickitt } = require('../index')
require('jest-matcher-one-of')

const exampleArray = ['elem1', 'elem2', 'elem3']
const emptyArray = []
const arrayLengthOne = ['elem1']
const arrayLengthZero = []
const object = { one: 1, two: 2 }
const nonEmptyString = 'Example'
const emptyString = ''
const number = 100
const booleanTrue = true
const booleanFalse = false
const exampleFunction = () => {
  return 1
}

test('Gets an item from an example array.', () => {
  expect(pickitt(exampleArray)).toBeOneOf(['elem1', 'elem2', 'elem3'])
})

test('Throws an error with "empty array" for an empty array.', () => {
  expect(pickitt(emptyArray)).toThrow('empty array')
})

test('Throws an error with "object" if group is an object.', () => {
  expect(pickitt(object)).toThrow('object')
})

test('Throws an error with "string" if group is a string.', () => {
  expect(pickitt(nonEmptyString)).toThrow('string')
})

test('Throws an error with "string" if group is an empty string.', () => {
  expect(pickitt(emptyString)).toThrow('string')
})

test('Throws an error with "number" if group is a number.', () => {
  expect(pickitt(number)).toThrow('number')
})

test('Throws an error with "boolean" if group is a boolean = true.', () => {
  expect(pickitt(booleanTrue)).toThrow('boolean')
})

test('Throws an error with "boolean" if group is a boolean = false.', () => {
  expect(pickitt(booleanFalse)).toThrow('boolean')
})

test('Throws an error with "function" if group is a function', () => {
  expect(pickitt(exampleFunction)).toThrow('function')
})

test('Throws an error with "undefined" if group is undefined.', () => {
  expect(pickitt(undefined)).toThrow('undefined')
})

test('Throws an error with "null" if group is null.', () => {
  expect(pickitt(null)).toThrow('null')
})
