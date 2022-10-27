import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card } from './Card'

export const Challengedetails = () => {
  const [allchallenge,setAllchallenge] = useState([])

  const {id} = useParams()

  
  const getallchallenges = async () =>{
    const res = await axios.get("/api/auth/getallchallenge")
    if(res){
      setAllchallenge(res.data.filter((items,index)=>items._id===id)) 
    }
  }

useEffect(()=>{
getallchallenges()
},[])

  return (
   <>
<div style={{minHeight:"90vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
  {
    allchallenge.map((items,index)=>{
      console.log(items)
      return(
        <>
        <Card winner ={items.player_1_id===items.winner?items.player_1[0].name:""} loser = {items.player_1_id===items.loser?items.player_1[0].name:""} result = {items.result} title= "Challenger" name = {items.player_1[0].name} terms ={items.player_1[0].text} gamechoice ={items.player_1[0].gamechoice}/>
        <Card winner ={items.player_1_id===items.winner?items.player_1[0].name:""} loser = {items.player_1_id===items.loser?items.player_1[0].name:""} result = {items.result} title= "Reciever" name = {items.player_2[0].name}   terms = {items.player_2[0].text} gamechoice = {items.player_2[0].gamechoice}/>
        </>
      )
    })
  }

</div>
   </>
  )
}
