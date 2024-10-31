**@buff-beacon-project/rand-utils** • **Docs**

***

# @buff-beacon-project/rand-utils

## Example

```ts
import { BitReader } from '@buff-beacon-project/rand-utils'
import { randomBytes } from 'crypto'

const rand = randomBytes(64)
const reader = BitReader.from(rand)
// random directions
const directions = ['up', 'down', 'left', 'right']
const randomDirections = reader.unfold((stream) =>
  directions[stream.readBits(2, false)]
)
const list = Array.from(randomDirections)
// shuffled array
const arr = [0, 1, 2, 3, 4, 5, 6, 7]
const shuffled = reader.shuffled(arr)
```

## Classes

- [BitReader](classes/BitReader.md)

## Functions

- [boundedRandom](functions/boundedRandom.md)
- [getShuffleSeed](functions/getShuffleSeed.md)
- [shuffle](functions/shuffle.md)
- [shuffleSelf](functions/shuffleSelf.md)
- [unfoldBitstream](functions/unfoldBitstream.md)
