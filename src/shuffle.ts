import { unfoldBitstream } from './util'
import { boundedRandom } from './random'
import { BitStream } from 'bit-buffer'

/**
 * Return an array fully filled with bounded random values appropriate
 * to shuffle a list. The maximum sized list that can be shuffled is
 * the size of the returned seed array + 1
 */
export const getShuffleSeed = (bitStream: BitStream) => {
  return Array.from(
    unfoldBitstream(bitStream, (bs, s) => boundedRandom(s + 2, bs))
  )
}

const arraySwap = (arr: any[], i: number, j: number) => {
  if (i === j) { return }
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

/**
 * Shuffle provided array **in place** using the given shuffle seed.
 *
 * @see {@link getShuffleSeed}
 */
export function shuffleSelf(array: any[], shuffleSeed: number[]) {
  const size = array.length
  if (!size) { return array }
  if (size > shuffleSeed.length + 1) {
    throw new Error(`Insufficient sized seed to shuffle this array. Max length: ${shuffleSeed.length + 1}`)
  }
  for (let i = size; i > 1; i--) {
    const r = shuffleSeed[i - 2]
    // swap values at i-1 and r
    arraySwap(array, i - 1, r)
  }
  return array
}

/**
 * Get a shuffled copy of provided array using the given shuffle seed.
 *
 * @see {@link getShuffleSeed}
 */
export function shuffle(array: any[], shuffleSeed: number[]) {
  return shuffleSelf(array.slice(), shuffleSeed)
}
