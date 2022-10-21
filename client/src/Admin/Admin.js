import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Card } from './Card';
import "./Admin.css"

export const Admin = () => {
  const [usercount, setUserCount] = useState()
  const [userdata, setuserdata] = useState([])
  const [allchallenge, setAllchallenge] = useState([])

  const getuserdata = async () => {
    const res = await axios.post("/api/auth/getuserdata");
    setuserdata(res.data)
    setUserCount(res.data.length)
  }

  const getallchallenges = async () => {

    const res = await axios.get("/api/auth/getallchallenge")
    setAllchallenge(res.data.filter((items,index)=>items.category==="private"))
  }
  
  useEffect(() => {
    getuserdata()
    getallchallenges()
  }, [])

  return (
    <div className='container challenge-main' style={{minHeight:"100vh",width:"100%",marginTop:"5rem"}}>
      <div >
        {/* <div style  = {{minHeight:"90vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
<Card user={usercount} title = "Users" subtitle = "Registered"/>
<Card user={allchallenge.length} title="Challenges"/>
<Card />
<Card/>
</div> */}

        <div className='row' style={{ display: "flex", justifyContent: "center" }}>
          <div className="challenge-heading">
            <h1>User Details</h1>
          </div>
          <table style={{width: "69%", justifyContent: "center", border: "none", marginBottom: "3.5rem" }} className='table table-borderless'>

            <thead style={{ color: "white" }}>
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
                userdata.map((items, index) => {
                  return (
                    <tr>
                      <td>{items.username}</td>
                      <td>{items.email}</td>
                      <td><img style={{ width: "9%" }} src={items.avatar} /></td>
                      <td>{items.winning}</td>
                      <td>{items.losing}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>


        <div style={{ display: "flex", justifyContent: "center" }} className="challengetable row">
          <div className="challenge-heading">
            <h1>Challenge Details</h1>
          </div>

          <table style={{ width: "98%", color: "white" }} className='table table-borderless'>
            <thead style={{ textAlign: "center" }}>
              <tr>
                {/* <th>Category</th> */}
                <th>Challenger</th>
                <th>Reciever</th>
                <th>Challenger Terms</th>
                <th>Reciever Terms</th>
                <th>challenger Game of choice
                </th>
                <th>Reciever Game of choice
                </th>
                <th>Challenge Status
                </th>
                <th>Winner</th>
                <th>Loser</th>
                <th>Game Link</th>
                {/* <th>Reciever Link</th> */}

              </tr>
            </thead>

            <tbody>
              {
                allchallenge.map((items, index) => {
                  return (
                    <tr>
                      {/* <td>{items.category}</td> */}
                      <td>{items.player_1[0].name}</td>
                      <td>{items.player_2[0].name}</td>
                      <td>{items.player_1[0].text}</td>
                      <td>{!items.player_2[0].text ? "no terms yet" : items.player_2[0].text}</td>
                      <td>{items.player_1[0].gamechoice}</td>
                      <td>{!items.player_1[0].gamechoice ? "no game chosen yet" : items.player_2[0].gamechoice}</td>
                      {items.Accept === "true" &&
                        items.result === "pending" ? (
                        <td>Accepted</td>
                      ) : items.Accept === "decline" ? (
                        <td>Declined</td>
                      ) : items.Accept === "pending" ? (
                        <td>Pending</td>
                      ) : (
                        <td>Declared</td>
                      )}
                      <td>{items.winner === items.player_1_id ? items.player_1[0].name : items.player_2[0].name}</td>
                      <td>{items.loser === items.player_1_id ? items.player_1[0].name : items.player_2[0].name}</td>
                      <td>{items.player_1[0].link}</td>
                    </tr>
                  )
                })
              }

            </tbody>

          </table>

        </div>

      </div>
    </div>
  )
}

