import React, { useEffect, useState } from 'react'
import ProductListComp from '../../components/ProductList/ProductList.component'
import products from "./products.js"
import { Container, ProductContainer, CartContainer, FooterContainer, ComponentContainer, ButtonContainer, ButtonText, ButtonArrow, DetailContainer, Detail, ArrowContainer, Component } from './Products.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowRight, faArrowUp } from "@fortawesome/free-solid-svg-icons"
import Cart from '../../components/Cart/Cart.component';
import { useDispatch, useSelector } from 'react-redux';
import Actions from '../../redux/actions';
import Login from '../../components/Login/Login.component';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router'

const ProductsPage = () => {
   const [showComponent, setShowComponent] = useState(false)
   const [component, setComponent] = useState(null);
   const dispatch = useDispatch();
   const allProducts = useSelector((state) => state.products)
   const loggedIn = useSelector((state) => state.isloggedIn);
   const cart = useSelector((state) => state.cart);
   const [totalCost, setTotalCost] = useState(0);
   const navigate = useNavigate();

   const handleCartClick = () => {
      if (showComponent === true) {
         if (component === "cart") {
            setShowComponent(false);
            setComponent(null);
         }
         else {
            setComponent("cart")
         }
      }
      else {
         if (component !== "cart") {
            setComponent("cart")
            setShowComponent(true)
         }
      }
   }

   const calcTotalCost = (funCart) => {
      if (funCart.length) {
         let sum = 0;
         for (let i = 0; i < funCart.length; i++) {
            sum += funCart[i].quantity * funCart[i].discountedAmount;
         }
         return sum;
      }
   }

   const handleButtonClick = (text) => {
      if (text === "checkout") {
         navigate("/checkout")
      }
      else if (text === "login") {
         if (showComponent === true) {
            if (component === "login") {
               setShowComponent(false);
               setComponent(null);
            }
            else {
               setComponent("login")
            }
         }
         else {
            if (component !== "login") {
               setComponent("login")
               setShowComponent(true)
            }
         }
      }
   }

   useEffect(() => {
      if (allProducts.length === 0)
         dispatch(Actions.productLoaded(products));
      else {
         if (cart.length !== 0) {
            setTotalCost(calcTotalCost(cart))
         }
      }
   }, [dispatch, allProducts, cart])

   return (
      <Container>
         <ToastContainer />
         <ProductContainer showComponent={showComponent}>
            {
               products.map((item, index) => {
                  return <ProductListComp key={index} totalCost={totalCost} setTotalCost={setTotalCost} data={item} />
               })
            }
         </ProductContainer>
         {
            showComponent ?
               component === "cart" ?
                  <ComponentContainer>
                     <Component>
                        <Cart closeCart={handleCartClick} totalCost={totalCost} setTotalCost={setTotalCost} />
                     </Component>
                  </ComponentContainer> :
                  component === "login" ?
                     <ComponentContainer>
                        <Component>
                           <Login closeCart={() => handleButtonClick("login")} toast={toast} />
                        </Component>
                     </ComponentContainer> :
                     null :
               null
         }
         <FooterContainer>
            <CartContainer onClick={handleCartClick}>
               <DetailContainer>
                  <Detail>{cart.length} {cart.length === 1 ? "item" : "items"}</Detail>
                  <Detail>Total Rs {totalCost}</Detail>
               </DetailContainer>
               <ArrowContainer>
                  {showComponent && component === "cart" ? <FontAwesomeIcon icon={faArrowDown} size="xl" color='white' /> : <FontAwesomeIcon icon={faArrowUp} size="xl" color='white' />}
               </ArrowContainer>
            </CartContainer>
            {
               !loggedIn ?
                  <ButtonContainer onClick={() => handleButtonClick("login")}>
                     <ButtonText>Login</ButtonText>
                     <ButtonArrow>
                        <FontAwesomeIcon icon={faArrowRight} />
                     </ButtonArrow>
                  </ButtonContainer>
                  :
                  <ButtonContainer onClick={() => handleButtonClick("checkout")}>
                     <ButtonText>Checkout</ButtonText>
                     <ButtonArrow>
                        <FontAwesomeIcon icon={faArrowRight} />
                     </ButtonArrow>
                  </ButtonContainer>
            }
         </FooterContainer>
      </Container>
   )
}

export default ProductsPage