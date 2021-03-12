let tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

// for
console.log('-----for------')

for (let i = 0; i < tab.length; ++i ) {
  
  console.log(`${tab[i]}, length: ${tab[i].length}`)
}

// for...of
console.log('\n')
console.log('-----for...of------')

for (const elem of tab) {
  console.log(`${elem}, length: ${elem.length}`)
}

// forEach
console.log('\n')
console.log('-----forEach------')

tab.forEach((elem) => {
   console.log(`${elem}, length: ${elem.length}`)
})