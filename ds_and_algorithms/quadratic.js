const prompt = require('prompt-sync')()


let loopcountStr = prompt('How many times do you want to run the loop?')
console.log(`Run loop ${loopcountStr} times`)

console.log(typeof loopcountStr)

let loopCount = parseInt(loopcountStr)
console.log(typeof loopCount)
console.log(`Run loop ${loopCount} times`)

let startTime = new Date().getTime()
let innerLoopCount = 0

while(loopCount > 0){
    innerLoopCount = loopCount
    while(innerLoopCount > 0){
        innerLoopCount--
    }
    loopCount--
}

let endTime = new Date().getTime()

console.log(`Start time:  ${startTime}`)
console.log(`End time:  ${endTime}`)
console.log(`Time taken :  ${endTime-startTime}`)