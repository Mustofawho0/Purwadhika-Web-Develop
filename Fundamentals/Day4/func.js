// FUNCTION

// 1. Build
function lopNum() {
  const n = 10;
  for (i = 1; i <= n; i++) {
    console.log(i);
  }
}
lopNum();

// 2. Call
lopNum();
lopNum();
lopNum();

// FUNCTION TYPE :
// - Function Declaraction
print();
function print() {
  console.log("Hello World 1");
}

// - Function Expression
let output = function () {
  console.log("Hello World 2");
};
output();

// - Arrow Function
let result = () => {
  console.log("Hello World 3");
};
result();

// FUNCTION with PARAMETER

function loop(totalArgument){ // : Parameter
    for (i = 1; i <= totalArgument; i++){
        console.log(i)
    }
}
loop(10) // : Argument

function profile(nama, hobi, alamat){ // Lebih dari 1 para meter
    console.log(`Nama saya ${nama} , Hobi saya ${hobi} , Alamat saya ${alamat}`)
}
profile('Mustofa', 'Bengong', 'TNG') // Urutan dalam pengisian argument harus mengikuti variable / nanti akan menjadi acak

// FUNCTION with RETURN

function Penjumlahan(numPlus, numPlus1) {
    return numPlus + numPlus1;
  }
  function Pengurangan(numMin, numMin1) {
    return numMin - numMin1;
  }
  
  function Calculator(num, num1, operator) {
    if (operator === "+") {
      return Penjumlahan(num, num1);
    } else if (operator === "-") {
      return Pengurangan(num, num1);
    }
  }
  console.log(Calculator(5, 5, "+"));
  
  function Calculator(num2, num3, operator1){
      if(operator1 === '+'){
          console.log(Penjumlahan(num2,num3))
      }else if(operator1 === '-'){
          console.log(Pengurangan(num2,num3))
      }
  }
  Calculator(4,5,'-')

  // FUNCTION with DEFAULT PARAMETER

function PrintOut(name = 'Anonymous'){
    return `Hello my Name ${name}`
}

console.log(PrintOut('Mustofa'))

// FUNCTION with REST PARAMETER

function OutPut (a,b,c,d,...Bebas){
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    console.log(Bebas)
}
OutPut(1,2,3,4,5,6,7,8,9,10)

// CLOSURE FUNCTION : Inner Function yang dapat mengakses Variable di Outer Function

function free(name){
    function free1 (){
        return `My Name is ${name}`
    }
}

// RECURSIVE FUNCTION
// Function Perulangan

function Rec(num){
    console.log(num)
    if(num < 5){
        Rec(num+1)
    }
}

Rec(0)
