// // function findSum(n) {
// //     let ans = 0;
// //     for (let i = 0; i < n; i++) {
// //         ans += i;
// //     }
// //     return ans;
// // }
// // setTimeout(()=>{
// //     console.log(findSum(100));
// // }, 1000)
// // console.log("hello world"); // this is going to log first and then thread will be free and the it will pull back the async task

// // // reading a file from the filesystem is also a async method

// // const fs = require('fs');

// // fs.readFile("./myFile.txt", "utf-8", function(err, data) {
// //   console.log(data);
// // });

// // console.log("Hi there");

// // for(let i = 0; i<100000000; i++){
// //     let ans = 0;
// // }

// // console.log("I am After the Loop")

// // PROMISES

// // my own asynchronous function
// const fs = require('fs');

// // my own asynchronous function
// function adinReads() {
//   return new Promise(function(resolve) {
//     fs.readFile("myFile.txt", "utf-8", (err, data)=>{
//       resolve(data);
//     });
//   })
// }

// // callback function to call
// function onDone(data) {
//   console.log(data)
// }

// adinReads().then(onDone);

let myPromise = new Promise((myData)=>{
    setTimeout(()=>{
        myData("Hello");
    },1000);
});

function onData(){
    console.log(myPromise);
}
console.log(myPromise);
myPromise.then(onData)