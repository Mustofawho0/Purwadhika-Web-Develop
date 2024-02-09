// 1
const celcius = 60;
const f = (celcius * 9) / 5 + 32;
console.log(f + " Fahrenheit");
//////////////////////////////////
// 2
let bil = 25;
if (bil % 2 === 0) {
  console.log("Genap");
} else {
  console.log("Ganjil");
}
//////////////////////////////////
// 3
let prime = 7;
for (let i = 2; i <= prime; i++) {
  if (prime % i == 0) {
    console.log(`not Prime`);
  } else {
    console.log(`is Prime`);
  }
  break;
}

const prime1 = 2
let isPrime = true // diberikan penanda (flag)
for(let l = 2; l < prime1; l++ ){
  if(prime1 % l === 0)
  isPrime = false // 
}
if(isPrime === true || prime1 === 2){ 
  console.log('Is Prime')
}else if(isPrime === false || prime1 === 1){
  console.log('Not Prime')
}
//////////////////////////////////
// 4
let num1 = 5;
let sum1 = 0;
for (let i = 1; i <= num1; i++) {
  sum1 += i;
}
console.log(sum1);
//////////////////////////////////
let number1 = 3;
let Sum = 1;
for (let i = 1; i <= number1; i++) {
  Sum += i;
}
console.log(Sum);
//////////////////////////////////
// 5
let num = 6;
let sum2 = 1;
for (let j = 1; j <= num; j++) {
  sum2 *= j;
}
console.log(sum2);
//////////////////////////////////
// 6
let fib = 15;
let fib1 = 0,
  fib2 = 1;
for (let k = 2; k <= fib; k++) {
  let fib3 = fib1 + fib2;
  fib1 = fib2;
  fib2 = fib3;
}
console.log(fib2);
//////////////////////////////////
let count = 15;
let arrFibo = [0, 1];
for (let m = 2; m <= count; m++) {
let nextarrFibo = arrFibo[m - 1] + arrFibo[m - 2];
arrFibo.push(nextarrFibo)
}
console.log(arrFibo);

// let angka = [42, 27, 18];
// console.log(angka.sort());

// let txt = "hello";
// console.log(txt.split("").reverse().join(""));
