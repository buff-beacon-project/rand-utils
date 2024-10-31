import { unfoldBitstream } from './util'
import { getShuffleSeed, shuffle, shuffleSelf } from './shuffle'
import { BitStream, BitView } from 'bit-buffer'

/**
 * Helper class to read bits from an ArrayBuffer.
 *
 * **Note**: it is recommended to use `BitReader.from()`
 * @see {@link BitReader.from}
 * @param {ArrayBuffer} buffer
 */
export class BitReader {
  private buffer: ArrayBuffer
  private _shuffleSeed: number[] | null

  /**
   * Create a BitReader
   */
  static from(arr: ArrayBuffer | DataView | Buffer | ArrayBufferView){
    const buffer = arr instanceof ArrayBuffer ? arr : arr.buffer
    const a = new DataView(buffer)
    return new BitReader(a.buffer)
  }

  /**
   * Create a BitReader from an ArrayBuffer
   */
  constructor(buffer: ArrayBuffer) {
    if (!buffer || !(buffer instanceof ArrayBuffer)) {
      throw new Error('Buffer is required')
    }
    this.buffer = buffer
    this._shuffleSeed = null
  }

  /**
   * The shuffleSeed for the data.
   * @see {getShuffleSeed}
   */
  get shuffleSeed() {
    if (!this._shuffleSeed) {
      this._shuffleSeed = getShuffleSeed(this.stream())
    }
    return this._shuffleSeed
  }

  /**
   * The maximum length of list this instance can shuffle.
   *
   * @see {getShuffleSeed}
   */
  get maxShuffleLength() {
    return this.shuffleSeed.length + 1
  }

  /**
   * Get a DataView of the bits.
   */
  dataView(byteOffset: number, byteLength: number) {
    return new DataView(this.buffer, byteOffset, byteLength)
  }

  /**
   * Get a BitStream of this data.
   *
   * @see {@link https://github.com/inolen/bit-buffer}
   */
  stream() {
    return new BitStream(this.buffer)
  }

  /**
   * Get a BitView of this data.
   *
   * @see {@link https://github.com/inolen/bit-buffer}
   */
  view() {
    return new BitView(this.buffer)
  }

  /**
   * Return a shuffled copy of provided array.
   */
  shuffled(array: any[]) {
    return shuffle(array, this.shuffleSeed)
  }

  /**
   * Shuffle the provided array in place, modifying it.
   */
  applyShuffle(array: any[]) {
    shuffleSelf(array, this.shuffleSeed)
  }

  /**
   * Use given function to read a BitStream and generate array elements.
   *
   * @example
   * ```ts
   * // generate a list of boolean values
   * const reader = BitReader.from(data)
   * const toggles = Array.from(reader.unfold((stream) => stream.readBoolean()))
   * ```
   * @see {@link https://github.com/inolen/bit-buffer}
   */
  unfold(fn: Parameters<typeof unfoldBitstream>[1]) {
    const stream = this.stream()
    return unfoldBitstream(stream, fn)
  }
}
