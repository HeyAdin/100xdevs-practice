function myAsyncFunc(){
    return new Promise(function(resolve){
       resolve("Hello")
    });
}

function myAsyncFunc2(){
    return new Promise(function(resolve){
        setTimeout(()=>{
       resolve("Hello+")
        },5000);
    });
}

async function main(){
    let value = await myAsyncFunc()
    console.log("Hello after await");
    console.log(value);
    let value2 = await myAsyncFunc2();
    console.log(value2);
}
console.log("Before main ")
main();