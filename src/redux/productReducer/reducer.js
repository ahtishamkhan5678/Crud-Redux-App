import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionType";

const initialState = {
    thing :[],
    isLoading: false,
    isError: false,
}

export const reducer = (state=initialState, action)=>{
    const {type,payload} = action;
    switch (type){
        case GET_PRODUCT_REQUEST : return { ...state, isLoading: true }
        case GET_PRODUCT_SUCCESS : return { ...state, isLoading: false, thing: payload }
        case GET_PRODUCT_FAILURE : return { ...state, isLoading:false, isError:true }
        default: return state
    }
}