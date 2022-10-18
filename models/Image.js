const mongoose = require("mongoose")

const imageschema = new mongoose.Schema({

url:{
    type:String,
    required:true
},

userId:{
    type:String,
    required:true,
}

})

const image = mongoose.model("images",imageschema)
module.exports = image