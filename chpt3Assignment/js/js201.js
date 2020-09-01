var year = prompt("År")
var leapYear = (year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0);
console.log(leapYear)
