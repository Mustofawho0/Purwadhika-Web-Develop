// ASYNCHRONOUS
console.log("Run-01");
setTimeout(() => {
  console.log("Run-02");
}, 3000);
console.log("Run-03");

// Case.
// Detele Data ---> 3s
// Show Newest Data

let nums = [1, 2, 3, 4, 5, 6];

function HapusData(callback) {
  setTimeout(() => {
    nums.pop();
    callback();
  }, 3000);
}
function ShowData() {
  // console.log(nums)
  setTimeout(() => {
    console.log(nums);
  }, 5000);
}
HapusData(ShowData);
