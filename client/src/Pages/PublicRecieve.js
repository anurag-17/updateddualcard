import React, { useEffect, useState } from 'react';
import '../component/DuelReceived.css';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Loader } from '../component/Loader';
import img1 from "../images/Plus.png";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { postimage } from '../actions/apiAction';

export const PublicRecieve = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { image,loading,isImage} = useSelector((state) => state.image);
  const [challenge, setChallenge] = useState([])
  const [playertwoname,setplayertwoname] = useState("")
  const [selectedimage,setselectedimage] = useState([]);
  const [show, setShow] = useState(false)
  const [userimagedata, setuserimagedata] = useState([])
  const [loader, setLoader] = useState(true)
  const [checkedimage, setcheckedimage] = useState([]);
  const [text,setText] = useState("")
const [gamechoice,setGameChoice] = useState("")
  const [data,setdata] = useState({
    image:"",
    userId:""
  })
  let acceptchallenge = ""
  const [errromessage,setErrorMessage] = useState("")
  const storagedata = JSON.parse(localStorage.getItem("nftuser"))
  const {id} = useParams()

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
  };



  const getallchallenge = async () => {
    const res = await axios.get("/api/auth/getallchallenge")
    if (res) {
      setLoader(false)
      setChallenge(res.data.filter((items, index) => {
        return items._id === id && items.Accept === "pending"
      }))
    }
  }


  const AcceptChallenge = async(index)=>{
    if(checkedimage.length<=0){
      setErrorMessage("please select the cards")
      setTimeout(()=>{
    setErrorMessage("")
      },2200)
          return
        }else if(gamechoice.length<=0){
          setErrorMessage("Please fill the game of choice")
          setTimeout(()=>{
            setErrorMessage("")
              },2200)
              return
        }else if(text.length<=0){
          setErrorMessage("please fill the terms")
          setTimeout(()=>{
            setErrorMessage("")
              },2200)
              return
        }
        setLoader(true)
        const newres = await axios.put("/api/auth/setplayertwoid",{id:id,playertwoid:storagedata._id})
        let acceptindex = index
        acceptchallenge = true
        const res = await axios.put("/api/auth/acceptchallenge",{
          Accept:acceptchallenge,
          challengerid:challenge._id,
          decline:false,
          playertwo_url:checkedimage,
          name:storagedata.username,
          gamechoice:gamechoice,
          text:text
        })
    if(res){
      navigate("/DuelAccepted")
}
  }

  const encodefile = (file)=>{
    var reader = new FileReader()

    if(file){
        reader.readAsDataURL(file)
        reader.onload = ()=>{
            var base64 = reader.result
            setdata({
                image:base64,
                userId:storagedata._id,
            })
            // setfilebaseurl(base64)
        }
    reader.onerror = (error)=>{
        alert("something went wrong")
    }
    }
}
encodefile(selectedimage[0])

  const handlesubmit=async()=>{
    dispatch(postimage(data));
    setShow(false);
  };

  const getimages = async () => {
    let user = JSON.parse(localStorage.getItem("nftuser"))
    const res = await axios.post("/api/auth/getdata", user).then((data) => {
      setuserimagedata(data.data);
    });

  }


  const checkboxchange = (e) => {
    if (e.target.checked) {
      checkedimage.push(e.target.value);
    }
    else {
      checkedimage.pop()
    }
  }

  useEffect(() => {
    getallchallenge()
    getimages()
  },[image,loading,isImage,userimagedata])

  return (
    <>
      {
        loader?<Loader /> : <div>
          <div className='DuelRec-sec'>
            {
              loading?<Loader/>:
            <div className='container'>
              <div className='section-title'>
                <h2>Duel Received</h2>
              </div>
              <div className='row duel-main'>

                {
                  challenge.map((items, index) => {
                    return (
                      <>
                      <div className='col-md-4 col-sm-12 duel-left'>
                        <div className='duel-lef-slide'>
                          <div className='duel-sldier'>

                            <Carousel>
                              {
                                items.player_1[0].images.map((items, index) => {
                                  return (
                                    <Carousel.Item>
                                      <img
                                        className="d-block w-100"
                                        src={items}
                                        alt="First slide"
                                      />
                                      <Carousel.Caption>

                                      </Carousel.Caption>
                                    </Carousel.Item>
                                  )
                                })
                              }


                            </Carousel>
                          </div>
                          <div className='duel-des'>
                            <div class="clearfix">
                              <img src="/tabicon-8.png" alt="img" />
                              <button type="button" class="btn float-end">{items.player_1[0].name}</button>
                            </div>
                            <div className='duel-leftgreen-text mt-3'>
                              <h4><span>5</span>won</h4>
                            </div>
                            <div className='duel-leftred-text'>
                              <h4><span>8</span>lost</h4>
                            </div>
                          </div>

                        </div>
                        <div className='dule-cont'>
                          <h4>{items.player_1[0].text}</h4>
                        </div>
                      </div>
                <div className='col-md-2 duel-center'>
                  <img src="/VS icon.png" alt="img" />
                </div>
                <div className='col-md-6 duel-right'>
                  <div className='row'>
                    <div className="col-md-6 col-sm-6">
                      <div className="dule-rt-1">
                        {
                          userimagedata.map((items, index) => {

                            return (
                              <div key={index} className="grid-two imageandtext">
                                <div className="imageandtext image_grid">
                                  <label>
                                    <img
                                      src={items.url}
                                      className="img-thumbnail"
                                    />
                                    <input
                                      onChange={checkboxchange}
                                      type="checkbox"
                                      name="selimg"
                                      value={items.url}
                                    />
                                    <span className="caption"></span>
                                  </label>
                                </div>
                              </div>
                            )
                          })
                        }

                        <div
                          style={{
                            border: "2px dashed #4A6BBC",
                            borderRadius: "16px",
                            width: "130px"

                          }}
                          className="dule-img1"
                        >
                          {
                            <div
                              style={{
                                textAlign: "center",
                                position: "relative",
                                top: "45px",
                                left: "12px",
                                width: "100px"
                              }}
                              onClick={handleShow}
                              className="icon-plus button"
                            >
                              <img src={img1} />
                            </div>
                          }
                        </div>
                      </div>
                      {
errromessage&&<div style = {{position:"relative",left:"35%",bottom:"50%"}} className="popup error">
<div className="message">
<p>{errromessage}</p>
</div>
<div className="action">
<button onClick={()=>setErrorMessage("")}>Ok</button>
</div>
</div>
}
                      <div className="btn-duel-right">
                    <button onClick={handleShow} className="hero-btn">SELECT CARDS</button>
                  </div>
                      {/* <span style = {{color:"red"}}>{errromessage}</span> */}
                    </div>

              
                    <div className='col-md-6 col-sm-6'>
                      <div className='dule-rt-2'>
                        <div class="clearfix">
                          <img
                            style={{ width: "30px" }}
                            src={storagedata.avatar} alt="img" />
                          <button type="button" className="btn float-end">{storagedata.username}</button>
                        </div>
                      </div>
                      <div className='duel-form'>
                        <div class="mb-3 mt-4">
                          <textarea onChange={(e)=>setText(e.target.value)} class="form-control" id="exampleFormControlTextarea1" placeholder="Write your terms" rows="10"></textarea>
                        </div>
                      </div>

                      <div className="search-bar">
                                  <div className="input-group md-form form-sm form-2 pl-0">
                                    <input
                                      type="text"
                                      required
                                      className="form-control my-0 py-1 red-border"
                                      placeholder="Game Of Choice"
                                      aria-label="Search"
                                      onChange={(e) =>
                                        setGameChoice(e.target.value)
                                      }
                                    />

                                    <div className="input-group-append"></div>
                                  </div>
                                </div>
                      <div className='btn-duel-right'>
                      <button onClick={AcceptChallenge} className="hero-btn">Accept challenge</button>
                        <button
                          // onClick={DeclineChallenge} 
                          className="hero-btn">Decline challenge</button>
                      </div>
                    </div>
                  </div>
                </div>
                <Modal
                        style={{ height: "800px" }}
                        show={show}
                        onHide={handleClose}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <input
                            multiple
                            onChange={(e)=>setselectedimage(e.target.files)}
                            type="file"
                            name=""
                            id=""
                          />
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="primary" onClick={handlesubmit}>
                            Save Changes
                          </Button>
                        </Modal.Footer>
                      </Modal>
                      </>
                    )
                  })
                }

              </div>
            </div>
            }
          </div>
        </div>
      }
    </>

  )
}

