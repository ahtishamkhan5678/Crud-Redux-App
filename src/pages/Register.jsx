import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/userReducer/action';
import { useNavigate } from 'react-router-dom';

const initialState = {
    name: "",
    email: "",
    password: "",
    confpassword: ""
}

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formdata, setFormdata] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formdata, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(formdata))
        alert("registartion successfull")
        setFormdata(initialState)
        navigate("/login")


        // console.log("register data", formdata)

    }


    return (
        <div style={{ width: '350px', margin:'auto' }}>
            <h3>Register the Details</h3>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Full Name</label>
                    <input type="text" class="form-control" name='name' value={formdata.name} onChange={handleChange} />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="text" class="form-control" name='email' value={formdata.email} onChange={handleChange} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" name='password' value={formdata.password} onChange={handleChange} />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Confirm Password</label>
                    <input type="text" class="form-control" name='confpassword' value={formdata.confpassword} onChange={handleChange} />
                </div>

                <input type="submit" class="btn btn-primary" value={"SUBMIT"} style={{marginTop:4}} />
            </form>

            <img src='https://i.gifer.com/HHVH.gif' className="rImage" alt="Welcome" />
        </div>
    )
}

export default Register;