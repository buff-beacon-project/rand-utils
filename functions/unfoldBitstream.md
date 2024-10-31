[**@buff-beacon-project/rand-utils v1.0.0**](../README.md) • **Docs**

***

[@buff-beacon-project/rand-utils v1.0.0](../README.md) / unfoldBitstream

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

[util.ts:12](https://github.com/buff-beacon-project/rand-utils/blob/513262d1ea7e1e9191092f47cb72185f50754e7b/src/util.ts#L12)
