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
```
########## SECTION-01 ##########
1. Sebutkan macam-macam comparison operator dan logical operator!

2. Apakah perbedaan antara AND, OR dan juga NOT?

3. Perhatikan code berikut! Apa yang akan terjadi apabila program berikut dijalankan?
```
    function GetArr(arr){ 
        return arr.forEach(value => {
            return value
        })
    } 
    function GetValue(arr){ 
        return arr.map(value => {
            return value
        })
    }
    let arr = ["A", null, true, undefined, 20]
    console.log(GetArr(arr))
    console.log(GetValue(arr))
```

4. Sebutkan perbedaan variable yang di declare dengan menggunakan syntax var, let dan juga const!

5. Sebutkan perbedaan antara looping while, do while dan juga for loop!

6. Sebutkan 5 build in method yang ada di Javascript!

7. Perhatikan code berikut! Apakah hasil console.log program di bawah ini?
```
    var name = "Defryan"
    let newName = name
    newName = "Ryan"
    console.log(name) Defryan
    console.log(newName)  Ryan
```
8. Sebutkan perbedaan antara mutable dan immutable! 

9. Sebutkan 3 contoh truthy dan falsy Javascript!

10. Perhatikan code berikut ini! Tuliskan dalam bentuk ternary operator!
```
    if(10 !== "10"){
        return 10
    }else if(10 !== 10){
        return "10"
    }else{
        return 10
    }
```
11. Sebutkan perbedaan break dan juga continue!

12. Sebutkan perbedaan method push, unshift, shift dan juga pop!

13. Perhatikan code berikut! Manakah penadeklarasian variable yang tidak sesuai
    dengan aturan JS?
```
        let $tudentLists = ["Rafli", "Dhito", "Vero"] 
        var KampusPWD = "Bsd, Jkt, Btm" 
        const _e_commerce = null 
        let programmingLanguage = { Javascript, PHP, Java } False
        var comp4ny = "Bithealth, Tokopedia, Werkdone" 
```
14. Sebutkan macam-macam data structure dan juga cara kerjanya!

15. Apakah perbedaan antara forEach, .map dan juga .filter?

16. Jelaskan secara singkat proses synchronous dan asynchronous!

17. Apa itu hoisting?

18. Buatlah contoh program dengan menggunakan indirect callback function!

19. Perhatikan data berikut! Tuliskan syntax yang tepat untuk menambahkan
    buah "Pear" dan menghapus buah "Apel" menggunakan method splice!

20. Sebutkan macam-macam tipe data primitive dan non primitive!

########## SECTION-02 ##########
1. Perhatikan code berikut!
```
        const dataSiswa = {
            name: "Amel",
            umur: 22,
            noHp: [08123598733, "08523345976"]
        }
        console.log(dataSiswa.name)
        console.log(dataSiswa.nohp)
```
Hasil dari perintah console.log diatas adalah?
a. Amel and 'ReferenceError: key nohp is not defined'
b. Amel and null
x. Amel and undefined 
d. Amel and 'TypeError: nohp is not property'

2. Apakah perbedaan antara syntax let dan const?
a. Value dari variable let tidak dapat diubah, sedangkan const dapat diubah
b. Variable let memiliki aturan scope, sedangkan const tidak memiliki aturan scope
c. Variable const dapat diduplicate, sedangkan let tidak dapat di duplicate
x. Value dari variable const tidak dapat diubah, sedangkan let dapat diubah 

3. Hasil console.log(typeof null) dan juga console.log(typeof 2302) adalah?
a. string & number
b. number & number
x. object & number
d. null & number

4. Perhatikan code berikut!
```
        let std = "GBK"
        std += " JKT"
        std = "GBT SBY"
        console.log(std)
```
a. "GBK"
b. " JKT"
x. "GBT SBY"
d. "GBK JKT"

5. Perbedaan dari .forEach dengan .map adalah?
x. forEach tidak menghasilkan array baru, sedangkan map menghasilkan array baru
b. Looping forEach dapat dihentikan dengan syntax break, sedangkan looping map
   dapat dihentikan dengan syntax return
c. Looping map digunakan untuk me-looping saja, sedangkan looping forEach digunakan
   untuk mendapatkan output berupa array baru
d. Semua jawaban salah

6. Pendeklarasian yang sesuai dengan aturan JS adalah?
a. const password = @abc123#
x. let school_Name = "Purwadhika"
c. var Object = { name: "Andien" }
d. let nama-depan = "Budi"

7. Data structure yang menggunakan konsep FIFO adalah?
a. Stack // LIFO
x. Queue
c. Linkedlist
d. Hashmap

8. Bagaimana cara untuk mengakses property output pada data berikut ini?
```
        const data = [
            null, () => [{ output: 'Hai, aku disini!' }], 100, undefined, true
        ]
