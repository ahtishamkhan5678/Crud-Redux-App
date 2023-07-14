import axios from "axios"
import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionType"

export const registerProducts=(data)=>(dispatch)=>{
    dispatch({ type: GET_PRODUCT_REQUEST })
    return axios.post(`http://localhost:3000/product`, data)
        .then((res)=>{
            dispatch({ type: GET_PRODUCT_SUCCESS })
            // console.log(res)
        })
        .catch(()=>{
            dispatch({ type: GET_PRODUCT_FAILURE })
        })
}

export const totalProducts=(dispatch)=>{
    dispatch({ type: GET_PRODUCT_REQUEST })
    return axios.get(`http://localhost:3000/product`)
        .then((res)=>{
            dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data })
            // console.log(res)
        })
        .catch(()=>{
            dispatch({ type: GET_PRODUCT_FAILURE })
        })
}
export const editProduct=(id,data)=>(dispatch)=>{
    dispatch({ type: GET_PRODUCT_REQUEST })
    return axios.patch(`http://localhost:3000/product/${id}`, data)
        .then((res)=>{
            dispatch({ type: GET_PRODUCT_SUCCESS})
            console.log(res)
        })
        .catch(()=>{
            dispatch({ type: GET_PRODUCT_FAILURE })
        })
}


// delete request

export const deleteProduct =(id)=>(dispatch)=>{
    dispatch({ type: GET_PRODUCT_REQUEST })
    return axios.delete(`http://localhost:3000/product/${id}`)
        .then((res)=>{
            dispatch({ type: GET_PRODUCT_SUCCESS})
            console.log(res)
        })
        .catch(()=>{
            dispatch({ type: GET_PRODUCT_FAILURE })
        })
}

