let http= require("http")
let fs = require("fs")

let server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type":"text/html"})
    //read file
    fs.readFile("hello.txt", (error, data)=>{
        if(error){
            throw error
        }
        console.log("File read is success!")
        let content = data.toString()
        res.write(content)
        res.end()
    })
    
})
let PORT = 8888
server.listen(PORT, ()=>{
    console.log("Listening on port: " + PORT)
})