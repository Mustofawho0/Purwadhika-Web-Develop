console.log(typeof Number("420D"));
console.log(typeof NaN);

const pwd = ["Batam", "BSD", "Jakarta"];
pwd[50] = "Bandung";
console.log(pwd.length);
console.log(pwd.indexOf("Bandung"));

let point = 101;
point + "1";
point++;
point++;
point--;
console.log(point);

const name = "Aboy";
const age = 25;
const score = 90;

if (score > 70) {
  console.log("Ok, Score passed!");
}
if (score >= 80) {
  console.log("Good, Score passed!");
}
if (score >= 90) {
  console.log("Excellent, Score passed!");
}

const dataSiswa = {
  name: "Amel",
  umur: 22,
  noHp: [628123598733, "628523345976"],
};
console.log(dataSiswa.name);
console.log(dataSiswa.nohp);

let std = "GBK";
std += " JKT";
std = "GBT SBY";
console.log(std);

// do {
//   let poin = 77;
//   poin += 1;
//   console.log(poin);
//   poin--;
// } while (poin <= 80);

let printKuy = "Selamat";
if ("0" !== "a") {
  printKuy += " Apa Hayo?";
}
console.log(printKuy);
