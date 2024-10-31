[**@buff-beacon-project/rand-utils v1.0.0**](../README.md) • **Docs**

***

[@buff-beacon-project/rand-utils v1.0.0](../README.md) / BitReader

# Class: BitReader

Helper class to read bits from an ArrayBuffer.

**Note**: it is recommended to use `BitReader.from()`

## See

[BitReader.from](BitReader.md#from)

## Param

## Constructors

### new BitReader()

> **new BitReader**(`buffer`): [`BitReader`](BitReader.md)

Create a BitReader from an ArrayBuffer

#### Parameters

• **buffer**: `ArrayBuffer`

#### Returns

[`BitReader`](BitReader.md)

#### Defined in

[bit-reader.ts:28](https://github.com/buff-beacon-project/rand-utils/blob/513262d1ea7e1e9191092f47cb72185f50754e7b/src/bit-reader.ts#L28)

## Accessors

### maxShuffleLength

> `get` **maxShuffleLength**(): `number`

The maximum length of list this instance can shuffle.

#### See

#### Returns

`number`

#### Defined in

[bit-reader.ts:52](https://github.com/buff-beacon-project/rand-utils/blob/513262d1ea7e1e9191092f47cb72185f50754e7b/src/bit-reader.ts#L52)

***

### shuffleSeed

> `get` **shuffleSeed**(): `number`[]

The shuffleSeed for the data.

#### See

#### Returns

`number`[]

#### Defined in

[bit-reader.ts:40](https://github.com/buff-beacon-project/rand-utils/blob/513262d1ea7e1e9191092f47cb72185f50754e7b/src/bit-reader.ts#L40)

## Methods

### applyShuffle()

> **applyShuffle**(`array`): `void`

Shuffle the provided array in place, modifying it.

#### Parameters

• **array**: `any`[]

#### Returns

`void`

#### Defined in

[bit-reader.ts:91](https://github.com/buff-beacon-project/rand-utils/blob/513262d1ea7e1e9191092f47cb72185f50754e7b/src/bit-reader.ts#L91)

***

### dataView()

> **dataView**(`byteOffset`, `byteLength`): `DataView`

Get a DataView of the bits.

#### Parameters

• **byteOffset**: `number`

• **byteLength**: `number`

#### Returns

`DataView`

#### Defined in

[bit-reader.ts:59](https://github.com/buff-beacon-project/rand-utils/blob/513262d1ea7e1e9191092f47cb72185f50754e7b/src/bit-reader.ts#L59)

***

### shuffled()

> **shuffled**(`array`): `any`[]

Return a shuffled copy of provided array.

#### Parameters

• **array**: `any`[]

#### Returns

`any`[]

#### Defined in

[bit-reader.ts:84](https://github.com/buff-beacon-project/rand-utils/blob/513262d1ea7e1e9191092f47cb72185f50754e7b/src/bit-reader.ts#L84)

***

### stream()

> **stream**(): `BitStream`

Get a BitStream of this data.

#### Returns

`BitStream`

#### See

[https://github.com/inolen/bit-buffer](https://github.com/inolen/bit-buffer)

#### Defined in

[bit-reader.ts:68](https://github.com/buff-beacon-project/rand-utils/blob/513262d1ea7e1e9191092f47cb72185f50754e7b/src/bit-reader.ts#L68)

***

### unfold()

> **unfold**(`fn`): `Generator`\<`unknown`, `any`, `unknown`\>

Use given function to read a BitStream and generate array elements.

#### Parameters

• **fn**

#### Returns

`Generator`\<`unknown`, `any`, `unknown`\>

#### Example

```ts
// generate a list of boolean values
const reader = BitReader.from(data)
const toggles = Array.from(reader.unfold((stream) => stream.readBoolean()))
```

#### See

[https://github.com/inolen/bit-buffer](https://github.com/inolen/bit-buffer)

#### Defined in

[bit-reader.ts:106](https://github.com/buff-beacon-project/rand-utils/blob/513262d1ea7e1e9191092f47cb72185f50754e7b/src/bit-reader.ts#L106)

***

### view()

> **view**(): `BitView`

Get a BitView of this data.

#### Returns

`BitView`

#### See

[https://github.com/inolen/bit-buffer](https://github.com/inolen/bit-buffer)

#### Defined in

[bit-reader.ts:77](https://github.com/buff-beacon-project/rand-utils/blob/513262d1ea7e1e9191092f47cb72185f50754e7b/src/bit-reader.ts#L77)

***

### from()

> `static` **from**(`arr`): [`BitReader`](BitReader.md)

Create a BitReader

#### Parameters

• **arr**: `ArrayBuffer` \| `DataView` \| `Buffer` \| `ArrayBufferView`

#### Returns

[`BitReader`](BitReader.md)

#### Defined in

[bit-reader.ts:19](https://github.com/buff-beacon-project/rand-utils/blob/513262d1ea7e1e9191092f47cb72185f50754e7b/src/bit-reader.ts#L19)
