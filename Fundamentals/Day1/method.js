// Method
// Shortcut Untuk Memanipulasi Data

// -String
// Slice: Memotong
let text ='Hello, World!'
console.log(text.slice(0,5)) // text.Slice(indexStart, indexEnd) --> indexEnd tidak Include

// Length : Untuk Menghitung Jumlah Karakter
let nama = 'Mustofa'
console.log(nama.length)

// toUpperCase and toLowerCase
let nama1 ='Mustofa'
console.log(nama1.toLowerCase())
console.log(nama.toUpperCase())

// SubString: startIndex < endIndex. Apabila startIndex > endIndex akan di SWAP
let sapa = 'Hello'
console.log(sapa.substring(0,3))
console.log(sapa.substring(3,0))

// Replace
let txt = 'Hai Kamu'
console.log(txt.replace('a','x'))
console.log(txt.replace(/a/g,'x'))

// Split: Convert String to Array
let campus = 'BSD'
console.log(campus.split('S'))

// -NUMBER
// toString
let number = 10
console.log(number.toString())

//toFixed
let decimal = 2.9786
console.log(Number(decimal.toFixed()))

// -DATE DATA TYPE
let now = new Date()
console.log(now)
console.log(now.getFullYear())
console.log(now.getMonth())

