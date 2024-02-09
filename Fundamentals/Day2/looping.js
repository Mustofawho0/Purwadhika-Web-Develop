// LOOPING : Pengulangan
// Start; End; ExitDay;
// Untuk FOR dapat menggunakan VAR dan LET tidak bisa menggunakan CONST karna ada perubahan untuk proses increment
/*
    Contoh :

    while(condition){
        Block of Code
    }

*/
// // WHILE Condition
let txt = 'Hello JCWD'
let start = 1
while(start <= 10){ // akan dimulai dari angka 1 hingga 10
    console.log(txt)
    start++
}

let count = 1
while (count <= 10){
    console.log(count + '. Hello JCWD!')
    count++
}

let say = 1
while (say < 5){ // akan dimulai dari angka satu dan selesai sebelum angka 5
    console.log(say + '. Hallo')
    say++
}

// DO WHILE Condition
/*
    do {
        Block of Code
    }while(kondisi)
*/

let angka = 1
do{
    console.log(angka + '. Count 1')
    angka ++
}while(angka <=10)

let angka1 = 1
do {
    console.log(angka1 + '. Count 2')
    angka1 += 2 // Pengunlangan akan dilongkap 2 karna ada ("+= 2") dan akan false kalau sudah kurang dari 5
}while(angka1 < 5)

let angka2 = 1
do{
    console.log(angka2 + '. Count 3')
    angka2++ // akan tetap bisa dijalankan karna memproses pada bagian Do lalu ter-Increment
}while(angka2 <1)

// FOR LOOP : Simplify While
/*
    for(start; condition; exitWay;){
        Block of Code
    }
*/

for(let i = 1; i <=10; i++){
    console.log(i + '. Count 4')
}

for (let i = 10; i >= 1; i--){
    console.log(i + '. Count 5')
}

// BREAK & CONTINUE
// BREAK : Menghentikan sebuah Proses
// CONTINUE : Melompati sebuah Proses

// Penggunaan Continue
for (let i = 1; i < 5; i++){
    if (i === 2) continue;
    console.log(i + '. Count 6')
}

// Penggunaan Break
for (let i = 1; i < 5; i++){
    if (i !== 1) break;
console.log(i + '. Count 7')
}
