import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const [image, setImage] = useState("");
  const [userdata,setUserdata] = useState([])
  const [imagedata,setImagedata] = useState([])
  const [finalimagedata,setfinalimagedata] =useState([])
  const [url, setUrl] = useState("");
  const [userprofiledata, setUserprofiledata] = useState([]);
  const [imgdata, setImgdata] = useState({
    url:"",
    userId:"",
  });
  const [userId, setUserId] = useState("");
  const [arr, setArr] = useState([]);
  const navigate = useNavigate();



  const getimages = async()=>{
    const res= await axios.get("http://localhost:5000/api/auth/getdata")
setImagedata(res.data)
const newimagedata=imagedata.filter((items,index)=>{
  return(
    items.userId===userId
  )
})
setfinalimagedata(newimagedata)
}
getimages()



const getuserdata = async()=>{

  const res = await axios.get("http://localhost:5000/api/auth/getuserdata")
  setUserdata(res.data)

}
getuserdata()

useEffect(() => {
    const userdata = JSON.parse(localStorage.getItem("nftuser"));
    setUserprofiledata([userdata]);
    console.log(userdata.user._id);
    setUserId(userdata.user._id);
  }, []);

  const uploadImage = async () => {
    console.log(image);
    let data = new FormData();
    let form = new FormData();
    data.append("file", image);
    data.append("upload_preset", "nftimg");
    data.append("cloud_name", "degu3b9yz");
    await fetch("https://api.cloudinary.com/v1_1/degu3b9yz/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        const imgurl = data.url;
        setUrl(data.url);
        arr.push(imgurl);
        imgdata.userId = userId;
        imgdata.url = url;
      })
      .catch((err) => {
        console.log(err);
      });
    if (url) {
      fetch("http://localhost:5000/upload",{
        method: "POST",
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify(imgdata),
      });
    }
  };


  const logoutuser = () => {
    localStorage.removeItem("nftuser");
    navigate("/register");
  };

  return (
    <>
      <div className="userprofil">
        {userprofiledata.map((items, index) => {
          return (
            <>
              <Card md={6} style={{ border: "2px solid black" }}>
                <h2> Welcome! {items.user.username}</h2>
                <button onClick={logoutuser}>logout</button>
              </Card>
            
{userdata.map((items,index)=>{
  return(
<div>
<h2>{items.username}</h2> 
<br />   

</div>
    
    )
  })}

            </>
          );
        })}
      </div>
      <div style={{ marginTop: "10%" }}>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />

  <div style = {{display:"flex"}}>
        {finalimagedata.map((items, index)=> {
          return (
            <>
              <div>
                  <img style={{ width: "70%" }} src={items.url}/>
              </div>
      
  
            </>
          );
        })}

  </div>

        <input type="submit" onClick={() => uploadImage()} />
      </div>

      <Card style={{ width: "30rem" }}>
        <Card.Body></Card.Body>
      </Card>
    </>
  );
};
