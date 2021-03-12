const list = [99, 100, 101, 1]

const podium = (number) => {

  number.sort((a, b) => a < b ? 1 : a > b ? -1 : 0);
  
  console.log(`1st: ${number[0]}\n2nd: ${number[1]}\n3rd: ${number[2]}` );  
}

podium(list)

