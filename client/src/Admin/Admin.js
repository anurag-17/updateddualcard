import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Card } from './Card';


export const Admin = () => {
    const [usercount,setUserCount] = useState()
    const [userdata,setuserdata] =useState([])
    const [allchallenge, setAllchallenge] = useState([])

    const getuserdata = async()=>{
        const res = await axios.post("/api/auth/getuserdata");
        setuserdata(res.data)
        setUserCount(res.data.length)
    }

    const getallchallenges = async()=>{

      const res = await axios.get("/api/auth/getallchallenge")
      setAllchallenge(res.data)
  
    }

    useEffect(()=>{
     getuserdata()
     getallchallenges()
    },[])

  return (
    <div style = {{width:"100%",height:"100vh"}}>

      <div className="challengetable">

<table>

</table>

      </div>

{/* <div style  = {{minHeight:"90vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
<Card user={usercount} title = "Users" subtitle = "Registered"/>
<Card user={allchallenge.length} title="Challenges"/>
<Card />
<Card/>
</div> */}
<div style = {{display:"flex",justifyContent:"center"}}>
<table style = {{width:"70%",justifyContent:"center",border:"none"}} className='table table-borderless'>

<thead style = {{color:"white"}}>
    <tr>
  <th>Users</th>
  <th>Email</th>
  <th>Avatar</th>
  <th>Winning</th>
  <th>Losing</th>
  {/* <th>Manual Reviews</th> */}
  {/* <th>Challenges Won</th>
  <th>Challenges Lost</th> */}
    </tr>

</thead>

<tbody>
{
    userdata.map((items,index)=>{
        return(
<tr>
<td>{items.username}</td>
<td>{items.email}</td>
<td><img style = {{width:"9%"}} src = {items.avatar}/></td>
<td>{items.winning}</td>
<td>{items.losing}</td>
{

}

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

