let data = require('./data.json')
console.log(data.student[0].nama)
console.log(data.student[0].alamat + '\n')

console.log(data.student[1].nama)
console.log(data.student[1].hobby)

let {student, hobby} = require('./data.json')
console.log(student)