const prompt = require('prompt-sync')()


let n = parseInt(prompt('Input number to find the sum of all numbers till n? '))
console.log(`Find sum of all all numbers till ${n} `) 
let sum =0

function sumTillNRecursive(num){
    if(num == 0){
        return num
    }

    sum = num + sumTillNRecursive(num - 1)
    return sum

}

sum  = sumTillNRecursive(n) // 10
console.log(sum)