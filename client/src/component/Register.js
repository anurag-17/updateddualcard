import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userAction";
import { useAlert } from "react-alert";
import { Loader } from "../component/Loader";
import Resizer from "react-image-file-resizer";
import img1 from "../images/Profile.png"


export const Register = () => {
  const { loading, isAuthenticated, user, error } = useSelector(
    (state) => state.user
  );
  // const [loading,setLoading] = useState(false)
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();
  const [inputvalue, setInputvalue] = useState({
    username: "",
    email: "",
    password: "",
    avatar: "",
  });

  const [selectedimage, setSelectedImage] = useState([])
  const [avtarpreview,setAvatarpreview] = useState(img1)

  const handleChange = async (event) => {
    const { name, value } = event.target;
    setInputvalue({ ...inputvalue, [name]: value });
    console.log(inputvalue);
  };


const handleimage = (e)=>{
  console.log(e.target.files)
  setSelectedImage(e.target.files)

  const reader = new FileReader();
  reader.onload = () => {
    if (reader.readyState === 2) {
      // setavatarPreview(reader.result);
      setAvatarpreview(reader.result);
    }
  };

  reader.readAsDataURL(e.target.files[0]);

}

  const encodefile = (file) => {
    if (file) {
      try {
        Resizer.imageFileResizer(
          file,
          300,
          300,
          "jpg",
          100,
          0,
          (uri) => {
            inputvalue.avatar = uri
          },
          "base64",
          200,
          200
        );
      } catch (err) {
        console.log(err);
      }
    }
  };
  encodefile(selectedimage[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("username", inputvalue.username);
    myForm.set("email", inputvalue.email);
    myForm.set("password", inputvalue.password);
    dispatch(register(inputvalue));

    setInputvalue({
      username: "",
      email: "",
      password: "",
      avatar: ""
    });

    if (error) {
      alert(error.message)
    }
  };
  useEffect(() => {
    if (error) {
      alert.error(error.message);
    } else if (isAuthenticated) {
      alert.success("Signup Successfull");
    }
  }, [error, alert, isAuthenticated, navigate]);

  if (localStorage.getItem("nftuser")) {
    navigate("/DuelSomeone");
  }
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Container>
            <div className={styles.signup_container}>
              <div className={styles.signup_form_container}>
                <div className={styles.left}>
                  <h1>Welcome Back</h1>
                  <Link to="/login">
                    <button type="button" className={styles.white_btn}>
                      Login
                    </button>
                  </Link>
                </div>
                <div className={styles.right}>
                  <form
                    className={styles.form_container}
                    onSubmit={handleSubmit}
                  >
                    <h1>Create Account</h1>
                    <input
                      type="name"
                      placeholder="username"
                      name="username"
                      onChange={handleChange}
                      value={inputvalue.username}
                      required
                      className={styles.input}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      onChange={handleChange}
                      value={inputvalue.email}
                      required
                      className={styles.input}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={handleChange}
                      value={inputvalue.password}
                      required
                      className={styles.input}
                    />
<div className = {styles.file_input}>
  <input onChange={handleimage} type="file" id="file" className = {styles.file}/>
  <label style = {{fontSize:"25px"}} htmlFor="file">
    Choose Avatar
  <img style = {{width:"3.2rem",height:"3.1rem",marginLeft:"10px",borderRadius:"50%"}} src = {avtarpreview}/>
  </label>
</div>

                    <button type="submit" className={styles.green_btn}>
                      Sign Up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </Container>
        </>
      )}
    </>
  );
};
