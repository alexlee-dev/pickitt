const { pickitt } = require('../index')
require('jest-matcher-one-of')

const exampleArray = ['elem1', 'elem2', 'elem3']
const emptyArray = []

test('Gets an item from an example array.', () => {
  expect(pickitt(exampleArray)).toBeOneOf(['elem1', 'elem2', 'elem3'])
})

test('Returns undefined for an empty array.', () => {
  expect(pickitt(emptyArray)).toBeUndefined()
})
