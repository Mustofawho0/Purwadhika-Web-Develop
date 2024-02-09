// Conditional Statment
// Pengkodisian untuk memberikan Instruksi kepada Komputer

// IF Statment
/*
    Untuk menggunakan IF Statment kondisi nya harus terpenuhi
    Contoh :
    if(condition) {
        Block of Code
    }
*/
const score = 80
if (score > 70){ // bernilai True
    console.log('Passed!')
}
if (score !== 80){ // bernilai False
    console.log('Running')
}

if (score === '80'){ // bernilai True
    console.log('Execute')
}

// IF ELSE Statment
// Untuk ELSE tidak perlu kondisi karna sudah Default untuk di Eksekusi

const point = 70
if (point >= 71){
    console.log('Passed!')
}else{
    console.log('Not Passed!')
}
if (point <= 70){
    console.log('OK!')
}else{
    console.log('Not OK!')
}

// IF ELSE DAN ELSE IF Statment
// untuk menggunakan ELSE IF setiap IF harus mempunyai kondisi
/*
    Contoh :
    if(kondisi){
        Block Code
    }else if(kondisi){
        Block Code
    }
*/
const finalScore = 'A'

if (finalScore < 'A'){
    console.log('Nilai Baik')
}else if (finalScore < 'B'){
    console.log('Nilai Cukup')
}else{
    console.log('Nilai Kurang')
}

// Case. Buatlah Validasi untuk Membatasi Jumlah Karakter Phone Number yang di Input oleh User
/*
    Dengan Ketentuan :
    - Apabila Jumlah Karakter lebih dari 9-14, Tampilkan ("Phone Number Valid")
    - Apabila Jumlah Karakter Kurang dari 9, Tampilkan ("Phone Number Not Valid")
*/

const number = 628977897990
const number1 = number.toString()
if (number1.length <= 9){
    console.log('Phone Number Valid')
}else if(number1.length <= 14){
    console.log('Phone Number Valid')
}else{
    console.log('Phone Number Not Valid')
}

if (number1.length < 9){
    console.log('Phone Number Not Valid')
}else if(number1.length > 14){
    console.log('Phone Number Not Valid')
}else{
    console.log('Phone Number Valid')
}

// Case. Buatlah Pengkodisian untuk Menentukan Nilai dengan Kategori tsb :
/*
    >= 70 --> Lulus
    <= 70 --> Tidak Lulus
*/

let nilai = 90
if(nilai >= 70){
    console.log('Lulus')
}else{
    console.log('Tidak Lulus')
}

// TERNARY OPERATOR
nilai >= 70? console.log('Lulus') : console.log('Tidak Lulus'); // jika memiliki 2 kondisi
nilai >= 90? console.log('Lulus Baik') : nilai >= 70? console.log('Lulus') : console.log('Tidak Lulus') // jika memiliki 3 kondisi

// TRUTHY FALSY
// Nilai Non-Boolean yang akan dikonversikan menjadi Boolean ketika bertemu Conditional Statment

console.log(Boolean(0))
console.log(Boolean(1))

// Case. Validasi input apakah Kosong atau Tidak

const input =''

if(input === 0){
    console.log('Input sudah terisi')
}else{
    console.log('Input harus diisi')
}

if(!input){ // pada syntax ini untuk mengetahui apakah sebuah nilai sudah terisi atau belum bisa di perhatikan pada tanda ("!") jika ada maka input belum terisi jika tidak ada maka input sudah terisi
    console.log('Input harus diisi')
}else{
    console.log('Input sudah terisi')
}