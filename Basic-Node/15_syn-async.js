console.log("project 1");

console.log("project 2");

setTimeout(() => {
    console.log("project 3");   
}, 2000);

console.log("process 4");

let num1 = 10
let num2 = 20
let ans= 0

console.log(num1);

console.log(num2);

setTimeout(() => {
    ans = num1 + num2
    console.log(ans);
    
}, 2000);

console.log(ans);