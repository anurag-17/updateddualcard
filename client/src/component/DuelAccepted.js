import React, { useState, useEffect } from "react";
import "./DuelAccepted.css";
import axios from "axios"; 
import {useNavigate } from "react-router-dom";
import { Loader } from "./Loader";
import {Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";


export const DuelAccepted = () => {
  const navigate = useNavigate()
  const [challengedata, setchallengedata] = useState([]);
  const [challengeid, setChallengeId] = useState("");
  const [player1,setplayer1] = useState("")
  const [player2,setplayer2] = useState("")
  const [loader, setLoader] = useState(true);
  const [expiredate,setexpiredate]  = useState(false)
  const [lastdate,setLastDate] = useState()
  const [disable,setdisable] = useState(false)
  const data = JSON.parse(localStorage.getItem("nftuser"));
  const id = data._id;

  const getrecieved=async()=>{
    const newres = await axios.post("/api/auth/challengedata", {
      id:id,  
      Accept:true,
      result:"pending"
    });
    if(newres){
      setLoader(false)
    }
    setchallengedata(newres.data);
  

    newres.data.map((items, index)=>{
      console.log(items)
     setLastDate(new Date(items.createdAt).getTime()+259200000)
//  let jsondate =new Date(expire).toJSON()
//  console.log(jsondate)
      setChallengeId(items._id);
      setplayer1(items.player_1_id)
      setplayer2(items.player_2_id)
    });

  };

  useEffect(() => {
    getrecieved();
  },[expiredate]);


const handlewin=async(e)=>{
     setLoader(true)
     setdisable(true)
     if(player1===data._id){
      const expiry = Date.now()+259200000
      // const expiry = Date.now()+30000
       const res = await axios.put("/api/auth/winnerstatus",{id:e.target.name,result:"pending",decision:"winner",index:1,expiresAt:expiry,createdAt:new Date().getTime()})
       if(res.data.player_1_decision||res.data.player_2_decision!==null){
        const res = await axios.put("/api/auth/setwinlose",{id:e.target.name,result:"declare",winner:player1,loser:player2,createdAt:null})
     if(res.data.player_1_decision===res.data.player_2_decision){
      const res = await axios.put("/api/auth/setwinlose",{id:e.target.name,result:"Manual Review",loser:null,winner:null,createdAt:null})
       navigate("/decinfo")
      }else{
        navigate(`/winner/${e.target.name}/player_${e.target.value}`)
      }
        }else{
          navigate("/decinfo")
        }
     }else{
      const expiry = Date.now()+259200000
      const res = await axios.put("/api/auth/winnerstatus",{id:e.target.name,result:"pending",decision:"winner",index:2,expiresAt:expiry,createdAt:new Date().getTime()})
      if(res.data.player_1_decision||res.data.player_2_decision!==null){
        const res = await axios.put("/api/auth/setwinlose",{id:e.target.name,result:"declare",winner:player2,loser:player1,createdAt:null})
      console.log(res.data)
      if(res.data.player_1_decision===res.data.player_2_decision){
        const res = await axios.put("/api/auth/setwinlose",{id:e.target.name,result:"Manual Review",loser:null,winner:null,createdAt:null})
         navigate("/decinfo")
        }else{
          navigate(`/winner/${e.target.name}/player_${e.target.value}`)
        }
        }else{
          navigate("/decinfo")
        }
     } 
     setLoader(false)
  }
  const handlelose  = async(e)=>{
    setLoader(true)
    setdisable(true)
    if(player1===data._id){
      const expiry = Date.now()+259200000
      const res=await axios.put("/api/auth/winnerstatus",{id:e.target.name,result:"pending",decision:"loser",index:1,expiresAt:expiry,createdAt:new Date().getTime()})
      console.log(res.data)
      if(res.data.player_1_decision||res.data.player_2_decision!==null){
        const res = await axios.put("/api/auth/setwinlose",{id:e.target.name,result:"declare",loser:player1,winner:player2,createdAt:null})
    if(res.data.player_1_decision===res.data.player_2_decision){
      const res = await axios.put("/api/auth/setwinlose",{id:e.target.name,result:"Manual Review",loser:null,winner:null,createdAt:null})
      navigate("/decinfo")
    }else{
      navigate(`/loser/${e.target.name}/player_${e.target.value}`)
    }
        }else{
          navigate("/decinfo")
        }
    }else{
      const expiry = Date.now()+259200000
     const res = await axios.put("/api/auth/winnerstatus",{id:e.target.name,result:"pending",decision:"loser",index:2,expiresAt:expiry,createdAt:new Date().getTime()})
     console.log(res.data)
     if(res.data.player_1_decision||res.data.player_2_decision!==null){
      const res = await axios.put("/api/auth/setwinlose",{id:e.target.name,result:"declare",loser:player2,winner:player1,createdAt:null})
      console.log(res.data)
      if(res.data.player_1_decision===res.data.player_2_decision){
      const res = await axios.put("/api/auth/setwinlose",{id:e.target.name,result:"Manual Review",loser:null,winner:null,createdAt:null})
       navigate("/decinfo")
      }else{
        navigate(`/loser/${e.target.name}/player_${e.target.value}`)
      }
      }else{
        navigate("/decinfo")
      }
    } 
    setLoader(false)
  }
  return (
    <div>
        <div className="duelacept-sec">
          <div className="container">
            <div className="section-title">
              <h2 className="body-main">Duel Accepted</h2>
            </div>
            {loader ? (
        <Loader />
      ) : (
            <div className="row duelat-main">
              {challengedata.map((items, index) => {
                return (
                  <React.Fragment key={items._id}>
                  <h1 style ={{color:"white",textAlign:"center",marginTop:"80px",marginBottom:"20px"}}>Challenge{index+1}</h1>
                  
                    <div className="col-md-5 col-sm-5">
                      <div className="dA-left">
                        <div className="dA-profile">
                          <div className="clearfix">
                            <button type="button" className="btn float-end">
                            <img style={{marginRight:"8px"}} src="/tabicon8.png" alt="img" />
                              {items.player_1[0].name}
                            </button>
                            <span style ={{color:"white",marginRight:"10px"}}>Challenger</span>
                          </div>
                          <div className="dA-slider">
                          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Pagination,Navigation]}
        className="mySwiper"
      >

{items.player_1[0].images.map((items, index) => {
                                return (
                                  <SwiperSlide key = {index}>
                                    <img
                                      className="d-block w-100"
                                      src={items}
                                      alt="First slide"
                                    />
                                    </SwiperSlide>
                                );
                              })}
       
      </Swiper>

                          
                          </div>
                          <div className="select-btn">
                            <button className="hero-btn" style={{zIndex:1}}>
                              {" "}
                              <span >{items.player_1[0].images.length}</span>
                              selected
                            </button>
                          </div>
                        </div>
                      </div>
                          
                    </div>
                    <div className="col-md-2 col-sm-2 duelA-center">
                      <img src="/VS icon.png" alt="img" />
                    </div>
                    <div className="col-md-5 col-sm-5">
                      <div className="dA-left">
                        <div className="dA-profile">
                        <div className="clearfix">
                            <button type="button" className="btn float-end">
                            <img style={{marginRight:"8px"}} src="/tabicon9.png" alt="img" />
                              {items.player_2[0].name}
                            </button>
                            <span style ={{color:"white",marginRight:"10px"}}>Reciever</span>
                          </div>
                          <div className="dA-slider">
                          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

{items.player_2[0].images.map((items, index) => {
                                return (
                                  <SwiperSlide key= {index}>
                                    <img
                                      className="d-block w-100"
                                      src={items}
                                      alt="First slide"
                                    />
                                    </SwiperSlide>
                                );
                              })}
       
      </Swiper>
                          </div>
                          <div className="select-btn">
                            <button style = {{zIndex: 1}} className="hero-btn">
                              {" "}
                              <span >{items.player_2[0].images.length}</span>selected
                            </button>
                          </div>
                          <div className="btn-duel-right winner-btn">
                        
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="btn-duel-right winner-btn">
                      {id === challengedata[0].player_1_id ? (<>
                        <button  id = "winner-btn" value="2" name={items._id} onClick={handlewin} className="hero-btn">Winner</button>
                        <button id = "winner-btn" onClick={handlelose} value="1" name={items._id} className="hero-btn">Loser</button></>) : ("")}

                      {id === challengedata[0].player_2_id ? (<>
                        <button  id = "winner-btn" value="1" name={items._id} onClick={handlewin} className="hero-btn">Winner</button>
                        <button id = "winner-btn" value="2" name={items._id} onClick={handlelose} className="hero-btn">Loser</button>

                      </>
                      ) : ("")}
                      </div>
                  </React.Fragment>
                      );
                    })}
            </div>
            )}
          </div>
        </div>
    </div>
  );
};

export default DuelAccepted;
