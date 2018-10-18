const { pickitt } = require('../src/pickitt')
const exampleArray = ['elem1', 'elem2', 'elem3']
const emptyArray = []
const object = { one: 1, two: 2 }
const nonEmptyString = 'Example'
const emptyString = ''
const number = 100
const booleanTrue = true
const booleanFalse = false
const exampleFunction = () => {
  return 1
}

describe('Type Tests for pickitt().', () => {
  describe('Group = Array', () => {
    test('Gets an item from an example array.', () => {
      expect(exampleArray.includes(pickitt(exampleArray))).toEqual(true)
    })

    test('Returns undefined if group is an array with length 0.', () => {
      expect(pickitt(emptyArray)).toBeUndefined()
    })
  })

  describe('Group = Object', () => {
    test('Throws an error with "object" if group is an object.', () => {
      expect(() => {
        pickitt(object)
      }).toThrow()
    })
  })

  describe('Group = String', () => {
    test('Throws an error with "string" if group is a string.', () => {
      expect(() => {
        pickitt(nonEmptyString)
      }).toThrow()
    })

    test('Throws an error with "string" if group is an empty string.', () => {
      expect(() => {
        pickitt(emptyString)
      }).toThrow()
    })
  })

  describe('Group = Number', () => {
    test('Throws an error with "number" if group is a number.', () => {
      expect(() => {
        pickitt(number)
      }).toThrow()
    })
  })

  describe('Group = Boolean', () => {
    test('Throws an error with "boolean" if group is a boolean = true.', () => {
      expect(() => {
        pickitt(booleanTrue)
      }).toThrow()
    })

    test('Throws an error with "boolean" if group is a boolean = false.', () => {
      expect(() => {
        pickitt(booleanFalse)
      }).toThrow()
    })
  })

  describe('Group = Function', () => {
    test('Throws an error with "function" if group is a function', () => {
      expect(() => {
        pickitt(exampleFunction)
      }).toThrow()
    })
  })

  describe('Group = Other Falsy Types', () => {
    test('Throws an error with "undefined" if group is undefined.', () => {
      expect(() => {
        pickitt(undefined)
      }).toThrow()
    })

    test('Throws an error with "null" if group is null.', () => {
      expect(() => {
        pickitt(null)
      }).toThrow()
    })
  })
})
