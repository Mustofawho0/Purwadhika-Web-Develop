// CALLBACK
// Function yang dijadikan Argument oleh Function Lain

// Case. Function Penjumlahan, Hasil dari Function Penjumlahan Ditampilkan di Dalam Function Lain

function Penjumlahan(num1, num2) {
  return num1 + num2;
}
function Print(result) {
  console.log(result);
}
const newResult = Penjumlahan(3, 5);
Print(newResult);

// 1. Indirect Callback
function Pengurangan(num1, num2, callback) {
  return callback(num1 - num2);
}
function Hasil(result) {
  console.log(result);
}
Pengurangan(5, 3, Hasil);

// 2. Direct Callback
function Perkalian(num1, num2, callback) {
  return callback(num1 * num2);
}
Perkalian(8, 2, (callback) => {
  console.log(callback);
});
