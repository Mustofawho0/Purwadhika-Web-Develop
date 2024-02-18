/*
1. Write a function to get the lowest, highest and average value in the array (with and without sort function).
a. Example : 
arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
*/
function LowHighAve(arrNumber) {
  let low = arrNumber[0];
  let high = arrNumber[1];
  let ave = 0;

  for (let item of arrNumber) {
    if (item < low) low = item;
    if (item > high) high = item;
    ave += item;
  }
  return [low, high, ave / arrNumber.length];
}

console.log(LowHighAve([12, 5, 23, 18, 4, 45, 32]));

/*
    2. Write a function that takes an array of words and returns a string by concatenating the words in the array,
    separated by commas and - the last word - by an 'and'.
        a. Example : 
        arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
*/

function ComaAnd(arrStr) {
  return (
    arrStr.slice(0, arrStr.length - 1).join(" , ") +
    ", and " +
    arrStr[arrStr.length - 1]
  );
}
console.log(ComaAnd(["Apple", "Banana", "Cherry", "Date"]));

/*
    3. Write a function to split a string and convert it into an array of words
        a. Example : “Hello World” → [“Hello”, “World”]
*/
function huruf(txt) {
  console.log(txt.split(" "));
}
huruf("Hello World");

/*
    4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
    of the same length.
        a. Example : 
        [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

*/
function ArrLength(arr1, arr2) {
  let arrTot = [];
  for (i = 0; i < arr1.length; i++) {
    arrTot.push(arr1[i] + arr2[i]);
  }
  return arrTot;
}

console.log(ArrLength([1, 2, 3], [3, 2, 1]));

/*
    5. Write a function that adds an element to the end of an array. However, the element should only be added if it is
    not already in the array.
        a. Example : 
                arr = [1, 2, 3, 4], 
                newElement = 4 → [1, 2, 3, 4]
        b. Example : 
                arr = [1, 2, 3, 4], 
                newElement = 7 → [1, 2, 3, 4, 7]
*/

function AddElementArr(arr, newArr) {
  if (!arr.includes(newArr)) {
    // " ! " : Negasi
    arr.push(newArr);
  }
  return arr;
}

console.log(AddElementArr([1, 2, 3, 4], 4));
