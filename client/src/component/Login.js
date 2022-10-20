import React,{useState,useEffect} from 'react'
import axios from  "axios"
import styles from "./login.module.css"
import { useNavigate,Link} from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login} from "../actions/userAction"
import { useAlert } from "react-alert";
import { Loader } from './Loader';

export const Login = () => {
	const {isAuthenticated,user,error,loading} = useSelector((state)=>state.user)
	const [inputdata, setInputData] = useState({ email: "", password: "" });
	const alert = useAlert();
     const navigate = useNavigate()
	 const dispatch = useDispatch()
     

	const handleChange = ({ currentTarget: input }) => {
		setInputData({ ...inputdata, [input.name]: input.value });
		console.log(inputdata)
	};

	const handleSubmit = async (e) => {
		e.preventDefault()
		dispatch(login(inputdata))
		setInputData({
		   email:"",
		   password:""
		  });
	}

	useEffect(()=>{
if(error){
	alert.error(error)
}
	},[error,isAuthenticated,navigate])

	if(localStorage.getItem("nftuser")){
		navigate("/DuelSomeone")
	}
  return (
<>
<div className='body-main'>
<div className="login-sec">

<Container >

{
	loading?<Loader/>:<>
<Row md={6}>
<div className={styles.login_container}>
			<div className={styles.login_form_container}>


				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
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
					<h1>New Here ?</h1>
					<Link to="/Register">
						<button type="button" className={styles.white_btn}>
							Sign Up
						</button>
					</Link>
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