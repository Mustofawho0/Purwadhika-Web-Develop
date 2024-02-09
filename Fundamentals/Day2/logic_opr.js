/*
    LOGICAL OPERATOR : OPERATOR PEMBANDING UNTUK BEBERAPA KONDISI
    ** || OR
    ** && AND
    ** ! NOT
*/

/*
    * || OR
    ** Apabila salah satu kondisi bernilai TRUE, maka hasilnya akan TRUE
    ** Apabila ingin hasil akhirnya bernilai FALSE, maka semua kondisi harus bernilai FALSE
*/

console.log(1 == 1 || 2 == 2) // TRUE || TRUE --> TRUE
console.log(1 === '1' || 2 === '2') // FALSE || FALSE --> FALSE
console.log(1 == '1' || 1 !== 1) // TRUE || FALSE --> TRUE
/*
    * && AND
    ** Apabila salah satu kondisi bernilai FALSE, maka hasil akhir akan FALSE
    ** Apabila ingin hasil akhirnya bernilai TRUE, maka semua kondisi harus bernilai TRUE
*/

console.log(1 == 1 && 2 == 2) // TRUE || TRUE --> TRUE
console.log(1 === '1' && 2 === '2') // FALSE || FALSE --> FALSE
console.log(1 == '1' && 1 !== 1) // TRUE || FALSE --> FALSE