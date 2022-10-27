const express = require("express");

const router = express.Router();

const{ register, login,getdata, getuserdata,sendchallange, getchallenge, getrecieved, acceptChallenge, challengeStatus, declineChallenge, getwinner, setwinner, countwinlose,updateimage,setwinlose, setexpire, addwinimage, addchallenge, addloseimage, getallchallenge, notification, winning, losing, publicchallenge, populating, playertwoid}= require('../controllers/auth');
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/getdata").post(getdata)
router.route("/getuserdata").post(getuserdata)
router.route("/sendchal").post(sendchallange,notification)
router.route("/publicchallenge").post(publicchallenge)
router.route("/setplayertwo").put(playertwoid)
router.route("/challengedata").post(getchallenge)
router.route("/recievedchallenge").post(getrecieved)
router.route("/acceptChallenge").put(acceptChallenge)
router.route("/challengestatus").post(challengeStatus)
router.route("/declinechallenge").put(declineChallenge)
router.route("/winnerchallenge").post(getwinner)
router.route("/winnerstatus").put(setwinner)
router.route("/setwinlose").put(setwinlose)
router.route("/countwinlose").post(countwinlose)
router.route("/updateimage").put(updateimage)
router.route("/setexpire").put(setexpire)
router.route("/addwinimage").put(addwinimage)
router.route("/winning").put(winning)
router.route("/losing").put(losing)
router.route("/addchallenge").put(addchallenge)
router.route("/getallchallenge").get(getallchallenge)
router.route("/populate").get(populating)
// router.route("/forgetpassword").post(forgetpassword);

// router.route("/resetpassword/:resetToken").post(resetpassword);

module.exports=router



