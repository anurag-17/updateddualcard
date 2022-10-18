import axios from 'axios';
import React, { useEffect, useState } from 'react'
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
      console.log(res.data[0])

    }

    useEffect(()=>{
     getuserdata()
     getallchallenges()
    },[])

  return (
    <div>

<div style  = {{minHeight:"90vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
<Card user={usercount} title = "Users" subtitle = "Registered"/>
<Card user={allchallenge.length} title="Challenges"/>
<Card />
<Card/>
</div>
<table className='table table-bordered'>

<thead style = {{color:"white"}}>
    <tr>
  <th>Users</th>
  <th>Challenges</th>
  <th>Status</th>

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
<td>{items.challenges.length}</td>


</tr>   
            )
    })
}



</tbody>
</table>
    </div>
  )
}

