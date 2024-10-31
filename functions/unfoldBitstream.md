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

[util.ts:12](https://github.com/buff-beacon-project/rand-utils/blob/c38a827b147d84a01d6ae6faa071e6ae0f7daca1/src/util.ts#L12)
