import { API_FAIL, API_REQUEST, API_SUCCESS, USER_FAIL, USER_REQUEST, USER_SUCCESS } from "../constants/userConstants";


export const apiReducer = (state = {}, action) => {

    switch (action.type) {
        case API_REQUEST:
          return {
            loading:true,
            isAuthenticated:false,
          };
    
        case API_SUCCESS:
          return {
            ...state,
            loading: false,
            isImage: true,
            image: action.payload,
          };
    
        case API_FAIL:
          return {
            ...state,
            loading: false,
            isImage: false,
            user: null,
            error: action.payload,
          };

        default:
          return state;
      }



}


export const userdatareducer = (state={},action)=>{
  switch (action.type) {
    case USER_REQUEST:
      return {
        loading:true,
        isuserauth:false,
      };

    case USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isuserauth: true,
        userdata: action.payload,
      };

    case USER_FAIL:
      return {
        ...state,
        loading:false,
        isuserauth:false,
        user:null,
        error:action.payload,
      };

    default:
      return state;
  }

}