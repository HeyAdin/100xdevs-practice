// Create a counter in Javascript (counts down from 30 to 0)

// method 1

// let i = 30;
// let countdown =setInterval(()=>{
//     console.log(i);
//     i--;
//     if(i<=-1){
//         clearInterval(countdown);
//     }
// },100);

// method 2

function countdown(){
    for(let i = 30;i>=0; i--){
        setTimeout(()=>count(i),(30-i)*500);
    }
}
function count(i){
    console.log(i);
}
countdown();