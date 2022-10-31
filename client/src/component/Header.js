import React, {useEffect, useState} from "react";
import { Link , useNavigate} from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import logo from "../images/Logo.png"
import Badge from '@material-ui/core/Badge';
import Notifications from "@material-ui/icons/Notifications";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { useSelector } from "react-redux";


const Header = () => {
const {isAuthenticated,user,error,loading} = useSelector((state)=>state.user)
const navigate  = useNavigate()
const [colorChange, setColorchange] = useState(false);
const [notification,setNotification] = useState([])
const [publicchallenge,setPublicChallenge] = useState([])
const [count,setCount] = useState("")
const [toggle,setToggle] = useState(false)
const [allnotification,setallnotification] = useState([])
const [winlose,setWinlose]  = useState([])
const data = JSON.parse(localStorage.getItem("nftuser"))

const changeNavbarColor = () =>{
  if(window.scrollY >= 80){
    setColorchange(true);
  }
  else{
    setColorchange(false);
  }
};

const updatenotification  = async()=>{
     await axios.put("/api/auth/updatenotification",{id:data._id,arr:[data._id]})
}
     window.addEventListener('scroll', changeNavbarColor);
     const getnotification = async()=>{
      const res = await axios.post("/api/auth/getusernotification",{id:data._id,arr:[data._id]})
  
      if(res.data&&res.data){
        setallnotification(res.data.allnotifications)            
         setNotification(res.data.notificationlist)
    // setWinlose(res.data.notificationlist.filter((items,index)=>{
    //   return(
    //     items.type==="winlose"
    //   )
    // }))
        setCount(res.data.notificationcount)  
      }
    }

    
const Messagedisplay = async()=>{
  const note =  notification.map((items,index)=>{
    toastnotification( <div style = {{color:"white"}}>{items.messages}</div>,items._id)
  })

    }
console.log(allnotification)
const toastnotification  = async(notes,id)=>{
   toast.info(notes,{
    position: "top-center",
    autoClose: 5000,
    toastId:id,
    hideProgressBar: false,
    onClose:async() => await updatenotification(),
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored"
    });
    // setTimeout(()=>{
    //   updatenotification()
    //   return
    //     },5000)
}
     useEffect(()=>{
      Messagedisplay()
    },[notification,count,isAuthenticated])
    
    useEffect(()=>{
        getnotification()
     },[count,notification])

const logoutuser = () => {
  localStorage.removeItem("nftuser");
  navigate("/register");
};

  return (
  <div className={colorChange ? 'navbar colorChange' : 'navbar'}>
        <div className='container-fluid topheader desktop-nav fixed-top'>
        <div className='container'>
         <nav className="navbar navbar-expand-lg navbar-light">
         <ToastContainer/>
            <div className="container-fluid">
                <Link className="" to = "/">
                    <img alt="logo" src={logo}/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-menu">
                    <li className="nav-item" to="/">                    
                       <Link  to="BuyDuelCard" className="nav-link" aria-current="page">Buy DuelCards</Link>
                    </li>    
                    <li className="nav-item dropdown hover">
                        <Link className="nav-link dropdown-toggle" to="/Marketplace" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Marketplace
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                        <li>
                          <Link to="Marketplace" className="dropdown-item">Marketplace</Link>
                          </li> 
                          <li>
                            <Link to="Auction" className="dropdown-item">Auction Your Cards</Link>
                          </li>
                          <li>
                          <Link to="Leaderboard" className="dropdown-item">Leaderboards</Link>
                          </li>     
                        </ul>
                      </li>    
                    <li className="nav-item dropdown hover">
                        <Link className="nav-link dropdown-toggle" to="/DuelSomeone" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       Duel Someone
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                        <li>
                          <Link to="/DuelSomeone" className="dropdown-item">Duel Someone</Link>
                          </li> 
                          <li>
                            <Link to="/DuelReceived" className="dropdown-item">Duel Received</Link>
                          </li>
                          <li>
                            <Link to="/duelstatus" className="dropdown-item">Duel Status</Link>
                          </li>     
                        </ul>
                      </li>    
                 
                      <li className="nav-item dropdown hover">
                        <Link className="nav-link dropdown-toggle" to="/AboutRules" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Challenge System
                        </Link>
                        <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                        <li>
                          <Link to="/Pathtolevel" className="dropdown-item">Path To Level 4</Link>
                          </li> 
                          <li>
                            <Link to="/Duelsystem" className="dropdown-item">Duel System</Link>
                          </li>       
                          <li>
                            <Link to="/challengemarketplace" className="dropdown-item">Challenge Marketplace</Link>
                          </li>                                   
                        </ul>
                    </li>                                                    
                </ul>
                <form style={{position:"relative",right:"12%"}} className="d-flex">  
                {
                    localStorage.getItem("nftuser")?
                    <div  style = {{position:"relative",display:"flex",bottom:"10%"}}>
                         <li style = {{position:"relative",bottom:"24%"}} className="nav-item dropdown hover">
                        <Link className="nav-link dropdown-toggle nav-drop" to="/AboutRules" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <img style = {{width:"17%",borderRadius:"50%"}} src = {data.avatar} alt = "profileimage"/>
                        </Link>
                        <ul style={{backgroundColor:"#3C2485",textAlign:"center"}} className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                        <li>
                        <button style={{padding:"5px 8px",marginBottom:"10px",backgroundColor:"#273e77",border:"2px solid #ffff"}}  className="btn btn-outline head-btn" type="submit">{data.username}</button>
                          </li> 
                        <li>
                          <button style={{backgroundColor:"#273e77",border:"2px solid #ffff",padding:"3px 8px",position:"absolute",right:"2px"}} className="btn btn-outline head-btn"   onClick={logoutuser}>logout</button>
                          </li>  
                        <Link to = "/cardgallery">
                          <button style={{padding:"3px 6px",marginBottom:"10px",backgroundColor:"#273e77",border:"2px solid #ffff",position:"relative",right:"25%"}}  className="btn btn-outline head-btn" type="submit">Gallery</button>
                        </Link>   
                        </ul>
                    </li> 

                
                    <li style = {{position:"relative",bottom:'20%'}} className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle nav-drop display" to="/AboutRules" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <div className="nav-item dropdown" style={{color:"#8d8ddf",position:"relative"}}>
      <Badge overlap="rectangular" badgeContent={count} 
      color="primary">
        <Notifications style = {{cursor:"pointer"}}/>
      </Badge>
    </div>
                        </Link>
                        <ul style={{backgroundColor:"#3C2485",textAlign:"left",color:"white",padding:"2px"}} className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
               <li style = {{color:"#717bff"}}>challenge notification</li>
                          {
                            allnotification.map((items,index)=>{
                              return(
                                <React.Fragment key = {index}>
                                {
                                 items.type==="recieved"?<Link  to = "/DuelReceived"><li>{items.messages}</li></Link>:items.type==="Accepted"?<Link to = "/DuelAccepted"><li>{items.messages}</li></Link>:<li>{items.messages}</li>
                                }
                          
                              </React.Fragment>
                              )
                            })
                          }

                        </ul>
                    </li>


                    <>
                    </>
                    </div>
                    :
                    <Link to="/register">
                    <button className="btn btncl btn-outline head-btn" type="submit">Sign In </button>
                    </Link> 
                  }         
                </form>
                </div>
            </div>
            </nav>
            </div>
        </div>
        <div className="mobile-nav fixed-top">
        {[false,].map((expand) => (
        <Navbar key={expand}  expand={expand}>
          <Container fluid>
            <Link to="/">
            <img alt = "logo" src={logo}></img>
            </Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                 
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="BuyDuelCard">BuyDuelCard</Nav.Link>
                  <Nav.Link href="Marketplace">Marketplace</Nav.Link>
                  <Nav.Link href="DuelSomeone">Duel Someone</Nav.Link>
                  <Nav.Link href="AboutRules">About / Rules</Nav.Link>
                </Nav>
                
                <form className="d-flex">
                  {
                    localStorage.getItem("nftuser")?
                    <>
                    <button  className="btn btn-outline head-btn" type="submit">{data.username}</button>
                    <button className="btn btn-outline head-btn" style={{marginLeft:"10px"}}  onClick={logoutuser}>logout</button>
                    </>
                    :
                    <Link to="/register">
                    <button className="btn btn-outline head-btn" type="submit">Sign In</button>
                    </Link>

                  }                    
                </form>             
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        ))}
        </div>
    </div>

  )

}
export default Header