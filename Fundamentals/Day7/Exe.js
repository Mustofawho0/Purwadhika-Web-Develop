// 1
// function ObjectEqual(object1, object2) {
//   if (Object.keys(object1).length !== Object.keys(object2).length) {
//     return false;
//   }
//   for (let key in object1) {
//     if (typeof object1[key] === "") {
//       if (!ObjectEqual(object1[key], object2[key])) {
//         return false;
//       }
//     } else if (object1[key] !== object2[key]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(ObjectEqual({ a: 1 }, { a: 1 }));
function ObjectEqual(Equalobject1, Equalobject2) {
  //   if (Object.keys(Equalobject1).length !== Object.keys(Equalobject2).length) {
  //     return false;
  //   }
  for (let key in Equalobject1) {
    if (Equalobject2[key] !== Equalobject1[key]) {
      //   if (!ObjectEqual(Equalobject1[key], Equalobject2[key])) {
      //     return false;
      //   }
      // } else if (Equalobject1[key] !== Equalobject2[key]) {
      return false;
    }
  }
  return true;
}
console.log(ObjectEqual({ a: 1 }, { a: 1 }));

// 2
function InterTwoObject(interObject1, interObject2) {
  let result = {};
  for (let key in interObject1) {
    if (interObject2[key] === interObject1[key]) {
      result[key] = interObject1[key];
    }
  }
  return result;
}
const interObject1 = { a: 1, b: 2 };
const interObject2 = { a: 1, c: 3 };

const hasil = InterTwoObject(interObject1, interObject2);
console.log(hasil);
// console.log(InterTwoObject({ a: 1, b: 2 }, { a: 1, c: 3 }));

// 3

// function MergeArr(mergeArr, newMergeArr) {
//   let merge = {};
//   if (!mergeArr.includes(newMergeArr)) {
//     mergeArr.push(newMergeArr);
//     merge += mergeArr;
//   }
//   return merge;
// }
// const mergeArr = [
//   { name: "Student 1", email: "student1@mail.com" },
//   { name: "Student 2", email: "student2@mail.com" },
// ];
// const newMergeArr = [
//   { name: "Student 1", email: "student1@mail.com" },
//   { name: "Student 3", email: "student3@mail.com" },
// ];

// const hasilMerge = MergeArr(mergeArr, newMergeArr);
// console.log(hasilMerge);

function MergeArray(arr1, arr2) {
  const newArr = [...arr1, ...arr2];
  const array = newArr.filter((student, name, email) => {
    return name === email.findIndex((e) => e.name === student.name);
  });
  return array;
}
const arr1 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
];

const arr2 = [
  { name: "Student 3", email: "student1@mail.com" },
  { name: "Student 2", email: "student3@mail.com" },
];

const newMergeArray = MergeArray(arr1, arr2);
console.log(newMergeArray);

// 4
function SwitchArr(a) {
  for (let i of a) {
    const array1 = Object.entries(i); // cara bikin object menjadi array | i adalah object => hasilnya array
    // bikin variabel "obj"
    // array dari object i
    // console.log("i",i);
    // console.log("array1",array1);

    for (let j of array1) {
      let temp = j[0]; //simpen keys
      j[0] = j[1]; // nuker key jadi value
      j[1] = temp; // nuker value jadi keys
    }
    return [Object.fromEntries(array1)]; // cara bikin array menjadi object | array1 adalah array => hasilnya object
  }
}

const arr = [{ name: "David", age: 20 }];
console.log(SwitchArr(arr));

// 5
function FactirialNum(num) {
  //karakteristik 1 => END POINT // SYARAT UNTUK BERHENTI LOOP
  if (num <= 1) {
    return 1;
  } else {
    return num * FactirialNum(num - 1);
    // 3 * factorial(2)
    //2 * factorial(1)
    // 1 * factorial(0)
    // 1
    // DATA STACK => KALAU KEBANYAKAN MUNCUL ERROR STACK OVERFLOW
  }
}
console.log(FactirialNum(5));
