[**@buff-beacon-project/rand-utils**](../index.md) • **Docs**

***

[@buff-beacon-project/rand-utils](../index.md) / BitReader

# Class: BitReader

Helper class to read bits from pulse value.
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

[bit-reader.ts:27](https://github.com/buff-beacon-project/rand-utils/blob/1183a03fc3f4c77ca80bae970c44be1cf57495d0/src/bit-reader.ts#L27)

## Accessors

### maxShuffleLength

> `get` **maxShuffleLength**(): `number`

The maximum length of list this instance can shuffle.

#### See

#### Returns

`number`

#### Defined in

[bit-reader.ts:51](https://github.com/buff-beacon-project/rand-utils/blob/1183a03fc3f4c77ca80bae970c44be1cf57495d0/src/bit-reader.ts#L51)

***

### shuffleSeed

> `get` **shuffleSeed**(): `number`[]

The shuffleSeed for the data.

#### See

#### Returns

`number`[]

#### Defined in

[bit-reader.ts:39](https://github.com/buff-beacon-project/rand-utils/blob/1183a03fc3f4c77ca80bae970c44be1cf57495d0/src/bit-reader.ts#L39)

## Methods

### applyShuffle()

> **applyShuffle**(`array`): `void`

Shuffle the provided array in place, modifying it.

#### Parameters

• **array**: `any`[]

#### Returns

`void`

#### Defined in

[bit-reader.ts:90](https://github.com/buff-beacon-project/rand-utils/blob/1183a03fc3f4c77ca80bae970c44be1cf57495d0/src/bit-reader.ts#L90)

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

[bit-reader.ts:58](https://github.com/buff-beacon-project/rand-utils/blob/1183a03fc3f4c77ca80bae970c44be1cf57495d0/src/bit-reader.ts#L58)

***

### shuffled()

> **shuffled**(`array`): `any`[]

Return a shuffled copy of provided array.

#### Parameters

• **array**: `any`[]

#### Returns

`any`[]

#### Defined in

[bit-reader.ts:83](https://github.com/buff-beacon-project/rand-utils/blob/1183a03fc3f4c77ca80bae970c44be1cf57495d0/src/bit-reader.ts#L83)

***

### stream()

> **stream**(): `BitStream`

Get a BitStream of this data.

#### Returns

`BitStream`

#### See

[https://github.com/inolen/bit-buffer](https://github.com/inolen/bit-buffer)

#### Defined in

[bit-reader.ts:67](https://github.com/buff-beacon-project/rand-utils/blob/1183a03fc3f4c77ca80bae970c44be1cf57495d0/src/bit-reader.ts#L67)

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

[bit-reader.ts:105](https://github.com/buff-beacon-project/rand-utils/blob/1183a03fc3f4c77ca80bae970c44be1cf57495d0/src/bit-reader.ts#L105)

***

### view()

> **view**(): `BitView`

Get a BitView of this data.

#### Returns

`BitView`

#### See

[https://github.com/inolen/bit-buffer](https://github.com/inolen/bit-buffer)

#### Defined in

[bit-reader.ts:76](https://github.com/buff-beacon-project/rand-utils/blob/1183a03fc3f4c77ca80bae970c44be1cf57495d0/src/bit-reader.ts#L76)

***

### from()

> `static` **from**(`arr`): [`BitReader`](BitReader.md)

Create a BitReader

#### Parameters

• **arr**: `ArrayBuffer` \| `DataView` \| `Buffer` \| `ArrayBufferView`

#### Returns

[`BitReader`](BitReader.md)

#### Defined in

[bit-reader.ts:18](https://github.com/buff-beacon-project/rand-utils/blob/1183a03fc3f4c77ca80bae970c44be1cf57495d0/src/bit-reader.ts#L18)
