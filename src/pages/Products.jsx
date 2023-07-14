import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, registerProducts, totalProducts } from '../redux/productReducer/action';
import style from "../pages/products.module.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AddProduct from './AddProduct';


const Products = () => {
 
  // const [show, setShow] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { products, isLoading, isError } = useSelector((store) => {
    return {
      products: store.productReducer.thing,
      isLoading: store.productReducer.isLoading,
      isError: store.productReducer.isError
    }
  })
  // console.log("product data",products)

 
  
    

    // console.log("product data", data)


  const handleDelete = (id) => {
    dispatch(deleteProduct(id)).then(()=>{
      dispatch(totalProducts)
    })
    // console.log("delete id", id)
  }
  useEffect(() => {
    dispatch(totalProducts).then(() => {
      dispatch(totalProducts)
    })
  }, [])
  // console.log("total products", products)

  return (
    
    <div>
          {/* <AddProduct/> */}

            <div className={style.container}>
              {isLoading ? <h1>Loading ....</h1> : isError ? <h1>Something Error...</h1> :
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", rowGap: '20px', margin: 'auto' }}>


                  {products && products.map((item) => (
                    <div className={style.card}>
                      <div className={style.img_box}>

                        <img src={item.image} alt="image" width={"60%"} height={"100%"} />
                      </div>
                      <h3>{item.title}</h3>
                      <h3>₹{item.price}/-</h3>
                      <h3>{item.category}</h3>
                      <h3>{item.brand}</h3>
                      <p>{item.desc}</p>



                      <Link to={`/edit/${item.id}`}><button type="submit" class="btn btn-success" style={{ marginLeft: 13 }} >EDIT</button></Link>
                      <button class="btn btn-danger" onClick={()=>handleDelete(item.id)} style={{marginLeft: 61}} >DELETE</button>
                    </div>
                  ))}
                </div>
              }
            </div>
        
        </div>
  )
}

export default Products

// value={formdata.confpassword} onChange={handleChange}