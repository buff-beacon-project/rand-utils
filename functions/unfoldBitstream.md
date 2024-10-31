[**@buff-beacon-project/rand-utils**](../index.md) • **Docs**

***

[@buff-beacon-project/rand-utils](../index.md) / unfoldBitstream

# Function: unfoldBitstream()

> **unfoldBitstream**\<`T`\>(`bitstream`, `fn`): `Generator`\<`T`\>

Utility to yield results from provided function using a bitstream.
Stops when bitstream runs out of usable bits.

## Type Parameters

• **T**

## Parameters

• **bitstream**: `BitStream`

• **fn**

## Returns

`Generator`\<`T`\>

## Example

```ts
// creates an array of 8 bit numbers consuming the bitStream
Array.from(unfoldBitstream((bs, i) => bs.readBits(8)))
```

## Defined in

[util.ts:12](https://github.com/buff-beacon-project/rand-utils/blob/1183a03fc3f4c77ca80bae970c44be1cf57495d0/src/util.ts#L12)
