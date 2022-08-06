import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CheckoutPage from './pages/Checkout/Checkout.page'
import ProductsPage from './pages/Products/Products.page'

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App