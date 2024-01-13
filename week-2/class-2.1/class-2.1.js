// // Callback Hell
// function myAsyncFunc(callback) {
//     setTimeout(callback, 1000);
// }
// function logFunc() {
//     console.log("first hello after 1sec");
//     setTimeout(function () {
//         console.log("after 2 sec");
//         setTimeout(function () {
//             console.log("Again after 2 sec");
//             setTimeout(function () {
//                 console.log("Again after 2 sec");
//                 setTimeout(function () {
//                     console.log("Again after 2 sec");
//                     setTimeout(function () {
//                         console.log("Again after 2 sec");
//                     }, 2000);
//                 }, 2000);
//             }, 2000);
//         }, 2000);
//     }, 2000);
// }
// myAsyncFunc(logFunc);









// Lets fix this callback hell thingy with promises async and await

// function promisifiedSetTimeout(duration){
//     const p = new Promise(function(resolve){
//         setTimeout(resolve,duration);
//     });
//     return p;
// }
// async function main(){
//     let value = await promisifiedSetTimeout(1000);
//     let date = new Date();
//     let midTime= date.getTime();
//     console.log(midTime-startTime);
//     console.log("Hello")
//     value = await promisifiedSetTimeout(2000);
//     let myDate = new Date();
//     let endTime = myDate.getTime();
//     console.log(endTime-midTime);
//     console.log("Secomf call");
// }
// let date = new Date();
// let startTime = date.getTime();
// main();
// let currentDate =new Date();
// let currentTIme = currentDate.getTime();
// console.log(currentTIme-startTime);
// console.log("JavaScript Architechture");


// .then() chaining

function promisified(duration){
    const p = new Promise(function(resolve){
        setTimeout(resolve,duration);
    });
    return p;
}
function task(str){
    console.log(str);
}
promisified(1000).then(function(){
    task("1st Call");
    return promisified(2000);
}).then(function(){
    task("2nd time call");
});

