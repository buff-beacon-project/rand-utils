[**@buff-beacon-project/rand-utils**](../README.md) • **Docs**

***

[@buff-beacon-project/rand-utils](../README.md) / unfoldBitstream

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

[util.ts:12](https://github.com/buff-beacon-project/rand-utils/blob/41c6b86a05d8c0890d037f867203f86cf59240f5/src/util.ts#L12)
