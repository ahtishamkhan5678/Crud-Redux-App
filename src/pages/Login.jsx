import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { totalUsers } from '../redux/userReducer/action';
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const usersdata = useSelector((store) => store.userReducer.user)
  // console.log("normal", user)

  useEffect(() => {
    dispatch(totalUsers)
  }, [])

  const handleLogin = (i) => {
    if (email == "") {
      alert("Please fill the email field!");
    } else if (password == "") {
      alert("Please fill the password field!");
    } else {
      let flag = false;
      for (let i = 0; i < usersdata.length; i++) {
        if (usersdata[i].email == email && usersdata[i].password == password) {
          flag = true;
        }
      }
      if (flag) {
        alert("Login Successful!");
        setEmail("");
        setPassword("");
        navigate("/products");
      } else {
        alert("Login Failed!");
        setEmail("");
        setPassword("");
      }

    }
  };

  return (
    <div style={{ width: '350px',  margin:'auto'}}>

      <h3 style={{textAlign:'center'}}>Login</h3>

      <div class="form-group">
        <label for="exampleInputEmail1">E Mail</label>
        <input type="text" class="form-control" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div class="form-group">
        <label for="exampleInputEmail1">Password</label>
        <input type="password" class="form-control" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      <button type="submit" class="btn btn-primary" onClick={handleLogin} style={{marginTop:4}}>Submit</button>

      <img src='https://i.pinimg.com/originals/28/66/72/286672f88062e0bf3edc28ec9120b25d.gif' class="lImage"></img>
    </div>
  )
}

export default Login;