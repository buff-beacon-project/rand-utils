[**@buff-beacon-project/rand-utils v1.0.0**](../README.md) • **Docs**

***

[@buff-beacon-project/rand-utils v1.0.0](../README.md) / getShuffleSeed

# Function: getShuffleSeed()

> **getShuffleSeed**(`bitStream`): `number`[]

Return an array fully filled with bounded random values appropriate
to shuffle a list.

Intended to be used with [shuffleSelf](shuffleSelf.md) or [shuffle](shuffle.md).
The maximum sized list that can be shuffled is
the size of the returned seed array + 1

## Parameters

• **bitStream**: `BitStream`

## Returns

`number`[]

## Defined in

[shuffle.ts:13](https://github.com/buff-beacon-project/rand-utils/blob/513262d1ea7e1e9191092f47cb72185f50754e7b/src/shuffle.ts#L13)
