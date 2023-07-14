import axios from 'axios';
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from "./actionType"

export const registerUser=(data)=>(dispatch)=>{
    dispatch({ type: GET_USER_REQUEST })
    axios.post(`http://localhost:3000/users`, data)
        .then((res)=>{
            dispatch({ type: GET_USER_SUCCESS })
            // console.log(res)
        })
        .catch(()=>{
            dispatch({ type: GET_USER_FAILURE })
        })
}

export const totalUsers =(dispatch)=>{
    dispatch({ type: GET_USER_REQUEST })
    axios.get(`http://localhost:3000/users`)
        .then((res)=>{
            dispatch({ type: GET_USER_SUCCESS, payload: res.data })
            console.log(res)
        })
        .catch(()=>{
            dispatch({ type: GET_USER_FAILURE })
        })
}