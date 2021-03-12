const numberPyramid = (number) => {
let str = ''
    for (let i = 1; i <= number; ++i) {
      const character = i + 0
      str += character.toString().repeat(i)
      if (i !== number) {
        str += '\n'
      }
    }

  return console.log(str)
}

numberPyramid(8)