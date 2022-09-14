//import express
let express = require("express")
let mongoose = require('mongoose')
let catalog = require('./catalog')
let cors = require('cors')

//create express app
let app = express()
app.use(express.json())
app.use(cors())

//connect with mongodb
mongoose.connect("mongodb://localhost:27017/ecommerce")
let db = mongoose.connection

db.once("open", ()=>{
    console.log("MongoDB is connected!!!!")
})

//define first end point for get request.
//request method is of type GET
app.get("/", (req, res)=>{
    console.log("I am in get request handler")
    res.json({
        "message":"This is response",
        "type":"GET"
    })
})

//define first end point for POST request.
//request method is of type POST
app.post("/", (req, res)=>{
    console.log("I am in post request handler");
    res.json({
        "message":"This is response",
        "type":"POST"
    })
})

app.get("/welcome", (req, res)=>{
    console.log("I am in get request handler")
    res.json({
        "message":"Welcome to experess API!",
        "type":"GET"
    })
})

app.listen(8888, ()=>{
    console.log("Listening to port:" + 8888)
})


//get all catalog names from mongodb
app.get("/catalog/all", (req, res)=>{
    catalog.find({}, (error, data)=>{
        if(error){
            res.send(error)
        }else{
            res.send(data)
        }
    })
})

//add a new document to mongodb
app.post("/catalog/add", (req, res)=>{
    //console.log(req)
    console.log(req.body)
    let nameReceived =  req.body.name
    let countReceived = req.body.productCount
    let cat = new catalog()
    cat.name = nameReceived
    cat.productCount = countReceived
    cat.save((err, data)=>{
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    })

})

/*
GET -> Retrive the data from the backend using given endpoint
POST -> Add the new data to the backend using given endpoint
PUT -> Update the previously avilable data in the backend using given endpoint
DELETE -> Delete the previously avilable data in the backend using given endpoint
*/