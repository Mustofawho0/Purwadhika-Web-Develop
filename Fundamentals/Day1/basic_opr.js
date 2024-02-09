// Basic Operator
const num1 = 6
const num2 = 7

console.log('Operator MTK')
console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)

// Modulus: Sisa Bagi
console.log('Modulus')
console.log(10 % 3) // Hasil = 1
console.log(20 % 5) // Hasil = 0
console.log(4 % 4) // Hasil = 0

// Math Object
console.log('Math Object')
console.log(Math.pow(2,2))
console.log(Math.abs(-20))
console.log(Math.floor(0.9)) // Hasil akan selalu dibulatkan ke bawah
console.log(Math.ceil(0.3)) // Hasil akan selalu dibulatkan ke atas
console.log(Math.round(0.5)) // Mengikuti aturan MTK

// String Concate
// Selain Penjumlahan (+) akan di itung dengan MTK
console.log('String Concate')
let angka ='2'
let angka1 = 2

console.log(angka + angka1)
console.log('3' * 3) // Hasilnya akan dikali
console.log(2 + 1 + '3') // Hasilnya (2+1) akan di hitung lalu digabung dgn string dan hasilnya menjadi '33'
console.log('3' / 1) // Hasilnya akan dibagi
console.log(4 - '2') // Hasilnya akan dikurang
console.log('3' * '2') // Hasilnya akan tetap dikali

// Increment & Decrement
let number = 100
number++ // Hasilnya akan menjadi 101
number-- // Hasilnya akan menjadi 100
console.log(number)

// Modify in Place
let num = 10
num = num + 20
console.log(num)

let newNum = 10
newNum += 10
console.log(newNum)

// PREFIX & POSTFIX
let counter = 0
console.log(++counter) // Hasilnya akan menjadi 1 (POSTFIX)
console.log(counter--) // Hasilnya akan menjadi 0 (PREFIX)
