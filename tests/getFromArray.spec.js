const { pickitt } = require('../index')
require('jest-matcher-one-of')

const exampleArray = ['elem1', 'elem2', 'elem3']

test('Gets an item from an example array.', () => {
  expect(pickitt(exampleArray)).toBeOneOf(['elem1', 'elem2', 'elem3'])
})
