// FUNCTION

// 1. Build
function lopNum (){
    const n = 10
    for (i = 1; i <= n; i++){
        console.log(i)
    }
}
lopNum()

// 2. Call
lopNum()
lopNum()
lopNum()

// FUNCTION TYPE :
// - Function Declaraction
print()
function print(){
    console.log('Hello World 1')
}

// - Function Expression
let output = function(){
    console.log('Hello World 2')
}
output()

// - Arrow Function
let result = () => {
    console.log('Hello World 3')
}
result()