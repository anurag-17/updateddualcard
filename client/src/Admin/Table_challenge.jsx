import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Admin } from './Admin';
import "./Table_challenge.css"
export const Table_challenge = () => {
  const navigate = useNavigate()
  const [usercount, setUserCount] = useState()
  const [userdata, setuserdata] = useState([])
  const [allchallenge, setAllchallenge] = useState([])
  const [tokenid, setTokenid] = useState(localStorage.getItem("nftadmintoken"));

  const getallchallenges = async () => {
    const res = await axios.get("/api/auth/getallchallenge")
    setAllchallenge(res.data.filter((items, index) => items.category === "private"))
  }
  useEffect(() => {
    if(tokenid == null){
      navigate("/")
    }
    getallchallenges()
  }, [])
  return (
    <>
      <div className="challenge_content">
        <div className=''>
          <Admin />
        </div>
        <div className="challengetable container-fluid ">
          <div className="challenge-heading ">
            <h1>Challenge Details</h1>
          </div>
          <div className='scrolltable'>
            <table style={{ color: "white" }} className='table table-bordered table-dark table-striped aghhaa'>
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
                      <tr onClick={() => navigate(`/challengedetails/${items._id}`)}>
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
    </>
  )
}
