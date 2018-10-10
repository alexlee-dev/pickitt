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

test('Returns undefined for an empty array.', () => {
  expect(pickitt(emptyArray)).toBeUndefined()
})

test('Returns undefined if group has length not > 0.', () => {
  expect(pickitt(emptyArray)).toBeUndefined()
})

test('Returns undefined if group is an object.', () => {
  expect(pickitt(object)).toBeUndefined()
})

test('Returns undefined if group is a string with length > 0.', () => {
  expect(pickitt(nonEmptyString)).toBeUndefined()
})

test('Returns undefined if group is an empty string.', () => {
  expect(pickitt(emptyString)).toBeUndefined()
})

test('Returns undefined if group is a number.', () => {
  expect(pickitt(number)).toBeUndefined()
})

test('Returns undefined if group is a boolean = true.', () => {
  expect(pickitt(booleanTrue)).toBeUndefined()
})

test('Returns undefined if group is a boolean = false.', () => {
  expect(pickitt(booleanFalse)).toBeUndefined()
})

test('Returns undefined if group is a function', () => {
  expect(pickitt(exampleFunction)).toBeUndefined()
})

test('Returns undefined if group is undefined.', () => {
  expect(pickitt(undefined)).toBeUndefined()
})

test('Returns undefined if group is null.', () => {
  expect(pickitt(null)).toBeUndefined()
})
