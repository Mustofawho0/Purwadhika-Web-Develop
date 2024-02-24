// START
console.log(`Exercise Day 1 \n`);
const n = 5;
const m = 3;
const nm = n * m;
console.log(`Area Rectangle ${nm}`);

const a = 5;
const b = 3;
const ab = (a + b) * 2;
console.log(`Perimeter Rectangle ${ab}`);

const radius = 5;
const diameter = 2;
const rd = radius * diameter;
console.log(`Diameter Circle ${rd}`);

const circum = 2 * 3.14 * radius;
console.log(`Circumference Circle ${circum}`);

const area = 3.14 * radius * radius;
console.log(`Area Circle ${area}`);

const anglesA = 80;
const anglesB = 65;
const anglesAB = 180 - (anglesA + anglesB);
console.log(`Angles of Triangle ${anglesAB}`);

const date1 = new Date("2022-01-20");
const date2 = new Date("2022-01-22");
const date = date2 - date1;
const date3 = date / (24 * 60 * 60 * 1000);
console.log(
  `Different ${date3} Day, Between Date (${date1}) and Date (${date2})`
);

const days = 400;
const years = Math.floor(days / 365);
// console.log(years);
const daysLeft = days % 365; // 35
// console.log(daysLeft)
const months = Math.floor(daysLeft / 30);
// console.log(mouth);
const leftDays = daysLeft % 30;
// const resDays = leftDays - 30
console.log(`Day 400 = ${years} Years, ${months} Month, ${leftDays} Days`);

const day = 366;
const year = Math.floor(day / 365);
// console.log(year)
const dayLeft = day % 365;
// console.log(dayLeft)
const month = Math.floor(dayLeft / 30);
// console.log(month)
console.log(`Days 366 = ${year} Years, ${month} Month, ${dayLeft} Days \n`);
// END

// START
console.log(`Exercise Day 2 \n`);

const celcius = 60;
const convertFahrenheit = (celcius * 9) / 5 + 32;
console.log(`Convert Celcius to Fahrenheit = ${convertFahrenheit} F`);

const num = 8;
if (num % 2 === 0) {
  console.log(`Hasil dari ${num} adalah Bilangan Genap`);
} else {
  console.log(`Hasil dari ${num} adalah Bilangan Ganjil`);
}

const prime = 7;
let flag = true;

for (i = 2; i < prime; i++) {
  if (prime % i === 0) flag = false;
}
if (flag === true || prime === 2) {
  console.log(`${prime} adalah Bilangan Prime`);
} else if (flag === false || prime === 1) {
  console.log(`${prime} adalah Bilangan Not Prime`);
}

let sum = 5;
let nums = 0;
for (i = 0; i <= sum; i++) {
  nums += i;
}
console.log(`Hasil Sum dari angka ${sum} adalah ${nums}`);

let sum1 = 3;
let nums1 = 0;
for (i = 0; i <= sum1; i++) {
  nums1 += i;
}
console.log(`Hasil Sum dari angka ${sum1} adalah ${nums1}`);

let factor = 4;
let resFac = 1;
for (i = 1; i <= factor; i++) {
  resFac *= i;
}
console.log(`Hasil Factorial dari angka ${factor} adalah ${resFac}`);
let factor1 = 6;
let resFac1 = 1;
for (i = 1; i <= factor1; i++) {
  resFac1 *= i;
}
console.log(`Hasil Factorial dari angka ${factor1} adalah ${resFac1}`);

const fibonaci = 15;
let fibonaci1 = 0;
let fibonaci2 = 1;

for (i = 2; i <= fibonaci; i++) {
  let fibonaci3 = fibonaci1 + fibonaci2;
  fibonaci1 = fibonaci2;
  fibonaci2 = fibonaci3;
}
console.log(`Hasil Fibonaci dari angka ${fibonaci} adalah ${fibonaci2} \n`);
// END

console.log(`Exercise Day 3 \n`)