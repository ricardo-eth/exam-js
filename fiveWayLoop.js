let tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

console.log('-----do-while------')

const doWhileFunction = (data) => {
    let i = 0
   do {
      console.log(`${tab[i]}, length: ${tab[i].length}`)
      ++i
    } while (i < data.length)
  }

doWhileFunction(tab)


console.log('\n')
console.log('-----while------')

const whileFunction = (data) => {
    let i = 0
    while (i < data.length) {
        console.log(`${tab[i]}, length: ${tab[i].length}`)
      i++
    }
  }

whileFunction(tab)
