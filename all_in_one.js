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

// START
console.log(`Exercise Day 3 \n`);

let input = 9;
const limit = 10;

for (i = 1; i <= limit; i++) {
  // console.log(i)
  console.log(`${i} x ${input} = ${input * i}`);
}

let stringPalindrome = "madam";
let stringKosong = "";
// let PalindromeRes = stringPalindrome.split("").reverse().join("");
// console.log(PalindromeRes)
for (i = stringPalindrome.length - 1; i >= 0; i--) {
  stringKosong += stringPalindrome[i];
}
if (stringPalindrome === stringKosong) {
  console.log(`Kalimat "${stringPalindrome}" adalah Palindrom`);
} else {
  console.log(`Kalimat "${stringPalindrome}" bukan Palindrom`);
}
// if (stringPalindrome.toLowerCase() === PalindromeRes.toLowerCase()) {
//   console.log(`Kalimat ${stringPalindrome} adalah Palindrom`);
// } else {
//   console.log(`Kalimat ${stringPalindrome} bukan Palindrom`);
// }

const centimeter = 100000;
console.log(
  `Convert ${centimeter} Centimeter to Kilometer = ${centimeter / 100000} Km `
);

const convertNum = 1000000;
console.log(
  `Convert ${convertNum} to IDR = Rp. ${convertNum.toLocaleString("id-ID")},00`
);

const word = "Hello World";
const replaceWord = word.replace("ell", "");
console.log(`${word} --> ${replaceWord}`);

const letter = "hello world";
const capLetter = letter.split(" ");
for (i = 0; i < capLetter.length; i++) {
  capLetter[i] = capLetter[i][0].toUpperCase() + capLetter[i].slice(1);
}
console.log(`${letter} --> ${capLetter.join(" ")}`);

const helWord = "hello";
const reverseWord = helWord.split("").reverse().join("");
console.log(`${helWord} --> ${reverseWord}`);

const caseSwap = "The QuiCk BrOwN Fox";
let strKosong = "";

for (i = 0; i < caseSwap.length; i++) {
  if (caseSwap[i] === caseSwap[i].toLowerCase()) {
    strKosong += caseSwap[i].toUpperCase();
  } else {
    strKosong += caseSwap[i].toLowerCase();
  }
}
console.log(`${caseSwap} --> ${strKosong}`);

const number1 = 42;
const number2 = 7;

if (number1 > number2) {
  console.log(`${number1}`);
} else {
  console.log(`${number2}`);
}

let num1 = 42;
let num2 = 50;
let num3 = 70;
// let num4 = 20;

if (num1 < num2 && num1 < num3) {
  if (num2 < num3) {
    console.log(`${num1}, ${num2}, ${num3}`);
  } else {
    console.log(`${num1}, ${num3}, ${num2}`);
  }
} else if (num2 < num1 && num2 < num3) {
  if (num1 < num3) {
    console.log(`${num2}, ${num3}, ${num1}`);
  } else {
    console.log(`${num2}, ${num1}, ${num3}`);
  }
} else if (num3 < num1 && num3 < num2) {
  if (num2 < num1) {
    console.log(`${num3}, ${num2}, ${num1}`);
  } else {
    console.log(`${num3}, ${num1}, ${num2}`);
  }
  // } else if (num4 < num1 && num4 < num2 && num4 < num3) {
  //   if (num1 < num2 && num2 < num3) {
  //     console.log(`${num4}, ${num1}, ${num2}, ${num3}`);
  //   } else {
  //     console.log(`${num4}, ${num3}, ${num2}, ${num1}`);
  //   }
}

const showInput = true;
const typeInput = typeof showInput;
// console.log(typeInput)

if (typeInput == "string") {
  console.log(`${showInput} --> 1`);
} else if (typeInput == "number") {
  console.log(`${showInput} --> 2`);
} else {
  console.log(`${showInput} --> 3`);
}

const stringInput = "An apple a day keeps the doctor away";
const changeWord = stringInput.replace(/a/gi, "*");

console.log(changeWord + "\n");
// END

// START
console.log(`Day 4 \n`);

// function TrianglePattern(maxValue, num) {
//   for (i = 1; i <= maxValue; i++) {
//     let str = ''
//     for (j = 1; j <= i; j++) {
//       str += num.toString().padStart(2, 0) + "";
//       num++
//     }
//   }
//   return maxValue, num
// }
// console.log(TrianglePattern(4,1));

let TrianglePattern = 4;
let count = 1;

