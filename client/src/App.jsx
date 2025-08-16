import React, { useContext } from 'react'
import {Routes , Route, useLocation} from "react-router-dom"
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import { AppContext } from './Context/AppContext'
import Navbar from './Components/Navbar'
import Seller from './pages/Seller'
import MyOrders from './pages/MyOrders'
import Auth from './models/Auth'
const App = () => {
  const {isSeller , showUserLogin} = useContext(AppContext)
  const isSellerPath = useLocation().pathname.includes("seller")
  return (
    <div>
      {isSellerPath ? null : <Navbar /> }
      {
        showUserLogin ? <Auth /> : null
      }
     <div>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/seller" element={<Seller />} />
         <Route path="/products" element={<Products />} />
         <Route path="/products/:id" element={<ProductDetails />} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/my-orders" element={<MyOrders />} />
       </Routes>
     </div>
    </div>
  )
}

export default App
