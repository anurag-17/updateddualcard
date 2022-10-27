const mongoose = require("mongoose")

const notification = new mongoose.Schema({

    playeroneuserid:{
type:String,
required:true
    },

    playertwouserid:{
        type:String,
        required:true
            },

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
    
},
isRead:{
    type:Number,
    default:0
}

})

const Notifications = mongoose.model("notification",notification)
module.exports = Notifications