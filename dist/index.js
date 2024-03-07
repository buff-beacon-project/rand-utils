// src/util.ts
function* unfoldBitstream(bitstream, fn) {
  let i = 0;
  try {
    while (true) {
      yield fn(bitstream, i++);
    }
  } catch (e) {
    if (e.name !== "Error" || e.message.substr(0, 10) !== "Cannot get") {
      throw e;
    }
  }
}

// src/random.ts
function boundedRandom(s, bitStream) {
  if (s < 0 || s % 1 !== 0) {
    throw new Error("Value must be a positive integer >= 2");
  }
  if (s < 2) {
    return 0;
  }
  const log2s = Math.log2(s);
  const nbits = Math.ceil(log2s);
  const max = 1 << nbits;
  if (!Number.isSafeInteger(max * (s - 1))) {
    throw new Error("Range is too high to evaluate");
  }
  if (log2s % 1 === 0) {
    return bitStream.readBits(nbits, false);
  }
  let x = bitStream.readBits(nbits, false);
  let m = x * s;
  let l = m % max;
  if (l < s) {
    const threshold = (max - s) % s;
    while (l < threshold) {
      x = bitStream.readBits(nbits, false);
      m = x * s;
      l = m % max;
    }
  }
  return m >> nbits;
}

// src/shuffle.ts
var getShuffleSeed = (bitStream) => {
  return Array.from(
    unfoldBitstream(bitStream, (bs, s) => boundedRandom(s + 2, bs))
  );
};
var arraySwap = (arr, i, j) => {
  if (i === j) {
    return;
  }
  [arr[i], arr[j]] = [arr[j], arr[i]];
};
function shuffleSelf(array, shuffleSeed) {
  const size = array.length;
  if (!size) {
    return array;
  }
  if (size > shuffleSeed.length + 1) {
    throw new Error(`Insufficient sized seed to shuffle this array. Max length: ${shuffleSeed.length + 1}`);
  }
  for (let i = size; i > 1; i--) {
    const r = shuffleSeed[i - 2];
    arraySwap(array, i - 1, r);
  }
  return array;
}
function shuffle(array, shuffleSeed) {
  return shuffleSelf(array.slice(), shuffleSeed);
}

// src/bit-reader.ts
import { BitStream, BitView } from "bit-buffer";
var BitReader = class _BitReader {
  buffer;
  _shuffleSeed;
  /**
   * Create a BitReader
   */
  static from(arr) {
    const buffer = arr instanceof ArrayBuffer ? arr : arr.buffer;
    const a = new DataView(buffer);
    return new _BitReader(a.buffer);
  }
  /**
   * Create a BitReader from an ArrayBuffer
   */
  constructor(buffer) {
    if (!buffer || !(buffer instanceof ArrayBuffer)) {
      throw new Error("Buffer is required");
    }
    this.buffer = buffer;
    this._shuffleSeed = null;
  }
  /**
   * The shuffleSeed for the data.
   * @see {getShuffleSeed}
   */
  get shuffleSeed() {
    if (!this._shuffleSeed) {
      this._shuffleSeed = getShuffleSeed(this.stream());
    }
    return this._shuffleSeed;
  }
  /**
   * The maximum length of list this instance can shuffle.
   *
   * @see {getShuffleSeed}
   */
  get maxShuffleLength() {
    return this.shuffleSeed.length + 1;
  }
  /**
   * Get a DataView of the bits.
   */
  dataView(byteOffset, byteLength) {
    return new DataView(this.buffer, byteOffset, byteLength);
  }
  /**
   * Get a BitStream of this data.
   *
   * @see {@link https://github.com/inolen/bit-buffer}
   */
  stream() {
    return new BitStream(this.buffer);
  }
  /**
   * Get a BitView of this data.
   *
   * @see {@link https://github.com/inolen/bit-buffer}
   */
  view() {
    return new BitView(this.buffer);
  }
  /**
   * Return a shuffled copy of provided array.
   */
  shuffled(array) {
    return shuffle(array, this.shuffleSeed);
  }
  /**
   * Shuffle the provided array in place, modifying it.
   */
  applyShuffle(array) {
    shuffleSelf(array, this.shuffleSeed);
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
  unfold(fn) {
    const stream = this.stream();
    return unfoldBitstream(stream, fn);
  }
};
export {
  BitReader,
  boundedRandom,
  getShuffleSeed,
  shuffle,
  shuffleSelf,
  unfoldBitstream
};
