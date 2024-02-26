// .forEach, .map, .filter
// .forEach : Tidak menghasilkan array baru
// .map & .filter : Menghasilkan array baru

const num = ["A","B","C","D"]
num.forEach((item,index)=> {
    item = item + 'A'
    // console.log(index)
})
console.log(num)

const newNumber2 = num.map((_, index) => {
    return _ === 'B'
})
console.log(newNumber2)

const newNumber3 = num.filter((item, index) =>{
    return item === 'A'
})
console.log(newNumber3)