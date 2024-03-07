import { BitStream, BitView } from 'bit-buffer';

/**
 * Return an array fully filled with bounded random values appropriate
 * to shuffle a list. The maximum sized list that can be shuffled is
 * the size of the returned seed array + 1
 */
declare const getShuffleSeed: (bitStream: BitStream) => number[];
/**
 * Shuffle provided array **in place** using the given shuffle seed.
 *
 * @see {@link getShuffleSeed}
 */
declare function shuffleSelf(array: any[], shuffleSeed: number[]): any[];
/**
 * Get a shuffled copy of provided array using the given shuffle seed.
 *
 * @see {@link getShuffleSeed}
 */
declare function shuffle(array: any[], shuffleSeed: number[]): any[];

/**
 * Get an unbiased "random" number within the range `[0, s)`. The "random"
 * values are read from the provided bitStream. The function attempts to read
 * as few bits as possible to achieve this.
 *
 * @param s Upper bound (exclusive)
 * @param bitStream BitStream to read from
 */
declare function boundedRandom(s: number, bitStream: BitStream): number;

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
declare function unfoldBitstream<T>(bitstream: BitStream, fn: (bitstream: BitStream, i: number) => T): Generator<T>;

/**
 * Helper class to read bits from pulse value.
 * **Note**: it is recommended to use `BitReader.from()`
 * @see {@link BitReader.from}
 * @param {ArrayBuffer} buffer
 */
declare class BitReader {
    private buffer;
    private _shuffleSeed;
    /**
     * Create a BitReader
     */
    static from(arr: ArrayBuffer | DataView | Buffer): BitReader;
    /**
     * Create a BitReader from an ArrayBuffer
     */
    constructor(buffer: ArrayBuffer);
    /**
     * The shuffleSeed for the data.
     * @see {getShuffleSeed}
     */
    get shuffleSeed(): number[];
    /**
     * The maximum length of list this instance can shuffle.
     *
     * @see {getShuffleSeed}
     */
    get maxShuffleLength(): number;
    /**
     * Get a DataView of the bits.
     */
    dataView(byteOffset: number, byteLength: number): DataView;
    /**
     * Get a BitStream of this data.
     *
     * @see {@link https://github.com/inolen/bit-buffer}
     */
    stream(): BitStream;
    /**
     * Get a BitView of this data.
     *
     * @see {@link https://github.com/inolen/bit-buffer}
     */
    view(): BitView;
    /**
     * Return a shuffled copy of provided array.
     */
    shuffled(array: any[]): any[];
    /**
     * Shuffle the provided array in place, modifying it.
     */
    applyShuffle(array: any[]): void;
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
    unfold(fn: Parameters<typeof unfoldBitstream>[1]): Generator<unknown, any, unknown>;
}

export { BitReader, boundedRandom, getShuffleSeed, shuffle, shuffleSelf, unfoldBitstream };
