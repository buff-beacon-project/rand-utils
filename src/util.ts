import { BitStream } from 'bit-buffer'
/**
 * Utility to yield results from provided function using a bitstream.
 * Stops when bitstream runs out of usable bits.
 *
 * @example
 * ```ts
 * // creates an array of 8 bit numbers consuming the bitStream
 * Array.from(unfoldBitstream((bs, i) => bs.readBits(8)))
 * ```
 */
export function* unfoldBitstream<T>(bitstream: BitStream, fn: (bitstream: BitStream, i: number) => T): Generator<T> {
  let i = 0
  try {
    while (true) {
      yield fn(bitstream, i++)
    }
  } catch (e: any) {
    if (e.name !== 'Error' || e.message.substr(0, 10) !== 'Cannot get') {
      throw e
    }
  }
}
