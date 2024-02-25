```
/*
############################################

NUMBER 1.
Apakah Hasil console.log dibawah ini?

```;
console.log(typeof null);
console.log(typeof 404);
```

a. null & object
b. object & number --> ANSWER
c. number & number
d. undefined & number

############################################

NUMBER 2.
Apakah perbedaan variable yang dibuat dengan syntax let dan const?

a. Value variable let bersifat tetap, sedangkan const dapat diubah
b. Key let memiliki aturan scope(local/global), sedangkan const tidak
c. Value variable const bersifat tetap, sedangkan let dapat diubah --> ANSWER
d. Nama variable const dapat diduplicate, sedangkan let tidak

############################################

NUMBER 3.
Code berikut akan error ketika di-execute, apa hal yang menyebabkan error?

```;
let world = "Hello, World!".split("");
for (let i = 0; i < world.length; i += 1) {
  world.push(world[i]);
}
```

a. Terjadi infinite loop, karena terdapat proses push
b. Terjadi kesalahan syntax pada deklarasi loop --> ANSWER
c. Value string pada variable world tidak dapat di-split secara langsung
d. Increment pada for loop tidak dapat menggunakan +=

############################################

NUMBER 4.
Hasil dari code berikut ketika dijalankan adalah?

```;
const name = "Aboy";
const age = 25;
const score = 90;

if (score > 70) {
  console.log("Ok, Score passed!");
}
if (score >= 80) {
  console.log("Good, Score passed!");
}
if (score >= 90) {
  console.log("Excellent, Score passed!");
}
```

a. Ok, Score passed
b. Good, Score passed
c. Excellent, Score passed
d. Semua Jawaban benar --> ANSWER

############################################

NUMBER 5.
Hasil yang tepat dari kedua console.log berikut adalah?

```;
const pwd = ["Batam", "BSD", "Jakarta"];
pwd[50] = "Bandung";
console.log(pwd.length);
console.log(pwd.indexOf("Bandung"))```

a. 51 & 51
b. 51 & 50 --> ANSWER
c. 49 & 50
d. TypeError: Assignment to constant variable

############################################

NUMBER 6.
Manakah syntax ternary operator yang tepat?

a. 3 => 0? console.log(true): console.log(false)
b. 100 < 0? true: false --> ANSWER
c. 10 = 10? console.log('Yes'): console.log('No')
d. "ABC" =! "abc"? return 1: return 0

############################################

NUMBER 7.
Hasil console.log(point) yaitu?

```;
let point = 101;
point + "1";
point++;
point++;
point--;
console.log(point)```

a. 102 --> ANSWER
b. 103
c. 1012
d. 1013

############################################

NUMBER 8.
Hasil dari kedua console.log pada program berikut yaitu?

```;
let student = {
  name: "Aisyah",
  age: 20,
};
console.log(student.name);
console.log(student.hobi)```

a. Aisyah & ReferenceError: property hobi is not defined
b. Aisyah & Undefined --> ANSWER
c. Aisyah & Null
d. Aisyah & NaN

############################################

NUMBER 9.
APakah hasil yang akan ditmapilkan dari kode dibawah ini?

```;
SumNum(5);
function SumNum(argNum) {
  console.log(argNum * argNum);
}
```

a. 25 --> ANSWER
b. Undefined
c. Error, karena function di-call sebelum di-declare
d. Error, karena function tidak me-return apapun

############################################

NUMBER 10.
Apakah Hasil yang akan ditampilkan dari kode dibawah ini?

```;
SumNum(5);
const SumNum = (argNum) => {
  console.log(argNum * argNum);
};
```

a. 25
b. Undefined
c. Error, karena function di-call sebelum di-declare --> ANSWER
d. Error, karena function tidak me-return apapun

############################################
*/
```;
