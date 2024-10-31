[**@buff-beacon-project/rand-utils**](../README.md) • **Docs**

***

[@buff-beacon-project/rand-utils](../README.md) / boundedRandom

# Function: boundedRandom()

> **boundedRandom**(`s`, `bitStream`): `number`

Get an unbiased "random" number within the range `[0, s)`. The "random"
values are read from the provided bitStream. The function attempts to read
as few bits as possible to achieve this.

## Parameters

• **s**: `number`

Upper bound (exclusive)

• **bitStream**: `BitStream`

BitStream to read from

## Returns

`number`

## Defined in

[random.ts:11](https://github.com/buff-beacon-project/rand-utils/blob/41c6b86a05d8c0890d037f867203f86cf59240f5/src/random.ts#L11)
