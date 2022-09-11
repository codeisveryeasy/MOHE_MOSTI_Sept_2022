let fs = require("fs")

fs.readFile("hello.txt", (error, data)=>{
    if(error){
        throw error
    }
    console.log("File read is success!!!!")
    console.log(data)
    console.log(data.toString())
})