```
x. data[1]()[0]['output']
b. data[1][0].output
c. data[1]().output
d. data[1]()=>[0].output

9. Perhatikan program berikut ini!
```
        let discount = 75
        discount *= 1 
        discount++
        discount += '1' 
```
Hasil console.log(discount) adalah?
a. 7521
x. 761
c. 77
d. 751

10. Perhatikan looping berikut!
```
        do{
            let poin = 77
            poin+=1
            console.log(poin)
            poin--
        }while(poin <= 80)
```
Apakah kesalahan pada program di atas?
a. Kondisi step pada exit way tidak bisa menggunakan += 1
b. Terjadi infinite loop karena poin--
c. Kesalahan pada penamaan variable
x. Variable poin tidak dapat digunakan di dalam while condition

11. Perhatikan syntax berikut!
```
        let noAntrian = [11, 13, 15, 12, 14]
        noAntrian.push(12) 
        noAntrian.sort() 
        noAntrian.pop() 
```
Hasil akhir dari noAntrian adalah?
x. [11, 12, 12, 13, 14]
b. [12, 12, 13, 14, 15]
c. [11, 13, 15, 12, 14]
d. [11, 12, 13, 14, 15]

12. Perhatikan syntax berikut ini!
```
        function cetakTiket(tiket, callback){
            return callback(tiket)
        }
        cetakTiket('Kereta', Print)
```
Apakah yang akan terjadi apabila program diatas dijalankan?
x. TypeError: callback is not a function
b. ReferenceError: Callback is not defined
c. 'Kereta'
d. Semua jawaban salah

13. Berikut ini pernyataan yang tidak tepat mengenai tipe data array adalah?
x. Memiliki property .length saja
b. Menampung semua tipe data termasuk array itu sendiri
c. Masing-masing data memiliki index penomoran
d. Dapat menampung object dan juga function

14. Hasil dari console.log(String(2302) === "2302") adalah?
x. True
b. False
c. ReferenceError
d. TypeError

15. Perhatikan code berikut!
```
        let printKuy = "Selamat"
        if("0" !== "nol"){ 
            printKuy += " Apa Hayo?"
        }
```
Hasil dari console.log(printKuy) di akhir program adalah?
a. " Apa Hayo?"
b. "Selamat"
x. "Selamat Apa Hayo?"
d. "Selamat Apa Hayo"

16. Perhatikan function berikut!
```
        let UppercaseStr = (txt) => {
            let text = txt
            return text
        }
        UppercaseStr("Ya")
        console.log(text)
```
Apa hasil dari console.log program diatas?
a. Undefined
b. Ya
x. ReferenceError: text is not defined
d. Null

17. Perhatikan code berikut!
```
    let kelas = '2302JCWD'
    kelas = Number(kelas)
    kelas = String(kelas)        
```
Apakah hasil dari console.log(kelas) di baris akhir dan apa type of dari kelas?
a. Null & String
x. NaN & String
c. 2302 & String
d. 2302 & Number

18. 
```
    let clothing = ["Erigo", "Wadezig", "UNKL347"]
    clothing.splice(2, 0, "Reclays", "Screamous") // [Erigo, Wadezig, Reclays, Screamous, UNKL347]
    clothing.shift() // [Wadezig, Reclays, Screamous, UNKL347]
    console.log(clothing)
```

Hasil dari console.log diatas yaitu?
a. ["Wadezig", "UNKL347", "Reclays", "Screamous"]
b. ["Erigo", "Wadezig", "UNKL347", "Reclays"]
x. ["Wadezig", "Reclays", "Screamous", "UNKL347"]
d. ["Erigo", "Wadezig", "UNKL347", "Reclays"]

19. Perhatikan program berikut!
```
        let klub = "Persib"
        let std = "GBLA"
        if(!klub && !std){ 
            console.log("Data Tidak Lengkap")
        }else if(klub && !std){ 
            console.log("Data Kurang Lengkap")
        }else if(!klub && std){ 
            console.log("Data Masih Kurang Lengkap")
        }else{
            console.log("Data Lengkap")
        }
```
Hasil dari program diatas adalah?
a. Data Tidak Lengkap
b. Data Kurang Lengkap
c. Data Masih Kurang Lengkap
x. Data Lengkap

20. Berikut ini syntax yang dapat dilakukan hoisting yaitu?
a. var & let myFunct = function(){ ... }
b. let & function NewFunction(){ ... }
c. const & const createFunction = () => { ... }
d. var & var ourFunction = () => { ... }

21. Hasil dari kedua console.log berikut adalah?
```
let random = '90D'
random = parseInt(random)
console.log(random)
random = String(random)
console.log(typeof random)
```
a. NaN & Object 
b. 90 & Number 
c. NaN & String 
d. 90 & String 

22. Hasil dari kedua console.log berikut adalah?
```
let random = 'D90'
random = Number(random)
console.log(random)
random = String(random)
console.log(typeof random)
```
a. NaN & Object 
b. 90 & Number 
c. NaN & String 
d. 90 & String 
```