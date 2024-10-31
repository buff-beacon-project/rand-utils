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

[random.ts:11](https://github.com/buff-beacon-project/rand-utils/blob/c38a827b147d84a01d6ae6faa071e6ae0f7daca1/src/random.ts#L11)
