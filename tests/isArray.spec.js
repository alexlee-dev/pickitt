const { isArray } = require('../index')

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

test('Returns true if group has length > 0.', () => {
  expect(isArray(arrayLengthOne)).toBeTruthy()
})

test('Returns false if group has length not > 0.', () => {
  expect(isArray(arrayLengthZero)).toBeFalsy()
})

test('Returns false if group is an object.', () => {
  expect(isArray(object)).toBeFalsy()
})

test('Returns false if group is a string with length > 0.', () => {
  expect(isArray(nonEmptyString)).toBeFalsy()
})

test('Returns false if group is an empty string.', () => {
  expect(isArray(emptyString)).toBeFalsy()
})

test('Returns false if group is a number.', () => {
  expect(isArray(number)).toBeFalsy()
})

test('Returns false if group is a boolean = true.', () => {
  expect(isArray(booleanTrue)).toBeFalsy()
})

test('Returns false if group is a boolean = false.', () => {
  expect(isArray(booleanFalse)).toBeFalsy()
})

test('Returns false if group is a function', () => {
  expect(isArray(exampleFunction)).toBeFalsy()
})

test('Returns false if group is undefined.', () => {
  expect(isArray(undefined)).toBeFalsy()
})

test('Returns false if group is null.', () => {
  expect(isArray(null)).toBeFalsy()
})
