import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap';
import styles from "../component/login.module.css"
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { adminlogin } from "../actions/userAction"
import { useAlert } from "react-alert"
import { Loader } from '../component/Loader'
import axios from 'axios';

export const AdminLogin = () => {
    const [tokenid, setTokenid] = useState("");
    const { isAuthenticated, user, error, loading } = useSelector((state) => state.user)
    const [inputdata, setInputData] = useState({ email: "", password: "" });
    const alert = useAlert();
    const navigate = useNavigate()



    const handleChange = ({ currentTarget: input }) => {
        setInputData({ ...inputdata, [input.name]: input.value });

        console.log(inputdata)
    };

    const handleSubmit = async (e) => {
        e.preventDefault()

        await axios.post(`/api/auth/adminlogin`, inputdata, { headers: { "Content-Type": "application/json" } }).then((res) => {
            console.log(res.data.token);
            setTokenid(res.data.token)
            localStorage.setItem("nftadmintoken", JSON.stringify(res.data.token))
            setInputData({
                email: "",
                password: ""
            });
            navigate("/usertable")
        }).catch((error)=>{
            if (error.response.status == 500 ) {
                alert.error("Invalid Email or password")
              }
        })

        
    }





    return (
        <>
            <div className='body-main'>
                <div className="login-sec">

                    <Container >

                        {
                            loading ? <Loader /> : <>
                                <Row md={6}>
                                    <div className={styles.login_container}>
                                        <div className={styles.login_form_container}>


                                            <div className={styles.left}>
                                                <form className={styles.form_container} onSubmit={handleSubmit}>

                                                    <input
                                                        type="email"
                                                        placeholder="email"
                                                        name="email"
                                                        onChange={handleChange}
                                                        value={inputdata.email}
                                                        required
                                                        className={styles.input}
                                                    />
                                                    <input
                                                        type="password"
                                                        placeholder="Password"
                                                        name="password"
                                                        onChange={handleChange}
                                                        value={inputdata.password}
                                                        required
                                                        className={styles.input}
                                                    />

                                                    <button type="submit" className={styles.green_btn}>
                                                        LogIn
                                                    </button>
                                                </form>
                                            </div>
                                            <div className={styles.right}>
                                                <h1>Welcome Admin</h1>

                                            </div>


                                        </div>
                                    </div>

                                </Row>
                            </>

                        }

                    </Container>
                </div>
            </div>

        </>
    )
}
