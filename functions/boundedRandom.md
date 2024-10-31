[**@buff-beacon-project/rand-utils v1.0.0**](../README.md) • **Docs**

***

[@buff-beacon-project/rand-utils v1.0.0](../README.md) / boundedRandom

# Function: boundedRandom()

> **boundedRandom**(`s`, `bitStream`): `number`

Get an unbiased "random" number within the range `[0, s)` from
a bitStream.

The "random"
values are read from the provided bitStream.
The function attempts to read
as few bits as possible to achieve this.

## Parameters

• **s**: `number`

Upper bound (exclusive)

• **bitStream**: `BitStream`

BitStream to read from

## Returns

`number`

## Defined in

[random.ts:15](https://github.com/buff-beacon-project/rand-utils/blob/513262d1ea7e1e9191092f47cb72185f50754e7b/src/random.ts#L15)
