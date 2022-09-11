
//import http package
let http = require("http")

//use http to create server
//createServer will create the server using call back function
//callback function does the actual job
//below, call back function is implemented using
//non-name/ghost/anonymous function
let firstServer = http.createServer((request, response)=>{
     //console.log(request)
     response.writeHead(200, {"Content-Type":"text/html"})
     response.write("<h1>Hello from node server</h1>")
     response.write("<ol>")
     response.write("<li>HTML</li>")
     response.write("<li>CSS</li>")
     response.write("<li>JS</li>")
     response.write("<li>React</li>")
     response.write("</ol>")
     response.end()
})

firstServer.listen(8181)

// function (){
//     //some code
//     //some code
// }

// const iAmArrowFunction = ()=>{
//      //some code
//      //some code
// }
