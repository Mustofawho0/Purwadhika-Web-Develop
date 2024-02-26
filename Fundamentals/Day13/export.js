// EXPORT
// EXPORT DEFAULT : 1 EXPORT
// EXPORT NAME : MANY EXPORT

// EXPORT DEFAULT
// const name = 'Pay'
// module.exports = name

// EXPORT NAME
// const name = 'Pay'
// const hobby = 'Ngoding'

// module.exports = {
//     name, hobby
// }

// EXPORT NAME FUNCTION
function Print(username){
    return `Hello, ${username}`
}
function Output(){
    console.log('Hello')
}
module.exports = {
    Print,
    Output
}