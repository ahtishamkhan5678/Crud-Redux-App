import React from 'react'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" 
            style={({isActive,isPending}) =>{
                return{
                    fontWeight : isActive ? "bold" : "",
                    color : isPending ? "red" : "",
                    background : isActive ? "red":"",
                    borderBottomLeftRadius: 9,
                    borderBottomRightRadius: 9,
                    borderTopRightRadius: 9,
                    borderTopLeftRadius: 9,
                    overflow: 'hidden',
                    
                };
            }}

          
          className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/login"
            
            style={({isActive,isPending}) =>{
                return{
                    fontWeight : isActive ? "bold" : "",
                    color : isPending ? "red" : "",
                    background : isActive ? "red":"",
                    borderBottomLeftRadius: 9,
                    borderBottomRightRadius: 9,
                    borderTopRightRadius: 9,
                    borderTopLeftRadius: 9,
                    overflow: 'hidden',
                    
                };
            }}

          className="nav-link">Login</NavLink>
        </li>
        {/* <li className="nav-item">
            <NavLink to="/blog" 
            
            style={({isActive,isPending}) =>{
                return{
                    fontWeight : isActive ? "bold" : "",
                    color : isPending ? "red" : "",
                    background : isActive ? "red":"",
                    borderBottomLeftRadius: 9,
                    borderBottomRightRadius: 9,
                    borderTopRightRadius: 9,
                    borderTopLeftRadius: 9,
                    overflow: 'hidden',
                    
                };
            }}
          
          className="nav-link">Blog</NavLink>
        </li> */}
        <li className="nav-item">
            <NavLink to="/register" 
            
            style={({isActive,isPending}) =>{
                return{
                    fontWeight : isActive ? "bold" : "",
                    color : isPending ? "red" : "",
                    background : isActive ? "red":"",
                    borderBottomLeftRadius: 9,
                    borderBottomRightRadius: 9,
                    borderTopRightRadius: 9,
                    borderTopLeftRadius: 9,
                    overflow: 'hidden',
                    
                };
            }}


          className="nav-link">Register</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/products" 

            style={({isActive,isPending}) =>{
                return{
                    fontWeight : isActive ? "bold" : "",
                    color : isPending ? "red" : "",
                    background : isActive ? "red":"",
                    borderRadius: "9px",
                    // borderBottomRightRadius: 9,
                    // borderTopRightRadius: 9,
                    // borderTopLeftRadius: 9,
                    // overflow: 'hidden',
                    
                };
            }}
          
          className="nav-link">Products</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/addProduct" 

            style={({isActive,isPending}) =>{
                return{
                    fontWeight : isActive ? "bold" : "",
                    color : isPending ? "red" : "",
                    background : isActive ? "red":"",
                    borderRadius: "9px",
                    // borderBottomRightRadius: 9,
                    // borderTopRightRadius: 9,
                    // borderTopLeftRadius: 9,
                    // overflow: 'hidden',
                    
                };
            }}
          
          className="nav-link">Add Product</NavLink>
        </li>
      </ul>
    </nav>










        // <div >
        //     <nav class="navbar navbar-expand-lg navbar-light bg-light">

        //         <div class="collapse navbar-collapse" id="navbarNav" >
        //             <ul class="navbar-nav" style={{ margin: 'auto'}}>
        //                 <li class="nav-item active">
        //                     <a class="nav-link" href="/">Home</a>
        //                 </li>
        //                 <li class="nav-item active">
        //                     <a class="nav-link" href="/login">Login</a>
        //                 </li>
        //                 <li class="nav-item active">
        //                     <a class="nav-link" href="/register">Register</a>
        //                 </li>
        //                 <li class="nav-item active">
        //                     <a class="nav-link" href="/products">Products</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </nav>
        // </div>
    )
}

export default Navbar