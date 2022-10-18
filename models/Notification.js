const mongoose = require("mongoose")

const notification = new mongoose.Schema({

    playeronename:{
    type:String,
    required:true
},

playertwoname:{
    type:String,
    required:true,
},
messages:{
    type:String,
    
}

})

const Notifications = mongoose.model("notification",notification)
module.exports = Notifications