import { expect, describe, test } from 'bun:test'
import { randomBytes } from 'crypto'
import { getShuffleSeed, shuffle } from './shuffle'
import { BitStream } from 'bit-buffer'

describe('Shuffling', () => {
  const rand = new BitStream(randomBytes(64))

  test('shuffle seed', async () => {
    const shuffleSeed = getShuffleSeed(rand)
    const result = shuffleSeed.every((v, i) => v < i + 2)
    expect(result).toBe(true)
  })

  // test a standard Fisher-Yates shuffle
  test('shuffle', async () => {
    const arr = ['A','B','C','D','E','F','G','H']
    const shuffleSeed = [0, 2, 2, 0, 5, 1, 5]
    const shuffled = shuffle(arr, shuffleSeed)
    expect(shuffled).toEqual(['G','E','D','C','A','H','B','F'])
  })
})