for (i = 1; i <= TrianglePattern; i++) {
  let blankString = "";
  for (j = 1; j <= i; j++) {
    blankString += count.toString().padStart(2, 0) + " ";
    count++;
  }
  console.log(blankString);
}
let fizzBuzz = 15;
for (i = 1; i <= fizzBuzz; i++) {
  if (i % 3 === 0 && i % 5 !== 0) {
    console.log("Fizz");
  } else if (i % 5 === 0 && i % 3 !== 0) {
    console.log("Buzz");
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else {
    console.log(i);
  }
}

// function CountFizzBuzz(fizzBuzz) {
//   for (i = 1; i <= fizzBuzz; i++) {
//     if (i % 3 === 0 && i % 5 !== 0) {
//       return "Fizz";
//     } else if (i % 5 === 0 && i % 3 !== 0) {
//       return "Buzz";
//     } else if (i % 3 === 0 && i % 5 === 0) {
//       return "FizzBuzz";
//     }
//   }
// }
// console.log(CountFizzBuzz(15));

let weight = 111;
let height = 170 / 100;
let bmi = weight / (height * height);

if (bmi <= 18.5) {
  console.log("Less Weight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("Ideal");
} else if (bmi >= 25.0 && bmi <= 29.9) {
  console.log("Overweight");
} else if (bmi >= 30.0 && bmi <= 39.9) {
  console.log("Very Overweight");
} else if (bmi >= 39.9) {
  console.log("Obesity");
}
// // console.log(bmi)

// function CalculateBody(weight, height) {
//   bmi = weight / (height * height / 100);
//   if (bmi <= 18.5) {
//     return "Less Weight";
//   } else if (bmi >= 18.5 && bmi <= 24.9) {
//     return "Ideal";
//   } else if (bmi >= 25.0 && bmi <= 29.9) {
//     return "Overweight";
//   } else if (bmi >= 30.0 && bmi <= 39.9) {
//     return "Very Overweight";
//   } else if (bmi >= 39.9) {
//     return "Obesity";
//   }
//   return bmi;
// }
// console.log(CalculateBody(111, 170));

// const newArr = [1,2,3,4,5,6,7,8,9,10]
// let arrBlank = []

// for(i = 1; i < newArr.length; i++){
//   if(newArr[i] % 2 == 0){
//     arrBlank.push(newArr[i])
//   }
// }
// console.log(arrBlank)

function OddNumber(newArr) {
  let arrBlank = [];
  for (i = 0; i < newArr.length; i++) {
    if (newArr[i] % 2 == 0) {
      arrBlank.push(newArr[i]);
    }
  }
  return arrBlank;
}
console.log(OddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function textWord(word) {
  return word.split(" ");
}
console.log(textWord("Hello World"));
console.log(`\n`);
// END

// START
console.log(`Day 5 \n`);

function inputValue(arrNumber) {
  let low = arrNumber[0];
  let high = arrNumber[1];
  let avg = 0;

  for (let key of arrNumber) {
    if (key < low) low = key;
    if (key > high) high = key;
    avg += key;
  }
  return [
    `Lowest : ${low}, Highest : ${high}, Average : ${avg / arrNumber.length}`,
  ];
}
console.log(inputValue([12, 5, 23, 18, 4, 45, 32]));

function concatArray(arrayString) {
  return (
    arrayString.slice(0, arrayString.length - 1).join(", ") +
    ", and " +
    arrayString[arrayString.length - 1]
  );
}
console.log(concatArray(["Apple", "Banana", "Cherry", "Date"]));

function splitWord(word) {
  return word.split(" ");
}
console.log(splitWord("Hello World"));

function CalculateArray(int, int1) {
  let intBlank = [];
  for (i = 0; i < int.length; i++) {
    intBlank.push(int[i] + int1[i]);
  }
  return intBlank;
}
console.log(CalculateArray([1, 2, 3], [3, 2, 1]));

function newElement(arr, newElement) {
  if (!arr.includes(newElement)) {
    arr.push(newElement);
  }
  return arr;
}
console.log(newElement([1, 2, 3, 4], 7));

function removeOddNumber(evenNumber) {
  let number = [];
  for (i = 0; i < evenNumber.length; i++) {
    if (evenNumber[i] % 2 === 0) {
      number.push(evenNumber[i]);
    }
  }
  return number;
}
console.log(removeOddNumber([1, 2, 3, 4, 5, 6]));

// function combineTwoArray(arr, arr1) {
//   if (arr.includes(arr1)) {
//     arr.push(arr1);
//   }
//   return arr;
// }
// console.log(combineTwoArray([1, 2, 3], [4, 5, 6]));

