// Array
// Sekumpulan Data yang Disimpan di Sebuah Wadah
// [.. , .. , ..]
// [0  , 1  , 2]

let student = ['A', 'B', 'C'] // Array
let data = [100, true, false, null, undefined, 'string'] // Bisa digunakan untuk number, boolean, dan string
let random = [
    [
        '2 Dimensi'
        [
            '3 Dimensi'
            [
                '4 Dimensi'
            ]
        ]
    ]
]

// CRUD ( Create, Read, Update, Delete)
// CREATE
let campusPwd = ['JKT', 'SBY', 'BDG']

// READ
console.log(campusPwd[0]) // Dst....
console.log(campusPwd[100]) // Undifined

// UPDATE
campusPwd[1] = 'BTM'
console.log(campusPwd)
campusPwd[2] = 'BSD'
console.log(campusPwd)

// DETELE
delete campusPwd[2]
console.log(campusPwd)

// METHOD
let fruits = ["pisang", "mangga", "apel"];

// METHOD PUSH : Menambah data baru paling akhir
fruits.push("manggis");

// UNSHIFT : Menambah data di Index paling Awal
fruits.unshift("durian");

// POP : Menghapus data di Index paling akhir
fruits.pop();
fruits.pop();

// SHIFT : Menghapus data di Index paling awal
fruits.shift();
console.log(fruits);

// LENGTH : Melihat total jumlah Index
let number = [1, 2, 3];
console.log(number.length);

// SLICE :
let alpabet = ["a", "b", "c", "d", "e"];
console.log(alpabet.slice(0, 3)); // Index ke-3 Not Include

// IndexOf : Pencarian Index suatu Data
let cars = ["BMW", "MERCY", "FERARRI", "LEXUS"];
console.log(cars.indexOf("MERCY"));
console.log(cars.indexOf("mercy")); // Hasil nya akan -1 harna tidak ada

// SORT : Mengurutkan Array
let number1 = [1, 2, 4, 5, 8, 90, 52, 36, 64];
console.log(number1.sort((a, b) => a - b)); // ASC
console.log(number1.sort((a, b) => b - a)); // DESC

// SPLICE : Menambah Menghapus, MengUpdate Data
// arr.splice(index, totalToDelete/totalToUpdate, newData)

// Menghapus

let food = ["Ayam Bakar", "Nasi Goreng", "Nasi Bebek"];
console.log(food.splice(0, 1)); // Manghapus Data di Index ke-0, sebanyak 1

// Mengupdate
let drink = ['Boba', 'Es Campur', 'Kopi']
console.log(drink.splice(0,2, 'Soft Drink'))

// Menambah
let city = ['JKT', 'BDG', 'SBY']
city.splice(0,0, 'BTM')
city.splice(5, 0, 'YGY')
console.log(city)

// Case. Odd/Even Array
// Ex.  Input [1,4,5,8,10]
//      Output ['Odd','Even','Odd','Even','Even']

let arr = [1, 4, 5, 8, 10];
let result = []
for (i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    result.push("EVEN");
  } else {
    result.push("ODD");
  }
}
console.log(result);

// Case. Filtering type of string Only
// Input    : ['hello',123,true,undefined,'jcwd']
// Output   : arrString = ['hello','jcwd']
//            totalData = 2

let latihan = ['hello',123,true,undefined,'jcwd']
arrString =[]

for (i=0; i < latihan.length; i++){
    if (typeof latihan[i] === 'string'){
        arrString.push(latihan[i])
    }
}
console.log(arrString)
console.log(arrString.length)