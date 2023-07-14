import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Products from '../pages/Products'
import Edit from '../pages/Edit'
import AddProduct from '../pages/AddProduct'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/products' element={<Products />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='/addProduct' element={<AddProduct/>} />

        </Routes>

    </div>
  )
}

export default Routing