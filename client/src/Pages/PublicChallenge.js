import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./PublicChallenge.css"

export const PublicChallenge = () => {
const [allchallenge,setAllChallenge] = useState([])

const data = JSON.parse(localStorage.getItem("nftuser"))
const navigate = useNavigate()

const getallchallenge = async()=>{
  const res = await axios.get("/api/auth/getallchallenge")

  if(res){
  const filtered =  res.data.filter((items,index)=>{
    return  items.category==="public"&&items.player_1_id !==data._id
    })
   setAllChallenge(filtered)
  }
  
}

useEffect(()=>{
getallchallenge()
},[])

  return (
 <div style = {{height:"100vh"}} className='container'>
 <div className="public-container">
 <table className='table table-bordered table-top'>
<thead>
<tr style = {{color:"white"}}>
    <th>Username</th>
    <th>Twitch/Youtube</th>
    <th>Game of Choice</th>
    <th>Terms</th>
</tr>

</thead>
<tbody>
  {
    allchallenge.map((items,index)=>{
      console.log(items._id)
    return(
  <tr style = {{"cursor":"pointer"}} onClick={()=>{navigate(`/publicRecieve/${items._id}`)}}>
  <td>{items.player_1[0].name}</td>
  <td>{items.player_1[0].link}</td>
  <td>{items.player_1[0].gamechoice}</td>
  <td>{items.player_1[0].text}</td>
  </tr>
    )
    })
  }
</tbody>

 </table>
 </div>

 </div>
  )
}
