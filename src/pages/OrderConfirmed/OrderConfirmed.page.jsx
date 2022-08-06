import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import Actions from '../../redux/actions'
import { ButtonContainer, Container, ContinueButton, IconContainer, LogoutButton, SubContainer } from './OrderConfirmed.style'

const OrderConfirm = () => {
   const dispatch = useDispatch();
   const isloggedIn = useSelector((state) => state.isloggedIn);
   const cart = useSelector((state) => state.cart);
   const navigate = useNavigate();

   useEffect(() => {
      if (!isloggedIn) {
         navigate("/");
      }
      else {
         if (cart.length !== 0)
            dispatch(Actions.orderPlaced());
      }
   }, [dispatch, cart, isloggedIn, navigate])

   const handleLogout = () => {
      dispatch(Actions.loggedOut());
   }

   const handleContinue = () => {
      navigate("/");
   }

   return (
      <Container>
         <SubContainer>
            <IconContainer>
               <FontAwesomeIcon icon={faCircleCheck} size="7x" color='var(--green)' />
            </IconContainer>
            <ButtonContainer>
               <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
               <ContinueButton onClick={handleContinue}>Continue Shopping</ContinueButton>
            </ButtonContainer>
         </SubContainer>
      </Container>
   )
}

export default OrderConfirm