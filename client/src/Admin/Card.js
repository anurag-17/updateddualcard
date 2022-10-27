import axios from 'axios'
import React from 'react'

export const Card = (props) => {

  return (
<div className="card mx-3 my-5" style={{width:"40rem",height:"20rem",background:"rgb(67 54 179)",marginTop:"10rem",borderRadius:"20px",textAlign:"center",alignItems:"center"}}>
  <div style = {{color:"white"}} className="card-body">
     <h3 style = {{marginBottom:"30px"}}>{props.title}</h3>
    <h3 className="card-subtitle mb-2">{props.name}</h3>
     <h4> Result:{props.result}</h4>
    <div style = {{display:"flex",justifyContent:"space-between",width:"360px",margin:"auto"}}>
    <h6 style={{color:"white"}}>Terms : {props.terms}</h6>
    <h6 style={{color:"white"}}> GameChoice : {props.gamechoice}</h6>
    </div>
    <div style = {{display:"flex",justifyContent:"space-between",width:"250px",margin:"auto"}}>
    <h6 style={{color:"white"}}>Winner : {props.winner}</h6>
    <h6 style={{color:"white"}}>Loser : {props.loser}</h6>
    </div>
  </div>
</div>
  )
}
