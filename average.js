const average = (number)  => {
  let b = number.length,
      c = 0, i;
  for (i = 0; i < b; i++){
    c += Number(number[i]);
  }
  console.log(c/b)
}

average([10, 13, 45, 5]);