[**@buff-beacon-project/rand-utils**](../index.md) • **Docs**

***

[@buff-beacon-project/rand-utils](../index.md) / boundedRandom

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

[random.ts:11](https://github.com/buff-beacon-project/rand-utils/blob/1183a03fc3f4c77ca80bae970c44be1cf57495d0/src/random.ts#L11)
