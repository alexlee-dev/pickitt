import { posOrNeg, randItem } from '../src/pickitt'

describe('posOrNeg(', () => {
  test('Should return a positive or negative 1.', () => {
    const val = posOrNeg()
    expect(val === -1 || val === 1).toBeTruthy()
  })
})

describe('randItem()', () => {
  test('Should return a random item from the group.', () => {
    const group = [1, 2, 3]
    const item = randItem(group)
    expect(item === 1 || item === 2 || item === 3).toBeTruthy()
  })
  test('Should throw an error if group is not an array.', () => {
    expect(() => randItem(50)).toThrow()
  })
})
