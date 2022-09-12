const prompt = require('prompt-sync')()


let n = parseInt(prompt('Input number to find the sum of all numbers till n? '))
console.log(`Find sum of all all numbers till ${n} `) 
let sum =0
while(n>0){
    sum  = sum  + n
    n--
}

console.log(`Sum is ${sum}`)

/*

sum(10) = 10 + sum(9)

sum(9)= 9 + sum(8)

*/