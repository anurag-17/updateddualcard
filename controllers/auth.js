const User = require("../models/User");
const Image = require("../models/Image");
const ErrorResponse = require("../utlis/errorresponse.js");
const emailValidator = require("deep-email-validator");
const Challenge = require("../models/challenge");
const catchAsyncError = require("../Errorhandlers/catchAsyncError")
const ErrorHandler = require("../config/errorHandler");
const challenge = require("../models/challenge");
const Notifications = require("../models/Notification")


async function isEmailValid(email) {
  return emailValidator.validate(email);
}

exports.register = catchAsyncError(
   async (req,res, next) => {
    const {
      username,
      email,
      password,
      avatar
    } = req.body;

    const { valid, reason, validators} = await isEmailValid(email);
    if(!username||
      !email||
      !password||!avatar){
        return next(new ErrorHandler("please fill all the inputs"))
    }
    if (password.length < 6) {
return next(new ErrorHandler("password must be 6 characters long",400))
    }
  
      User.findOne({ email }, async (err, user) => {
       if (user) {
        return next(new ErrorHandler("user Already exist",400))
        }
        else if(!valid){
          return next(new ErrorHandler("please enter a valid email",400))
        }
        else {
          const user = await User.create({
            username,
            email,
            password,
            avatar
          });
          sendToken(user, 201, res);
        }
      });
  }
)

exports.login = catchAsyncError(
  async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(new ErrorResponse("please provide email&password", 400));
    }
      const user = await User.findOne({ email }).select("+password");
      if (!user) {
        return res.status(500).json("invalid credentials user not found");
      }
      const isMatch = await user.matchPasswords(password);
      if (!isMatch) {
        return res.status(500).json("password is not valid please register");
      }
      sendToken(user, 200, res);
  }
) 

// exports.notification = catchAsyncError(async (req, res, next) => {
//   console.log(req.body)
//   const {} =
//     req.body;


//   let challenge = await Notifications.create({
//     playeronename: playeronename,
//     playertwoname: playertwoname,
//     playeroneuserid:playeroneuserid,
//     playertwouserid:playertwouserid,
//     messages:message,
//   });
// });
const notification = async(playeroneuserid, playertwouserid, playeronename, playertwoname,message,type)=>{
  console.log(playeronename)
  let challenge = await Notifications.create({
    playeronename: playeronename,
    playertwoname: playertwoname,
    playeroneuserid:playeroneuserid,
    playertwouserid:playertwouserid,
    messages:message,
    type:type
  });
}

exports.getusernotification = 
catchAsyncError(
  async(req, res,next) => {
    let userdata = await Notifications.find({playertwouserid:req.body.id});
    let notificationcount = await Notifications.find({playertwouserid:req.body.id,isRead:0}).count();
    let notification = {
      notificationlist:userdata,
      notificationcount:notificationcount
    }
    return res.status(200).json(notification);
  }
)

exports.updatenotificationstatus = 
catchAsyncError(
  async(req, res,next) => {
    let userdata = await Notifications.updateMany(
      {playertwouserid:req.body.id},
      {
isRead:1
      }
      )
    let notificationcount = await Notifications.find({playertwouserid:req.body.id,isRead:0}).count();
    let notification = {
      notificationlist:userdata,
      notificationcount:notificationcount
    }
    return res.status(200).json(notification);
  }
)

exports.isAuthuser =
catchAsyncError(
  async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
      return next(new ErrorResponse("please login to access this resource", 401));
    }
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decodedData.id);
    next();
  }
  )

exports.getdata = 
catchAsyncError(
  async (req, res,next) => {
    let imgdata = await Image.find({userId:req.body._id});
    return res.status(200).json(imgdata);
  }
)

exports.populating = 
catchAsyncError(
  async (req, res,next) => {
    const data = User.find().populate("posts")
    return res.status(200).json(data)
  }
)

exports.getuserdata = 
catchAsyncError(
  async(req, res,next) => {
    let userdata = await User.find({_id:{$ne:req.body.id}});
    return res.status(200).json(userdata);
  }
)

