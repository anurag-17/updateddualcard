import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Card } from './Card';
import "./Admin.css"
import logo from "../images/Logo.png"
export const Admin = () => {
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

  const getallchallenges = async () => {
    const res = await axios.get("/api/auth/getallchallenge")
    setAllchallenge(res.data.filter((items, index) => items.category === "private"))
  }
  const logout =() =>{
    localStorage.removeItem("nftadmintoken")
    navigate("/")
  }
  useEffect(() => {
    if(tokenid == null){
      navigate("/")
    }
    getuserdata()
    getallchallenges()
  }, [])

  return (
    <div className=''>
      <div className=''>
        {/* <div style  = {{minHeight:"90vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
<Card user={usercount} title = "Users" subtitle = "Registered"/>
<Card user={allchallenge.length} title="Challenges"/>
<Card />
<Card/>
</div> */}
        <div className="sideNavbar">
          <nav>
            <div className="navcontent">
              <ul>
                <Link className="logoimg" to="/">
                  <img alt="logo"  src={logo} />
                </Link>
                <br />
                <br />
                <li>
                <i className="fa fa-users iconA" aria-hidden="true"/><Link to='/usertable' className='adt'>User</Link>
                </li>
                <br />
                <li>
                <i className="fa fa-gamepad iconA" aria-hidden="true"/> <Link className='adt23' to='/challengetable'>Challenge</Link>
                </li>
                <br />
                <li>
                <i class="fa fa-exclamation-circle iconA" aria-hidden="true"></i>  <Link className='adt2' to='/dispute'>Dispute</Link>
                </li>
                <br />
                {/* <li>
                  <a href="">Demo</a>
                </li>
                <br /> */}
                <li className='logoutadmin'>
                <i class="fa fa-sign-out iconA" aria-hidden="true"/><button className='btn adt ad' onClick={logout}>Logout</button>
                </li>
              </ul>
            </div>
          </nav>
        </div>

      </div>
    </div>
  )
}

