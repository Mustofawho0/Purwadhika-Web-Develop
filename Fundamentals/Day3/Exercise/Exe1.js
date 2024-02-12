/*
    Nomor 1 :
    Write a code to display the multiplication table of a given integer.
        ○ Example : Number → 9
        ○ Output :
            ■ 9 x 1
            ■ 9 x 2
            ■ …
            ■ 9 x 10
*/

let angka = 9,
  angka1 = 10;
for (i = 1; i <= angka1; i++) {
  console.log(`${angka} x ${i} = ${angka * i}`);
}

/*
    Nomor 2 :
    Write a code to check whether a string is a palindrome or not.
        ○ Example : ‘madam’ → palindrome
*/
// Menggunakan Method
let palindrome = "Madam",
  palindrome1 = palindrome.split("").reverse().join("");
if (palindrome.toLowerCase() === palindrome1.toLowerCase()) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}

// Menggunakan Looping
let world = "madam";
let revWord = ""; // 'index 5 [n] decrement'
for (i = world.length - 1; i >= 0; i--) {
  // i=5; TRUE; i=4; TRUE;
  revWord += world[i];
}
if (world === revWord) {
  console.log("is Palindrom");
} else {
  console.log("not Palindrom");
}

/*
    Nomor 3 :
    Write a code to convert centimeter to kilometer.
        ○ Example : 100000 → “1 km”
*/

const jarakCM = 100000;
console.log(`${jarakCM / 100000} km`);

/*
    Nomor 4 :
    Write a code to format number as currency (IDR)
        ○ Example : 1000 → “Rp. 1.000,00”
*/



/*
    Nomor 5 :
    Write a code to remove the first occurrence of a given “search string” from a string
        ○ Example : string = “Hello world”, search string = “ell” → “Ho world”
*/

let text = "Hello world",
  text1 = text.replace("ell", "");
console.log(text1);

/*
    Nomor 6 :
    Write a code to capitalize the first letter of each word in a string
        ○ Example : “hello world” → “Hello World”
*/

let kalimat = "hello world";
let kalimatSplit = kalimat.split(" ");
// console.log(kalimatSplit)
for (i = 0; i < kalimatSplit.length; i++) {
  kalimatSplit[i] = kalimatSplit[i][0].toUpperCase() + kalimatSplit[i].slice(1);
}
console.log(kalimatSplit.join(" "));

/*
    Nomor 7 :
    Write a code to reverse a string.
        ○ Example : “hello” → “olleh”
*/

let huruf = "hello";
hurufKebalik = huruf.split("").reverse().join("");
console.log(hurufKebalik);

/*
    Nomor 8 :
    Write a code to swap the case of each character from string
        ○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
*/

let str = "The QuiCk BrOwN Fox",
  str1 = "";
for (i = 0; i < str.length; i++) {
  if (str[i] === str[i].toLowerCase()) {
    str1 += str[i].toUpperCase();
  } else {
    str1 += str[i].toLowerCase();
  }
}
console.log(str1);

/*
    Nomor 9 :
    Write a code to find the largest of two given integers
        ○ Example : num1 = 42, num2 = 27 → 42
*/
let number = 42,
  number1 = 27;
if (number > number1) {
  console.log(number);
} else {
  console.log(number1);
}
/*
    Nomor 10 :
    Write a conditional statement to sort three numbers
        ○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
*/
let num1 = 42,
  num2 = 27,
  num3 = 18;

if (num1 < num2 && num1 < num3) {
  // FALSE --> FALSE = FALSE
  if (num2 < num3) {
    // FALSE
    console.log(`${num1}, ${num2}, ${num3}`);
  } else {
    console.log(`${num1}, ${num3}, ${num2}`);
  }
} else if (num2 < num1 && num2 < num3) {
  // FALSE --> FALSE = FALSE
  if (num1 < num3) {
    // FASLE
    console.log(`${num2}, ${num1}, ${num3}`);
  } else {
    console.log(`${num2}, ${num3}, ${num1}`);
  }
} else if (num3 < num1 && num3 < num2) {
  // TRUE --> TRUE = TRUE
  if (num1 < num2) {
    // FALSE
    console.log(`${num3}, ${num1}, ${num2}`);
  } else {
    console.log(`${num3}, ${num2}, ${num1}`); // EXECUTE
  }
}

/*
    Nomor 11 :
    Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
        ○ Example : “hello” → 1
*/

let input = "hello";
const inputType = typeof input;
// console.log(input);
if (inputType === "string") {
  console.log("1");
} else if (inputType === "number") {
  console.log("2");
} else {
  console.log("3");
}

/*
    Nomor 12 :
     Write a code to change every letter a into * from a string of input
        ○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`
*/

let letter = "An apple a day keeps the doctor away";
console.log(letter.replace(/a/gi, "*")); // Flag "i" digunakan untuk kasus dimana huruf besar dan huruf kecil diartikan sama.