exports.sendchallange = 
catchAsyncError(
  async (req, res,next) => {
    const { recieved, accept, decline } = req.body;
   
    let challenge = await Challenge.create({
      recieved:req.body.recieved,
      player_1_id:req.body.playeroneuserid,
      category:"private",
      player_2_id:req.body.playertwouserid,
      accept,
      decline,
      player_1: [
        {
          text: req.body.playeronetext,
          images:req.body.playerone_url,
          userId:req.body.playeroneuserid,
          name:req.body.playeronename,
          link:req.body.playeronelink,
          gamechoice:req.body.gamechoice
        },
      ],
      player_2: [
        {
          text: req.body.playertwotext,
          images:req.body.playertwo_url,
          userId:req.body.playertwouserid,
          name:req.body.playertwoname,
          link:req.body.playertwolink,
          gamechoice:req.body.gamechoice
        },
      ],
    });

    notification(req.body.playeroneuserid, req.body.playertwouserid, req.body.playeronename, req.body.playertwoname,`${req.body.playeronename} sent you a challenge`,"recieved")
    return res.json(challenge)
  }
  )

  
  exports.publicchallenge= catchAsyncError(
    async (req, res,next) => {
      const { recieved, accept, decline } = req.body;
      const challenge = await Challenge.create({
        recieved:req.body.recieved,
        player_1_id:req.body.playeroneuserid,
        category:"public",
        player_2_id:req.body.playertwouserid,
        accept,
        decline,
        player_1: [
          {
            text: req.body.playeronetext,
            images:req.body.playerone_url,
            name:req.body.playeronename,
            userId:req.body.playeroneuserid,
            link:req.body.playeronelink,
            gamechoice:req.body.gamechoice
          },
        ],
        player_2: [
          {
            text: req.body.playertwotext,
            images:req.body.playertwo_url,
            userId:req.body.playertwouserid,
            name:req.body.playertwoname,
            link:req.body.playertwolink,
            gamechoice:req.body.gamechoice
          },
        ],
      });
      return res.json(challenge)
    }
  )


  exports.playertwoid= catchAsyncError(
    async(req,res,next)=>{
      const update = await Challenge.findByIdAndUpdate(req.body.challengerid,{
        Accept:req.body.Accept,  
        player_2_id:req.body.playertwoid,
        player_2:[
        {
          images:req.body.playertwo_url,
          name:req.body.name,
          text:req.body.text,
          gamechoice:req.body.gamechoice
        },
      ],
    })
      return res.status(200).json(update)
    }
  
  )


exports.getchallenge =
catchAsyncError(
  async(req,res,next)=>{
  const challengedata = await Challenge.find({
  $or:[
    {player_1_id:req.body.id},  
    {player_2_id:req.body.id}
    ],
    Accept:req.body.Accept,
    result:req.body.result
  })
  return res.json(challengedata) 
  }
  )

exports.getrecieved = 
catchAsyncError(
  async(req,res,next)=>{
    const data = await Challenge.find({player_2_id:req.body.id,Accept:req.body.Accept,result:req.body.result,category:"private"})
    return res.json(data)
  }
  )


  exports.getallchallenge = 
  catchAsyncError(
    async(req,res,next)=>{
      const data = await Challenge.find()
      return res.json(data)
    }
    )

exports.acceptChallenge = catchAsyncError(
  async(req,res,next)=>{
    const update = await Challenge.findByIdAndUpdate(req.body.challengerid,{
      Accept:req.body.Accept,  
      player_2:[
      {
        images:req.body.playertwo_url,
        name:req.body.name,
        text:req.body.text,
        gamechoice:req.body.gamechoice
      },
    ],
  })
  notification(req.body.playertwoid, req.body.playeroneid, req.body.name,req.body.playeronename,`${req.body.name} Accepted your challenge`,"Accepted")
    return res.status(200).json(update)
  }

) 

exports.declineChallenge = catchAsyncError(
  async(req,res,next)=>{
    const update = await Challenge.findByIdAndUpdate(req.body.challengerid,{Accept:"decline"})
    return res.json(update)
  }
)

exports.challengeStatus = catchAsyncError(
async(req,res,next)=>{
  const status = await Challenge.find({
    $or:[
    {player_1_id:req.body.id},
    {player_2_id:req.body.id}
    ],
    category:"private"
  })
  return res.json(status)
}
)

exports.getwinner  = catchAsyncError(
  async(req,res,next)=>{
     const winner = await Challenge.find({_id:req.body.id,result:req.body.result})
     return res.status(200).json(winner)
  }
)

exports.setwinner=catchAsyncError(
  async(req,res,next)=>{
    if( req.body.index ===1){
      const winstatus=await challenge.findByIdAndUpdate(req.body.id,{
        result:req.body.result,
        player_1_decision:req.body.decision,
        createdAt:req.body.createdAt,
        expiresAt:req.body.expiresAt
      })
      return res.status(200).json(winstatus)
    }
    else if( req.body.index ===2){
      const winstatus=await challenge.findByIdAndUpdate(req.body.id,{
        result:req.body.result,
        player_2_decision:req.body.decision,
        createdAt:req.body.createdAt,
        expiresAt:req.body.expiresAt
      })
      return res.status(200).json(winstatus)
    }
  }

)

