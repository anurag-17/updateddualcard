import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Admin } from './Admin';
import './Table_user.css'
export const Table_user = () => {
  const navigate = useNavigate()
  const [usercount, setUserCount] = useState()
  const [userdata, setuserdata] = useState([])
  const [allchallenge, setAllchallenge] = useState([])
  const [tokenid, setTokenid] = useState(localStorage.getItem("nftadmintoken"));
 
 
  const getuserdata = async () => {
    
    const res = await axios.post("/api/auth/getuserdata");
    setuserdata(res.data)
    setUserCount(res.data.length)
  }

  useEffect(() => {
    if(tokenid == null){
      navigate("/")
    }

      getuserdata()

    }, [])



 
  return (
    <>
      <div className="user_content">
        <div className='user_slide'>
          <Admin />
        </div>
        <div className='container-fluid  table_A'>

          <div className="user_head challenge-heading">
            <h1>User Details</h1>
          </div>
          <div className="media_scroll">
          <table className='table table-bordered table-dark table-striped aghh tab_none'>
            {/* style={{ width: "69%", justifyContent: "center", border: "none", marginBottom: "3.5rem" }} */}
            <thead style={{ color: "white" , backgroundColor:"rgb(6, 0, 27)" }}>
              <tr>
                <th>#</th>
                <th>Users</th>
                <th>Email</th>
               
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
                      <td className='table_border_btm'><img  style={{ width: "30px" }} src={items.avatar} /></td>
                      <td className='table_border_btm'>{items.username}</td>
                      <td className='table_border_btm'>{items.email}</td>
                     
                      <td className='table_border_btm'>{items.winning}</td>
                      <td className='table_border_btm'>{items.losing}</td>
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
