[@buff-beacon-project/rand-utils](README.md) / Exports

# @buff-beacon-project/rand-utils

## Table of contents

### Classes

- [BitReader](classes/BitReader.md)

### Functions

- [boundedRandom](modules.md#boundedrandom)
- [getShuffleSeed](modules.md#getshuffleseed)
- [shuffle](modules.md#shuffle)
- [shuffleSelf](modules.md#shuffleself)
- [unfoldBitstream](modules.md#unfoldbitstream)

## Functions

### boundedRandom

▸ **boundedRandom**(`s`, `bitStream`): `number`

Get an unbiased "random" number within the range `[0, s)`. The "random"
values are read from the provided bitStream. The function attempts to read
as few bits as possible to achieve this.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `s` | `number` | Upper bound (exclusive) |
| `bitStream` | `BitStream` | BitStream to read from |

#### Returns

`number`

#### Defined in

random.ts:11

___

### getShuffleSeed

▸ **getShuffleSeed**(`bitStream`): `number`[]

Return an array fully filled with bounded random values appropriate
to shuffle a list. The maximum sized list that can be shuffled is
the size of the returned seed array + 1

#### Parameters

| Name | Type |
| :------ | :------ |
| `bitStream` | `BitStream` |

#### Returns

`number`[]

#### Defined in

shuffle.ts:10

___

### shuffle

▸ **shuffle**(`array`, `shuffleSeed`): `any`[]

Get a shuffled copy of provided array using the given shuffle seed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any`[] |
| `shuffleSeed` | `number`[] |

#### Returns

`any`[]

**`See`**

[getShuffleSeed](modules.md#getshuffleseed)

#### Defined in

shuffle.ts:45

___

### shuffleSelf

▸ **shuffleSelf**(`array`, `shuffleSeed`): `any`[]

Shuffle provided array **in place** using the given shuffle seed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any`[] |
| `shuffleSeed` | `number`[] |

#### Returns

`any`[]

**`See`**

[getShuffleSeed](modules.md#getshuffleseed)

#### Defined in

shuffle.ts:26

___

### unfoldBitstream

▸ **unfoldBitstream**\<`T`\>(`bitstream`, `fn`): `Generator`\<`T`\>

Utility to yield results from provided function using a bitstream.
Stops when bitstream runs out of usable bits.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `bitstream` | `BitStream` |
| `fn` | (`bitstream`: `BitStream`, `i`: `number`) => `T` |

#### Returns

`Generator`\<`T`\>

**`Example`**

```ts
// creates an array of 8 bit numbers consuming the bitStream
Array.from(unfoldBitstream((bs, i) => bs.readBits(8)))
```

#### Defined in

util.ts:12