exports.setwinlose=catchAsyncError(
  async(req,res,next)=>{
    const losestatus = await challenge.findByIdAndUpdate(req.body.id,{
    winner:req.body.winner,
    loser:req.body.loser,
    result:req.body.result,
    createdAt:req.body.createdAt,
    expiresAt:req.body.expiresAt
  })
    return res.status(200).json(losestatus)
  }
)

exports.setexpire = catchAsyncError(
  async(req,res,next)=>{
    const expiry = await challenge.updateMany(
      {expiresAt:{$lt:req.body.date},result:"pending"},
      {$set:{result:"Manual Review"}}
      )

      return res.status(200).json(expiry)
  }
)

exports.countwinlose = catchAsyncError(
  async(req,res,next)=>{
    const counting = await Challenge.find({ $or:[
    {winner:req.body.user},  
    {loser:req.body.user}
    ]})

return res.status(200).json(counting)

  }
)


exports.updateimage= catchAsyncError(
  async(req,res,next)=>{
const delimage = await Image.updateMany({
  url:{$in:req.body.arr}
},
  {$set:{userId:req.body.id}}
  )
return res.status(200).json(delimage)
  }
)

exports.winning = catchAsyncError(
  async(req,res,next)=>{

    console.log(req.body.id)
    console.log(req.body.losid)
    console.log(req.body)
    return

    const win = await User.findByIdAndUpdate(req.body.id,{
      $inc:{
        winning:1
      }    
    })
    const lose = await User.findByIdAndUpdate(req.body.loseid,{
      $inc:{
        losing:1
      }
    })
    return res.status(200).json(win)
  }
)

exports.losing = catchAsyncError(
  async(req,res,next)=>{
    console.log(req.body.id)
    console.log(req.body.winid)
    console.log(req.body)
    let lose;
    if (req.body.id.match(/^[0-9a-fA-F]{24}$/)) {
      console.log("here")
     lose = await User.findByIdAndUpdate(req.body.id,
      {
        $inc:{
          losing:1
        }
      }, 
      )
    }
      const win = await User.findByIdAndUpdate(req.body.winid,{
        $inc:{
          winning:1
        }
      })

      return res.status(200).json(lose)
  }
)

exports.addwinimage = catchAsyncError(
  async(req,res,next)=>{
    const winimage = await User.updateMany(
      {_id:req.body.id},
     {$push:{
      wonimages:{$each:req.body.arr}
    }}
      )
      return res.status(200).json(winimage)
    }
)

exports.addchallenge = catchAsyncError(
  async(req,res,next)=>{
    console.log(req.body.arr);
    const setchallenge = await User.updateMany({
      _id:{$in:req.body.arr}
    },
    {$push:{challenges:req.body.challenges}}
    )
    return res.status(200).json(setchallenge)
  }
)

exports.addnewchallenge  = catchAsyncError(
  async(req,res,next)=>{
    const setchallenge = await get
  }
)



//forget password
// exports.forgetpassword = async (req, res, next) => {
//   const { email } = req.body;

//   const user = await User.findOne({ email });
//   if (!user) {
//     return next(new ErrorResponse("Email could not br sent", 404));
//   }
//   const resetToken = user.getresetPasswordToken();
//   await user.save({ validateBeforeSave: false });

//   const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;
//   const message = `you have requested a  password reset
//     please go to this link to reset your password
//     ${resetUrl}`;

//   try {
//     await sendEmail({
//       email: user.email,
//       subject: "password reset request",
//       message,
//     });
//     res
//       .status(200)
//       .json({
//         success: true,
//         data: `email sent to ${user.email} successfully`,
//       });
//   } catch (error) {
//     user.resetPasswordToken = undefined;
//     user.resetPasswordExpire = undefined;
//     await user.save();
//     return next(new ErrorResponse("Email could not be send", 500));
//   }
// };

//  // Reset Password

// exports.resetPassword = async (req, res, next) => {
//   // Compare token in URL params to hashed token
//   const resetPasswordToken = crypto
//     .createHash("sha256")
//     .update(req.params.resetToken)
//     .digest("hex");

//   try {
//     const user = await User.findOne({
//       resetPasswordToken,
//       resetPasswordExpire: { $gt: Date.now() },
//     });
//     console.log(user);

//     if (!user) {
//       return next(new ErrorResponse("Invalid Tok    en", 400));
//     }

//     user.password = req.body.password;
//     user.resetPasswordToken = undefined;
//     user.resetPasswordExpire = undefined;

//     await user.save();

//     res.status(201).json({
//       success: true,
//       data: "Password Updated Success",
//       token: user.getSignedToken(),
//     });
//   } catch (err) {
//     next(err);
//   }
// };

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  //options for cookies
  const options = {
    expire: new Date(Date.now + 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  res.status(statusCode).cookie("token",token,options).json({
    success: true,
    user,
    token,
  });
};
