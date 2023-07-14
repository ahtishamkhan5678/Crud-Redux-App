import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editProduct, totalProducts } from '../redux/productReducer/action';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const [editData, setEditData] = useState("")
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();
    const allproducts = useSelector((store) => store.productReducer.thing)
    console.log("total products", allproducts)

    useEffect(() => {
        const single = allproducts.find((el) => el.id === +id)
        setEditData(single);
        // console.log("111", single)
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditData({ ...editData, [name]: value })
    }

    const handleEdit = (e) => {
        e.preventDefault();
        dispatch(editProduct(id, editData)).then(() => {
            navigate('/products')
        })
    }

    return (
        <div style={{ width: '550px', margin:'auto' }}>
            <h3>Edit the Product Details</h3>
            <form onSubmit={handleEdit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Product Title</label>
                    <input type="text" class="form-control" name='title' value={editData.title} onChange={handleChange} />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Product Image</label>
                    <input type="text" class="form-control" name='image' value={editData.image} onChange={handleChange} />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlSelect1">Example select</label>
                    <select class="form-control" type="text" name='category' value={editData.category} onChange={handleChange}>
                        <option value={""}>Select Category</option>
                        <option value={"men"}>MEN</option>
                        <option value={"women"}>WOMEN</option>
                        <option value={"kids"}>KIDS</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Brand</label>
                    <input type="text" class="form-control" name='brand' value={editData.brand} onChange={handleChange} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Price</label>
                    <input type="text" class="form-control" name='price' value={editData.price} onChange={handleChange} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Description</label>
                    <input type="text" class="form-control" name='desc' value={editData.desc} onChange={handleChange} />
                </div>

                <input type="submit" class="btn btn-primary" value={"SUBMIT"} style={{marginTop:5}} />
            </form>
        </div>
    )
}

export default Edit


// value={data.title} onChange={handleChange}