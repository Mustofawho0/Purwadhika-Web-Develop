// Mutable
// Variable yang Valuenya bisa Berubabh ketika di Copy
console.log('Mutable')
let array1 = ['a','b','c']
let array2 = array1
array2[0] = 'd'
console.log('Array 1:')
console.log(array1)
console.log('Array 2:')
console.log(array2)


// Object
console.log('Object')
let data = {
    nama:'Mustofa',
    hobi:'Ngelamun'
}
let data1 = data
data1.nama = 'Pay'
console.log(data)
console.log(data1)

//Immutable Array
console.log('Immputable Array')
let arr1 = ['BSD', 'JKT', 'BDG']
let arr2 = [...arr1] // (...) Spread Operator // arr2 ['BSD','JKT','BDG']
arr2[1] = 'SBY'
console.log(arr1)
console.log(arr2)
