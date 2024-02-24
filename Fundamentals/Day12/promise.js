// // PROMISE
// function SimplePromise() {
//   return new Promise((resolve, reject) => {
//     // Resolve : Promise Success
//     if (1 === 2) {
//       resolve("Berhasil");
//     } else {
//       reject("Gagal");
//     }
//     // Reject : Promise Failed
//     pending("Tunggu");
//   });
// }
// SimplePromise()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//   .finally((wait)=>{
//     console.log(wait)
//   })

let nums = [1, 2, 3, 4, 5, 6];

function DeteleData() {
  return new Promise((berhasil, gagal) => {
    setTimeout(() => {
      nums.pop();
      berhasil();
    }, 3000);
  });
}

function ShowData() {
  return new Promise((berhasil, gagal) => {
    setTimeout(() => {
      berhasil(nums);
    }, 2000);
  });
}

DeteleData()
  .then((res) => {
    console.log(res);
    return ShowData();
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// PROMISE CHAINING
DeteleData()
  .then(() => {
    return DeteleData();
  })
  .then(() => {
    return DeteleData();
  })
  .then(() => {
    return DeteleData();
  })
  .then((res) => {
    console.log(res);
    return ShowData();
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// ASYNC AWAIT
async function Main() {
  try {
    await DeteleData();
    await DeteleData();
    await DeteleData();
    const res = await ShowData();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
Main();
