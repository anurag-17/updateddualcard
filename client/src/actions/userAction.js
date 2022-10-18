import axios from "axios";
import {
  CLEAR_ERRORS,
  DETAIL_USER_FAIL,
  DETAIL_USER_REQUEST,
  DETAIL_USER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_USER_FAIL,
  LOGOUT_USER_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PROFIE_REQUEST,
  UPDATE_PROFIE_SUCCESS,
} from "../constants/userConstants";


export const login = (userdata) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const { data } = await axios.post(`/api/auth/login`,userdata);

    dispatch({ type:LOGIN_SUCCESS, payload: data.user});
    localStorage.setItem("nftuser",JSON.stringify({...data.user,password:"",expire:new Date().getDate()+7}))
    console.log(data);

  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data});
    console.log(error.response);
  }
  
};


export const register = (userData) => async (dispatch) => {
 
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    // const config = { headers: { "Content-Type": "Application/json" } };

    const { data } = await axios.post(`/api/auth/register`,userData);
        
  
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
    console.log(data);
    localStorage.setItem("nftuser",JSON.stringify({...data.user,password:""}))
    // navigate("/DuelSomeone")
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data,
    });
    // console.log(error);
  }
};
export const logout = () => async (dispatch) => {
  try {
    await axios.get(`/api/auth/logout`);

    dispatch({ type: LOGOUT_USER_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_USER_FAIL, payload: error.response.data.message });
  }
};
//////////////////loaduser////////////////
export const loaduser = () => async (dispatch) => {
  try {
    dispatch({ type: DETAIL_USER_REQUEST });
    const { data } = await axios.get(`/api/auth/me`);

    dispatch({ type: DETAIL_USER_SUCCESS, payload: data.user });

    console.log(data.user);
  } catch (error) {
    dispatch({ type: DETAIL_USER_FAIL });
  }
};
export const updatePassword = (password) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PASSWORD_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const data = await axios.put(`/api/auth/update/password`, password, config);

    dispatch({ type: UPDATE_PASSWORD_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const updateprofile = (updatedata) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFIE_REQUEST });
    const config = { headers: { "Content-Type": "multipart/form-data" } };  // const data = await axios.put(
      const data = await axios.put(
      `/api/auth/update/profile`,
      updatedata,
      config
    );
    console.log(updatedata);
    dispatch({ type: UPDATE_PROFIE_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: error.response.data,
    });
  }
};
//////////////////loaduser////////////////

//clearing errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
