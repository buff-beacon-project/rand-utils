import { expect, describe, test } from 'bun:test'
import { BitReader } from './bit-reader'
import { randomBytes } from 'crypto'

describe('BitReader', () => {
  const rand = randomBytes(64)

  test('bitreader unfold', async () => {
    const reader = BitReader.from(rand)

    const directions = ['up', 'down', 'left', 'right']
    const randomDirections = reader.unfold((stream) =>
      directions[stream.readBits(2, false)]
    )
    const list = Array.from(randomDirections)

    expect(list).toHaveLength(64 * 8 / 2)
  })

  test('bitreader shuffle', async () => {
    const reader = BitReader.from(rand)
    const arr = [0, 1, 2, 3, 4, 5, 6, 7]

    const shuffled = reader.shuffled(arr)
    expect(shuffled).not.toEqual(arr)
    reader.applyShuffle(arr)
    expect(arr).not.toEqual([0, 1, 2, 3, 4, 5, 6, 7])
  })

  test('create from Uint8Array', async () => {
    const reader = BitReader.from(new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7]))
    expect(reader).toBeInstanceOf(BitReader)
  })
})
