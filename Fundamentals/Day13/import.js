// IMPORT DEFAULT
// let name = require('./export')
// console.log(name)

// IMPORT NAME
// let all = require('./export')
// console.log('Cara 1 :')
// console.log(all)

// let {name, hobby} = require('./export')
// console.log(`Cara 2 : ${name} , ${hobby}`)

// let allIn = require('./export')
// console.log(`Cara 3 : ${allIn.name} , ${allIn.hobby}`)

// IMPORT NAME FUNCTION
let {Print, Output} = require('./export')
console.log(Print('Aboy'))
Output()