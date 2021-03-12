const isLeapYear =(data) => {
  if ((data%4==0) && ((data%100!=0) || (data%400==0))) {
    return true
  }
  else {
    return false
  }
}

isLeapYear(2021)