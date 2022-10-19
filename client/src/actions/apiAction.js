import axios from "axios"
import { API_REQUEST,API_SUCCESS,API_FAIL, USER_REQUEST, USER_SUCCESS, USER_FAIL } from "../constants/userConstants"

export const postimage=(userdata)=> async (dispatch, getState) => {
    try {
      dispatch({ type:API_REQUEST });
      // const  {data}  = await axios.post(`https://api.cloudinary.com/v1_1/degu3b9yz/image/upload`,userdata);
      const config = {"Content-Type":"Application/json"}
      const  {data}  = await axios.post(`/upload`,userdata,config);
      dispatch({ type:API_SUCCESS, payload:data.url});
      
    } catch (error) {
      dispatch({ type:API_FAIL, payload: error.response.data});
    }
    
  };

  export const getuserdata = ()=>async(dispatch,getState)=>{
    try{
      dispatch({type:USER_REQUEST})
      const {data} = await axios.post("/api/auth/getuserdata")
      console.log(data)
      dispatch({type:USER_SUCCESS,payload:data})
    }
    catch(error){
      dispatch({type:USER_FAIL,payload:error.response.data})
    }
  }


  