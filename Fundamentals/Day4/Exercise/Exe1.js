/*
    Write a function to split a string and convert it into an array of words
        ○ Example : “Hello World” → [“Hello”, “World”]
*/
let txt = 'Hello World'
console.log(txt.split(' '))

/*
Write a function to remove all odd numbers in an array and return a new array that contains even
numbers only
        ○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]
*/

let num = [1,2,3,4,5,6,7,8,9,10]
let result = []
for (i =0; i < num.length; i++){
    if(num[i] % 2 == 0){
        result.push(num[i])
        // result += num[i]
    }
}
console.log(result)

/*
    Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
        ● Parameters : n → total looping
        ○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
        ○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz 
*/
