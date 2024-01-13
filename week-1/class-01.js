// console.log("Hello world");
// Write the program to greet a person given their first and last name
let firstName = "Louis";
let lastName = "Hamilton";




// Write a program that greets a person based on their gender. (If else)
let gender = "male";

if (gender === "male") {
    // console.log(`Hey LEGEND ${firstName+" "+lastName}, You did it! Welcome to Top 1% Men Club`);
}
else {
    console.log(`Hey ${firstName + " " + lastName}, You are not allowed to this club`);
}




// Write a program that counts from 0 - 1000 and prints (for loop)
let sum = 0;
for (let i = 1; i <= 1000; i++) {
    sum += i;
}
// console.log(`The sum till 1000 is ${sum}`);




// Write a program prints all the even numbers in an array
const ages = [77, 26, 11, 38, 35, 40, 54, 61];
for (const personAge of ages) {
    if (personAge % 2 == 0) {
        // console.log(personAge);
    }
}




// Write a program to print the biggest number in an array
let oldestPerson = 0;
for (const personAge of ages) {
    if (personAge > oldestPerson) {
        oldestPerson = personAge;
    }
}
// console.log(`The Oldest member of my family age is ${oldestPerson}`);


// Write a program that prints all the male people’s first name given a complex object 
const users = [
    {
        userName: "Robert",
        age: 22,
        gender: "male"
    },
    {
        userName: "Kyle",
        age: 17,
        gender: "female"
    },
    {
        userName: "Bhupendra",
        age: 32,
        gender: "male"
    },
    {
        userName: "Cheng Zhao",
        age: 52,
        gender: "male"
    }];

for (const user of users) {
    if (user["gender"] == "male") {
        // console.log(user["userName"]);
    }
}




// Write a program that reverses all the elements of an array

const numArray = [12, 2, 32, 13, 4, 26, 10, 7, 62];

let j = numArray.length - 1;
let i = 0;
while (i < j) {
    // Swap 0th index (numArray[i]) with last index (numArray[j])
    let temp = numArray[i];
    numArray[i] = numArray[j];
    numArray[j] = temp;
    i++;
    j--;
}
// console.log(numArray);



// Write a function that finds the sum of two numbers

function findSum(num1, num2,displayResult,displayResultPassive) {
    let result = num1 + num2;
    displayResult(result);
    displayResultPassive(result);
    return result;
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

let ans = findSum(12,21,displayResult,displayResultPassive);
// You are only allowed to call one function after this
// How will you displayResult of a sum

