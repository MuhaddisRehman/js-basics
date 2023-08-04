let p = new Promise((resolve, reject) => {
  let a = 2 + 1;
  if (a === 2) {
    resolve("Succeeded");
  } else {
    reject("Failed");
  }
});

p.then((message) => {
  console.log("It", message);
}).catch((message) => {
  console.log("It", message);
});
