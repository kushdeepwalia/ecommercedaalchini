import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CheckoutPage from './pages/Checkout/Checkout.page'
import OrderConfirm from './pages/OrderConfirmed/OrderConfirmed.page'
import ProductsPage from './pages/Products/Products.page'

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/orderconfirm" element={<OrderConfirm />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App