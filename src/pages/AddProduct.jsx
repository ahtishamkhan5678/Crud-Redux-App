import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerProducts } from '../redux/productReducer/action';
import { useNavigate } from 'react-router-dom';

const initialState = {
  title: "",
  image: "",
  category: "",
  brand: "",
  price: "",
  desc: ""
}

const AddProduct = () => {
  const [data,setData] = useState(initialState)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleChange=(e)=>{
    const {name,value} = e.target;
    setData({...data,[name]:value})

  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(registerProducts(data)).then(()=>{
      alert('Product Added')
      setData(initialState)
      navigate('/products')
    })
  }
  return (
    <div style={{ width: '550px', margin: 'auto' }}>



      <form onSubmit={handleSubmit}>
        <div>

          <h3>Register the Product Details</h3>
        </div>           <div class="form-group">
          <label for="exampleInputEmail1">Product Title</label>             <input type="text" class="form-control" name='title' value={data.title} onChange={handleChange} />           </div>           <div class="form-group">             <label for="exampleInputEmail1">Product Image</label>             <input type="text" class="form-control" name='image' value={data.image} onChange={handleChange} />
        </div>
        <div class="form-group">             <label for="exampleFormControlSelect1">Example select</label>
          <select class="form-control" type="text" name='category' value={data.category} onChange={handleChange} >
            <option value={""}>Select Category</option>
            <option value={"men"}>MEN</option>
            <option value={"women"}>WOMEN</option>               <option value={"kids"}>KIDS</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Brand</label>
          <input type="text" class="form-control" name='brand' value={data.brand} onChange={handleChange} />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Price</label>
          <input type="text" class="form-control" name='price' value={data.price} onChange={handleChange} />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Description</label>
          <textarea type="text" class="form-control" name='desc' value={data.desc} onChange={handleChange} ></textarea>
        </div>


        <input type="submit" class="btn btn-primary" value={"SUBMIT"}  style={{marginTop:5}}/>

      </form>
      <img src='https://cliply.co/wp-content/uploads/2019/05/371905230_ECOMMERCE_400px.gif' class="pImage"></img>
       
    </div>
  )
}

export default AddProduct;