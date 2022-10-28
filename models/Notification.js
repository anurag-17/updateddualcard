const mongoose = require("mongoose")

const notification = new mongoose.Schema({

    playeroneuserid:{
type:String,

    },

    playertwouserid:{
        type:String,
            },

    playeronename:{
    type:String,

},

playertwoname:{
    type:String,
},
messages:{
    type:String,
    
},
isRead:{
    type:Number,
    default:0
},
type:{
    type:String,
},
seenBy:{
    type:Array,
}

})

const Notifications = mongoose.model("notification",notification)
module.exports = Notifications