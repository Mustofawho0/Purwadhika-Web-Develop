// 1
function ObjectEqual(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    if (typeof object1[key] === "") {
      if (!ObjectEqual(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
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
    if (interObject2.hasOwnProperty(key)) {
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
