let arr = ["A", "B", "C"];

function addData(huruf) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      arr.forEach((item) => {
        if (item.toLowerCase() === huruf.toLowerCase()) {
          reject("Huruf sudah terdaftar!");
        }
      });
      //   if (!arr.includes(huruf)) {
      //     arr.push(huruf);
      //   } else {
      //     console.log(`Huruf ${huruf} sudah terdaftar`);
      //   }
      arr.push(huruf);
      resolve();
    }, 2000);
  });
}

function ShowData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arr);
    }, 1000);
  });
}

async function Main() {
  try {
    await addData("D");
    await addData("d");
    await addData("E");
    const res = await ShowData();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
Main();
