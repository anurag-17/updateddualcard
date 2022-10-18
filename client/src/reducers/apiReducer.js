import { API_FAIL, API_REQUEST, API_SUCCESS } from "../constants/userConstants";


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