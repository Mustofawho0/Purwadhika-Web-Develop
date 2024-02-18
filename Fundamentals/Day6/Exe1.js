class Data {
  name = "";
  email = "";
  age = 0;
  score = 0;

  constructor(name, email, score) {
    this.name = name;
    this.email = email;
    this.score = score;
  }
  set convertAgetoDate(age) {
    const newAge = new Date(age).getFullYear();
    const now = new Date().getFullYear();

    this.age = now - newAge;
  }
}

let data1 = new Data("Lolo", "BSD", 70);
data1.convertAgetoDate = "1996-08-25";
let data2 = new Data("Lili", "JKT", 80);
data2.convertAgetoDate = "1999-10-08";
let data3 = new Data("Lele", "BDG", 95);
data3.convertAgetoDate = "1997-09-18";

// console.log(data1);

const arrData = [data1, data2, data3];
// console.log(arrData)

function Score(arr) {
  let arrScore = [];
  let totalScore = 0;

  for (let item of arr) {
    arrScore.push(item.score);
    totalScore += item.score;
  }

  return `
        Min = ${Math.min(...arrScore)} \n
        Max = ${Math.max(...arrScore)} \n
        Avg = ${Math.ceil(totalScore / arr.length)}
    `;
}
console.log(Score(arrData));
