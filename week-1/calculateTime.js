// Calculate the time it takes between a setTimeout call and the inner function actually running

let startTime = new Date().getTime();
setTimeout(()=>{
    let endTime = new Date().getTime();
    console.log("Hello, world");
    console.log(`Time taken to run ${(endTime-startTime)/1000} seconds`);
},1000);
