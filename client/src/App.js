import './App.css';
import { Login } from './component/Login';
import { Register } from './component/Register';
import {Routes,Route, Navigate} from "react-router-dom"
import { Dashboard } from './component/Dashboard/Dashboard';
import Home from './Pages/Home';
import Header from "./component/Header"
import Footer from "./component/Footer"
import BuyDuelCard from "./Pages/BuyDuelCard"
import DuelSomeone from './component/DuelSomeone';
import ICOInformation from "./Pages/ICOInformation"
import Marketplace from "./Pages/Marketplace"
import DuelReceived from "./component/DuelReceived"
import DuelAccepted from "./component/DuelAccepted"
import Auction from "./component/Auction"
import Winner from "./Pages/Winner"
import Leaderboard from "./Pages/Leaderboard"
import AboutRules from "./Pages/AboutRules"
import  Thankyou from './Thankyou';
import ShopStreamer from './component/ShopStreamer';
import ShopUniversal from './component/ShopUniversal';
import ShopSeasonal from './component/ShopSeasonal';
import Contactus from './Pages/Contactus';
import { DuelStatus } from './Pages/DuelStatus';
import Pathtolevel from './Pages/Pathtolevel';
import { Loser } from './Pages/Loser';
import Duelsystem from './component/Duelsystem';
import { Decisioninfo } from './component/Decisioninfo';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CardGallery } from './Pages/CardGallery';
import { Admin } from './Admin/Admin';
import { PublicChallenge } from './Pages/PublicChallenge';
import { PublicRecieve } from './Pages/PublicRecieve';
import { Challengedetails } from './Admin/Challengedetails';
// import { AdminLogin } from './Admin/AdminLogin';

function App(){
const allid = []
const [newid, setnewid] = useState([])
const [challengedata,setChallengeData] = useState([])

  const getexpire = async()=>{
    const res = await axios.put("/api/auth/setexpire",{date:Date.now()})
  }

//      const getrecieved=async()=>{
//     const newres = await axios.post("/api/auth/challengestatus",{
//       id:id,  
//       Accept:"pending",
//       result:"pending"
//     });
    
//     if(newres){
//       setChallengeData(newres.data)
//       newres.data.map((items,index)=>{
//       allid.push(items._id)
//       setnewid(allid)
//       const res =  axios.put("/api/auth/addchallenge",{arr:allid,challenges:newres.data})
//     })
//   }
// };


  useEffect(()=>{
    getexpire()
    // getrecieved()
  },[])

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/login" element={<PrivateRoute><Login/></PrivateRoute>}/>
        <Route path ="/register" element={<PrivateRoute><Register/></PrivateRoute>}/>
        <Route path ="/profile" element={<Dashboard/>}/>
        <Route path = "/BuyDuelCard" element = {<BuyDuelCard/>}/>
        <Route path = "/winner/:id/:index" element = {<Winner/>}/>
        <Route path = "/loser/:id/:index" element = {<Loser/>}/>
        <Route path = "/DuelSomeone" element = {<ProtectedRoute><DuelSomeone/></ProtectedRoute>}/>
        <Route path = "/AboutRules" element = {<AboutRules/>}/>
        <Route path = "/Marketplace" element = {<Marketplace/>}/>
        <Route path = "/DuelReceived" element = {<ProtectedRoute><DuelReceived/></ProtectedRoute>}/>
        <Route path = "/DuelAccepted" element = {<DuelAccepted/>}/>
        <Route path = "/Auction" element = {<Auction/>}/>
        <Route path = "/leaderboard" element = {<Leaderboard/>}/>
        <Route path = "/thankyou" element = {<Thankyou/>}/>
        <Route path = "/shop-streamer" element = {<ShopStreamer/>}/>
        <Route path = "/shop-universal" element = {<ShopUniversal/>}/>
        <Route path = "/shop-seasonal" element = {<ShopSeasonal/>}/>
        <Route path = "/contact-us" element = {<Contactus/>}/>
        <Route path = "/duelstatus" element = {<ProtectedRoute><DuelStatus/></ProtectedRoute>}/>
        <Route path = "/pathtolevel" element = {<Pathtolevel/>}/>
        <Route path = "/duelsystem" element = {<Duelsystem/>}/>
        <Route path = "/decinfo" element = {<Decisioninfo/>}/>
        <Route path = "/cardgallery" element = {<ProtectedRoute><CardGallery/></ProtectedRoute>}/>
        <Route path = "/admin" element = {<Admin/>}/>
        <Route path = "/challengemarketplace" element={<ProtectedRoute><PublicChallenge/></ProtectedRoute>}/>
        <Route path = "/publicrecieve/:id" element={<ProtectedRoute><PublicRecieve/></ProtectedRoute>}/>
        <Route path = "/challengedetails/:id" element={<ProtectedRoute><Challengedetails/></ProtectedRoute>}/>

        {/* <Route path = "/adminlogin" element={<AdminLogin/>}/> */}

        {/* <Route path = "/duelmarket" element = {<ChallengeMarket/>}/> */}
      </Routes>
    <Footer/>
    
    </div>
  );
}


export function ProtectedRoute(props){

  const userdata = localStorage.getItem("nftuser")

  if(userdata)
  {
    return props.children
  }else{
   return <Navigate to="/login"/>
  }

}



export function PrivateRoute(props){
  if(!localStorage.getItem("nftuser")){
    return props.children
  }else{
    return <Navigate to ="/DuelSomeone"/>
  }
}
export default App;
