# rand-utils

A set of utilities to make it easier to use random bit buffers.

Made for the [CURBy Project](https://random.colorado.edu)

## Installation

```sh
npm install @buff-beacon-project/rand-utils
```

## Example

```js
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

## Documentation

[API Documentation](https://curby.gitbook.io/rand-utils/)
