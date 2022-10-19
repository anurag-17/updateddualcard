const mongoose = require("mongoose");

const challengeSchema = new mongoose.Schema({
  recieved: {
    type: String,
    // required: true,
  },
  category:{
    type:String,
  },
  result:{
type:String,
default:"pending"
  },
  player_1_decision:{
    type:String,
    default:null
  },
  createdAt:{
   type:Number,
   default:null
  },
  expiresAt:{
type:Number,
default:null
  },
  player_2_decision:{
    type:String,
    default:null
  },
  winner:{
 type:String,
 defualt:"pending"
  },
loser:{
 type:String,
 defualt:"pending"
  },
  Accept: {
    type: String,
    default:"pending"
    // required: true,
  },
  player_1_id:{
type:String
  },
  player_2_id:{
    type:String
  },

  player_1:[
    {
      text: {
        type: String,
      },
      link:{
        type:String
      },
      images:{
            type:Array,
            required: true,  
        },
        
      userId: {
        type: String,
      },
      status:{
        type:String,
        default:"pending"
      },
      name:{
        type:String
      },
      gamechoice:{
        type:String
      }
    },
  ],
  player_2: [
    {
      text: {
        type: String
      },
      link:{
        type:String
      },
      images:{
        type:Array,
        required: true,  
    },
      userId: {
        type: String
      },
      status:{
        type:String,
        default:"pending"
      },
      name:{
        type:String
      },
      gamechoice:{
        type:String
      }
    },
  ],
});

const challenge = mongoose.model("challenge", challengeSchema);
module.exports = challenge;
