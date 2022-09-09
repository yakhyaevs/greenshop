console.log("started...");
new Promise((reject, resolve) => {
  reject("Welcome to");
}).then((value) => console.log(value));
console.log("ended...");
