import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import {buy,sell} from "./redux/toy/toySlice"
import { fetchDataPromise } from './redux/products/productSlice'
import { addToCart } from './redux/cart/cartSlice'
function App() {
  const [count, setCount] = useState(0)
  const {toys}=useSelector(state=>state.toyData)
  const {cart} =useSelector(state=>state.cartData)
  const {data:productData}=useSelector(state=>state.productData)
  console.log(cart,"clicked")
  const dispatch=useDispatch()
console.log(productData,'productdata')
  useEffect(()=>{
    dispatch(fetchDataPromise())
  },[])

  
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
     {

      productData.length>0 && productData.map(each=><>
      <p>{each.title}</p>
      <button onClick={()=>dispatch(addToCart(each))}>Add to Cart</button>
      {/* <pre>{JSON.stringify(each)}</pre> */}
      </>)
     }
    </>
  )
}

export default App
