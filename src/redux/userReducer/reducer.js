import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from "./actionType";

const initialState = {
    user :[],
    isLoading: false,
    isError: false,
}

export const reducer = (state=initialState, action)=>{
    const {type,payload} = action;
    switch (type){
        case GET_USER_REQUEST : return { ...state, isLoading: true }
        case GET_USER_SUCCESS : return { ...state, isLoading: false, user: payload }
        case GET_USER_FAILURE : return { ...state, isLoading:false, isError:true }
        default: return state
    }
}