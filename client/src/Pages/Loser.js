import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Winner.css";
import axios from "axios";
import { Loader } from "../component/Loader";

export const Loser = () => {
  const { id, index } = useParams();
  const [images, setImages] = useState([]);
  const [aadil, setaadil] = useState([]);
  const [loader, setLoader] = useState(true);
 const [loseid,setloseid] = useState("")
  const storagedata =JSON.parse(localStorage.getItem("nftuser")) 

  const getwinner = async () => {
    const res = await axios.post("/api/auth/winnerchallenge",{id:id,result:"declare"});
    console.log(res)
    if(res){
      images.push(res.data[0]);
      setLoader(false)
    if (index === "player_1") {
      setaadil(images[0].player_1[0].images);
  }
  if (index === "player_2") {
      setaadil(images[0].player_2[0].images);
  }

  res.data.map((items,index)=>{
    if(items.player_1_id === storagedata._id){
      setloseid(items.player_2_id)
    }else{
      setloseid(items.player_1_id)
    }
  })
  
  const replaceimage = await axios.put("/api/auth/updateimage",{arr:aadil,id:loseid})
  const addwinimages = await axios.put("/api/auth/addwinimage",{arr:aadil,id:loseid})
}

  };
  useEffect(() => {
    getwinner();
  },[id,index,loader]);
    return (
<>
{
  loader?<Loader/>:<>
  <div className='body-main'>
      <div className='winner-sec'>
        <div className='container'>
        <div style={{textAlign:"center"}} className='section-title'>
               <h2>You Lose!</h2>
               <div className='prizeimg'>
                 <img src="/Prize.png" alt="img"/> 
                 <FontAwesomeIcon style = {{fontWeight:"600",height:"120px",color:"red",position:"absolute",left:"47.8%",right:"50%"}} icon={faTimes} />
               </div>
          </div>
          <div style={{position:"relative",bottom:"100px"}}  className='row won-main'>
            <div className='won-grid'>
            {aadil.map((items, i) => {
                return (
                  <div className="wonimg1">
                    <FontAwesomeIcon style = {{zIndex:"100",fontWeight:"600",height:"100px",color:"red",position:"relative",top:"325px"}} icon={faTimes} />
                    <img src={items} alt="img" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className=' won-btn'>
           <div className='btn-duel-right winnerbtn1'>
                   <button className='hero-btn'>CARD GALLERY</button>
           </div>
           <div className='btn-duel-right winnerbtn1'>
            <Link to = "/DuelSomeone">
                   <button className='hero-btn'>DUEL AGAIN</button>
            </Link>
           </div>
           <div  className='btn-duel-right winnerbtn1'>
            <Link to="/Auction">
                   <button style={{width:"61%"}} className='hero-btn'>AUCTION CARDS</button>
            </Link>
           </div>
          </div>
        </div>
        </div>
    </div>
  </>
}
</>
  )
}
