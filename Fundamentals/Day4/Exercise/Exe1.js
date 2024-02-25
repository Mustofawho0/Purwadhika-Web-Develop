/*
    Write a function to split a string and convert it into an array of words
        ○ Example : “Hello World” → [“Hello”, “World”]
*/
let txt = "Hello World";
console.log(txt.split(" "));

/*
Write a function to remove all odd numbers in an array and return a new array that contains even
numbers only
        ○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]
*/

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = [];
for (i = 0; i < num.length; i++) {
  if (num[i] % 2 == 0) {
    result.push(num[i]);
    // result += num[i]
  }
}
console.log(result);

/*
    Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
        ● Parameters : n → total looping
        ○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
        ○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz 
*/

const input = 15;
for (i = 1; i <= input; i++) {
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

/*
    Create a function to calculate Body Mass Index (BMI)
        ● Formula : BMI = weight (kg) / (height (meter))²
        ● Parameters : weight & height
        ● Return values :
            ○ < 18.5 return “less weight”
            ○ 18.5 - 24.9 return “ideal”
            ○ 25.0 - 29.9 return “overweight”
            ○ 30.0 - 39.9 return “very overweight”
            ○ > 39.9 return “obesity”
*/
let kg = 111;
let m2 = 170 / 100;
let bmi = kg / (m2 * m2);

if (bmi < 18.5) {
  console.log("less weight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("ideal");
} else if (bmi >= 25.0 && bmi <= 29.9) {
  console.log("overweight");
} else if (bmi >= 30.0 && bmi <= 39.9) {
  console.log("very overweight");
} else if (bmi >= 39.9) {
  console.log("obesity");
}

/*
    ● Create a function that can create a triangle pattern according to the height we provide like the
    following :
        01
        02 03
        04 05 06
        07 08 09 10
    ● Parameters : height → triangle height
*/

let height = 4;
let num1 = 1;

for (i = 1; i <= height; i++) {
  let str = "";
  for (j = 1; j <= i; j++) {
    str += num1.toString().padStart(2, 0) + " ";
    num1++;
  }
  console.log(str);
}
