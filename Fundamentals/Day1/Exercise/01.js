// Case. Create a Program to Hide Last 3 digit of Phone Number
// Data : 628133978973 (Number)
// Output : 628133978xxx (String)

let number = 628133978973
number = number.toString()
console.log(number.slice(0, number.length-3) + 'xxx')

