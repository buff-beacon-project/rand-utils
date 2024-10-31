/**
 * @packageDocumentation
 *
 * # Rand Utils
 *
 * rand-utils is a collection of utilities for working with
 * pre-generated random bits. This is useful for working with
 * public randomness beacon data or any other sources of random bits.
 *
 * All methods in this library are deterministic and based on the
 * input bits.
 *
 * ## Installation
 *
 * ```bash
 * npm install @buff-beacon-project/rand-utils
 * ```
 *
 * @example
 * ```ts
 * import { BitReader } from '@buff-beacon-project/rand-utils'
 * import { randomBytes } from 'crypto'
 *
 * // create some random bits
 * const rand = randomBytes(64)
 * // create a bit reader
 * const reader = BitReader.from(rand)
 *
 * // random directions
 * const directions = ['up', 'down', 'left', 'right']
 * const randomDirections = reader.unfold((stream) =>
 *   directions[stream.readBits(2, false)]
 * )
 * const list = Array.from(randomDirections)
 * // => [ 'down', 'right', 'up', 'left', 'down', 'right', 'up', 'left', ... ]
 *
 * // shuffle an array
 * const arr = [0, 1, 2, 3, 4, 5, 6, 7]
 * const shuffled = reader.shuffled(arr)
 * // => [ 3, 0, 7, 4, 1, 6, 2, 5 ]
 * ```
 */

export * from './shuffle.js'
export * from './random.js'
export * from './bit-reader.js'
export * from './util.js'

