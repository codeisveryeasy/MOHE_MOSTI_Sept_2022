let mongoose = require("mongoose")

//create mongoSchema which refers to schema
let mongoSchema = mongoose.Schema

let catalogSchema = new mongoSchema({
    "name": String,
    "productCount": Number
}, {
    collection:"catalog"
})

module.exports = mongoose.model('catalog', catalogSchema)