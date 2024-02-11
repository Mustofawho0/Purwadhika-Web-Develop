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

/*
    Nomor 9 :
    Write a code to find the largest of two given integers
        ○ Example : num1 = 42, num2 = 27 → 42
*/

/*
    Nomor 10 :
    Write a conditional statement to sort three numbers
        ○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
*/

/*
    Nomor 11 :
    Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
        ○ Example : “hello” → 1
*/

/*
    Nomor 12 :
     Write a code to change every letter a into * from a string of input
        ○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`
*/

let letter = "An apple a day keeps the doctor away";
console.log(letter.replace(/a/gi, "*")); // Flag "i" digunakan untuk kasus dimana huruf besar dan huruf kecil diartikan sama. 
