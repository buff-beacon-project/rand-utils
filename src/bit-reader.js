import { iterBitStream } from './util.js'
import { getShuffleSeed, shuffle, shuffleSelf } from './shuffle.js'
import { BitStream, BitView } from 'bit-buffer'

/**
 * Helper class to read bits from pulse value.
 * **Note**: it is recommended to use `BitReader.from()`
 * @see {@link BitReader.from}
 * @param {ArrayBuffer} buffer
 */
export class BitReader {
  /**
   * Create a BitReader from a TypedArray or ArrayBuffer
   * @returns {BitReader}
   */
  static from(arr){
    if (arr instanceof ArrayBuffer){
      return new BitReader(arr)
    } else if (arr.buffer){
      return new BitReader(arr.buffer)
    } else {
      throw new Error('Unsupported format')
    }
  }

  constructor(buffer) {
    if (!(buffer instanceof ArrayBuffer)) {
      throw new Error('Value passed to constructor is not an ArrayBuffer')
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
   * @see {getShuffleSeed}
   */
  get maxShuffleLength() {
    return this.shuffleSeed.length + 1
  }

  /**
   * Get a DataView of the bits.
   * @param {Number} byteOffset
   * @param {Number} byteLength
   * @returns {DataView}
   */
  dataView(byteOffset, byteLength) {
    return new DataView(this.buffer, byteOffset, byteLength)
  }

  /**
   * Get a BitStream of this data.
   * @see {@link https://github.com/inolen/bit-buffer}
   * @returns {BitStream}
   */
  stream() {
    return new BitStream(this.buffer)
  }

  /**
   * Get a BitView of this data.
   * @see {@link https://github.com/inolen/bit-buffer}
   * @returns {BitView}
   */
  view() {
    return new BitView(this.buffer)
  }

  /**
   * Return a shuffled copy of provided array.
   * @param {Array} array
   * @returns {Array}
   */
  shuffled(array) {
    return shuffle(array, this.shuffleSeed)
  }

  /**
   * Shuffle the provided array in place, modifying it.
   * @param {Array} array
   * @returns {Array}
   */
  applyShuffle(array) {
    shuffleSelf(array, this.shuffleSeed)
  }

  /**
   * Use given function to read a BitStream and generate array elements.
   * @example
   * // generate a list of boolean values
   * const reader = BitReader.from(pulse)
   * const toggles = reader.unfold((stream) => stream.readBoolean())
   * @see {@link https://github.com/inolen/bit-buffer}
   * @param {UnfoldCallback} fn
   * @param {class} cls=Array
   * @returns {ArrayLike}
   */
  unfold(fn, cls = Array) {
    const stream = this.stream()
    return cls.from(iterBitStream((i) => fn(stream, i)))
  }
  /**
   * @name UnfoldCallback
   * @param {BitStream} stream
   * @param {Number} index
   * @returns {any}
   */
}
