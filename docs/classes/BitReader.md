[@buff-beacon-project/rand-utils](../README.md) / [Exports](../modules.md) / BitReader

# Class: BitReader

Helper class to read bits from pulse value.
**Note**: it is recommended to use `BitReader.from()`

**`See`**

[BitReader.from](BitReader.md#from)

**`Param`**

## Table of contents

### Constructors

- [constructor](BitReader.md#constructor)

### Accessors

- [maxShuffleLength](BitReader.md#maxshufflelength)
- [shuffleSeed](BitReader.md#shuffleseed)

### Methods

- [applyShuffle](BitReader.md#applyshuffle)
- [dataView](BitReader.md#dataview)
- [shuffled](BitReader.md#shuffled)
- [stream](BitReader.md#stream)
- [unfold](BitReader.md#unfold)
- [view](BitReader.md#view)
- [from](BitReader.md#from)

## Constructors

### constructor

• **new BitReader**(`buffer`): [`BitReader`](BitReader.md)

Create a BitReader from an ArrayBuffer

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `ArrayBuffer` |

#### Returns

[`BitReader`](BitReader.md)

#### Defined in

[bit-reader.ts:27](https://github.com/buff-beacon-project/rand-utils/blob/9ac60d2/src/bit-reader.ts#L27)

## Accessors

### maxShuffleLength

• `get` **maxShuffleLength**(): `number`

The maximum length of list this instance can shuffle.

#### Returns

`number`

**`See`**

#### Defined in

[bit-reader.ts:51](https://github.com/buff-beacon-project/rand-utils/blob/9ac60d2/src/bit-reader.ts#L51)

___

### shuffleSeed

• `get` **shuffleSeed**(): `number`[]

The shuffleSeed for the data.

#### Returns

`number`[]

**`See`**

#### Defined in

[bit-reader.ts:39](https://github.com/buff-beacon-project/rand-utils/blob/9ac60d2/src/bit-reader.ts#L39)

## Methods

### applyShuffle

▸ **applyShuffle**(`array`): `void`

Shuffle the provided array in place, modifying it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any`[] |

#### Returns

`void`

#### Defined in

[bit-reader.ts:90](https://github.com/buff-beacon-project/rand-utils/blob/9ac60d2/src/bit-reader.ts#L90)

___

### dataView

▸ **dataView**(`byteOffset`, `byteLength`): `DataView`

Get a DataView of the bits.

#### Parameters

| Name | Type |
| :------ | :------ |
| `byteOffset` | `number` |
| `byteLength` | `number` |

#### Returns

`DataView`

#### Defined in

[bit-reader.ts:58](https://github.com/buff-beacon-project/rand-utils/blob/9ac60d2/src/bit-reader.ts#L58)

___

### shuffled

▸ **shuffled**(`array`): `any`[]

Return a shuffled copy of provided array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any`[] |

#### Returns

`any`[]

#### Defined in

[bit-reader.ts:83](https://github.com/buff-beacon-project/rand-utils/blob/9ac60d2/src/bit-reader.ts#L83)

___

### stream

▸ **stream**(): `BitStream`

Get a BitStream of this data.

#### Returns

`BitStream`

**`See`**

[https://github.com/inolen/bit-buffer](https://github.com/inolen/bit-buffer)

#### Defined in

[bit-reader.ts:67](https://github.com/buff-beacon-project/rand-utils/blob/9ac60d2/src/bit-reader.ts#L67)

___

### unfold

▸ **unfold**(`fn`): `Generator`\<`unknown`, `any`, `unknown`\>

Use given function to read a BitStream and generate array elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`bitstream`: `BitStream`, `i`: `number`) => `unknown` |

#### Returns

`Generator`\<`unknown`, `any`, `unknown`\>

**`Example`**

```ts
// generate a list of boolean values
const reader = BitReader.from(data)
const toggles = Array.from(reader.unfold((stream) => stream.readBoolean()))
```

**`See`**

[https://github.com/inolen/bit-buffer](https://github.com/inolen/bit-buffer)

#### Defined in

[bit-reader.ts:105](https://github.com/buff-beacon-project/rand-utils/blob/9ac60d2/src/bit-reader.ts#L105)

___

### view

▸ **view**(): `BitView`

Get a BitView of this data.

#### Returns

`BitView`

**`See`**

[https://github.com/inolen/bit-buffer](https://github.com/inolen/bit-buffer)

#### Defined in

[bit-reader.ts:76](https://github.com/buff-beacon-project/rand-utils/blob/9ac60d2/src/bit-reader.ts#L76)

___

### from

▸ **from**(`arr`): [`BitReader`](BitReader.md)

Create a BitReader

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `ArrayBuffer` \| `DataView` \| `Buffer` |

#### Returns

[`BitReader`](BitReader.md)

#### Defined in

[bit-reader.ts:18](https://github.com/buff-beacon-project/rand-utils/blob/9ac60d2/src/bit-reader.ts#L18)
