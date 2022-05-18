/**
 * Utility to yield results from provided function using a bitstream.
 * Stops when bitstream runs out of usable bits.
 * @example
 * // creates an array of 8 bit numbers consuming the bitStream
 * Array.from(iterBitStream(() => bitStream.readBits(8)))
 * @generator
 * @param {Function} fn
 * @yields {any}
 */
export function* iterBitStream(fn) {
  let i = 0
  try {
    while (true) {
      yield fn(i++)
    }
  } catch (e) {
    if (e.name !== 'Error' || e.message.substr(0, 10) !== 'Cannot get') {
      throw e
    }
  }
}
