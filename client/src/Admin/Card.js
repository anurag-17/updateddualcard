import axios from 'axios'
import React from 'react'

export const Card = (props) => {

  return (
<div className="card mx-3 my-5" style={{width:"16rem",height:"13rem",background:"rgb(67 54 179)",marginTop:"10rem",borderRadius:"20px",textAlign:"center",alignItems:"center"}}>
  <div style = {{marginTop:"30px",color:"white"}} className="card-body">
     <h3>{props.user}</h3>
    <h5 className="card-subtitle mb-2">{props.subtitle}</h5>
     <h4 style={{color:"white"}}>{props.title}</h4>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
  </div>
</div>
  )
}
