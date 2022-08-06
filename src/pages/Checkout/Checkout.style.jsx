import styled from "styled-components";
import { ButtonContainer } from "../Products/Products.style";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 30px 0;
   width: 100%;
   height: 100vh;
`

export const PickupDetails = styled.div`
   margin: 30px 0;
   width: 90%;
   display: flex;
   flex-direction: column;
   padding: 0 10px;
   height: 10vh;
`

export const PickupHeading = styled.div`
   color: lightgrey;
   width: 100%;
   border-bottom: 1px solid lightgrey;
`

export const PickupDesc = styled.div`

`

export const PickupAdd = styled.p`
   margin: 0;

   &:nth-child(1){
      font-weight: bold;
   }
   &:nth-child(2){
      
   }
   &:nth-child(3){
      font-size: 14px;
      font-style: italic;
   }
`

export const CartDetails = styled(PickupDetails)`
   margin: 0 0 30px 0; 
   height: calc(70vh - 30px);
`

export const CartHeading = styled(PickupHeading)`
   
`

export const Button = styled(ButtonContainer)`
   width: unset;
`