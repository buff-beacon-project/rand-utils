import { inspect } from 'util'
import { randomBytes } from 'crypto'
import { BitReader } from '../src/index.js'

const log = o => console.log(inspect(o, { showHidden: false, depth: null, colors: true }))

const arr = Array(60).fill(0).map((x, i) => i)
const rand = randomBytes(64)

const reader = BitReader.from(rand)
log(reader.shuffleSeed, reader.shuffleSeed.every((v, i) => v < i + 2))
const mixed = reader.shuffled(arr)
log(mixed)

const directions = ['up', 'down', 'left', 'right']
const randomDirections = reader.unfold((stream) =>
  directions[stream.readBits(2, false)]
)
log(randomDirections, randomDirections.length)
