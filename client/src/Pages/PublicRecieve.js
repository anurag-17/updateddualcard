import React, { useEffect, useState } from 'react';
import '../component/DuelReceived.css';
import Carousel from 'react-bootstrap/Carousel';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Loader } from '../component/Loader';
import img1 from "../images/Plus.png";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { postimage } from '../actions/apiAction';

export const PublicRecieve = () => {
  const dispatch = useDispatch()
  const [challenge, setChallenge] = useState([])
  const [selectedimage,setselectedimage] = useState([]);
  const [show, setShow] = useState(false)
  const [userimagedata, setuserimagedata] = useState([])
  const [loading, setLoading] = useState(true)
  const [checkedimage, setcheckedimage] = useState([]);
  const [data,setdata] = useState({
    image:"",
    userId:""
  })

  const storagedata = JSON.parse(localStorage.getItem("nftuser"))
  const {id} = useParams()

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
  };


  const getallchallenge = async () => {
    const res = await axios.get("/api/auth/getallchallenge")
    if (res) {
      setLoading(false)
      setChallenge(res.data.filter((items, index) => {
        return items._id === id && items.Accept === "pending"
      }))
    }
  }

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
  }, [id])

  return (
    <>
      {
        loading ? <Loader /> : <div>
          <div className='DuelRec-sec'>
            <div className='container'>
              <div className='section-title'>
                <h2>Duel Received</h2>
              </div>
              <div className='row duel-main'>

                {
                  challenge.map((items, index) => {
                    return (
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
                    )
                  })
                }

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
                          <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Write your terms" rows="10"></textarea>
                        </div>
                      </div>
                      <div className='btn-duel-right'>
                        <button className='hero-btn'>accept challenge</button>
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
              </div>
            </div>
          </div>
        </div>
      }
    </>

  )
}

