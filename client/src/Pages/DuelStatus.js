import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./DuelStatus.css";
import { Loader } from "../component/Loader";

export const DuelStatus = () => {
  const [challengedata,setchallengedata] = useState([]);
  const data = JSON.parse(localStorage.getItem("nftuser"));
  const [loading,setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2100);
  const getrecieved = async () => {
    const res = await axios.post("/api/auth/challengestatus",{id:data._id});
  
    setchallengedata(res.data);
  };

  const getexpire = async()=>{
    const res = await axios.put("/api/auth/setexpire",{date:Date.now()})
  }

  useEffect(() => {
    getrecieved();
    getexpire()
  });

  return (
    <>
      <div className="">
        {loading ? (
          <Loader/>
        ):(
          <div className="duelstatus-sec">
            <div className="container">
              <div className="user-title">
                <h1>{data.username}</h1>
              </div>
              <div>
                <div className="duelsatus-table">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Challenger</th>
                        <th>Reciever</th>
                        <th>Status</th>
                        <th>Go to challenge</th>
                        <th>Result</th>
                      </tr>
                    </thead>
                    {challengedata.map((items, index) => {
                      return (
                        <React.Fragment key={items._id}>
                          <tbody>
                            <tr>
                              <td>{items.player_1[0].name}</td>
                              <td>{items.player_2[0].name}</td>

                              {items.Accept === "true"&&
                              items.result === "pending"?(
                                <td>Accepted</td>
                              ) : items.Accept === "decline"?(
                                <td>Declined</td>
                              ) : items.Accept === "pending"?(
                                <td>Pending</td>
                              ) : (
                                <td>Declared</td>
                              )}
                              {items.Accept === "true" &&
                              items.result === "pending"?(
                                <td>
                                  <Link to="/DuelAccepted">
                                    <button style={{color:"white",border:"none",fontFamily:"'Roboto',sans-serif"}}  className="table-hero-btn">
                                      Go To Challenge
                                    </button>
                                  </Link>
                                </td>
                              ):items.Accept==="pending"&&items.result === "pending"?(
                              <td>
                              <Link to="/DuelReceived">
                                <button style={{color:"white",border:"none",fontFamily:"'Roboto',sans-serif"}} className="table-hero-btn">
                                  Go To Challenge
                                </button>
                              </Link>
                            </td>):
                              (
                                <td>
                                  
                                  {/* <Link to = "/loser/632c2b07521e8b37eada3495/player_1"> */}

                                  <button disabled className="table-hero-btn">
                                    Go To Challenge
                                  </button>
                                  {/* </Link> */}
                                </td>
                              )}
                              <td>
                                {
                                  items.result==="pending"?<h4>pending</h4>:items.result==="Manual Review"?<h4>Manual Review</h4>:items.winner===data._id?<h4 style ={{color:"green"}}>Winner</h4>:<h4 style ={{color:"red"}}>Loser</h4>
                                }
                              </td>
                            </tr>
                          </tbody>
                        </React.Fragment>
                      );
                    })}
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DuelStatus;
