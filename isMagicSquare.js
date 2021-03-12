// in progress...

const square = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
]

let sum = 0

const isMagicSquare = (data) => {
for (let i = 0; i < data.length; ++i) {
  for (let j = 0; j < data[i].length; ++j) {
      sum += data[i][j]
  }
}
}

isMagicSquare(square)

console.log(`sum = ${sum}`)