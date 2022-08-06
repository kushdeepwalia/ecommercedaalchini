import styled from "styled-components";

export const ItemContainer = styled.div`
   display: flex;
   width: 95%;
   height: 120px;
   margin-top: 10px;
   padding-top: 20px;
   border-top: 1px solid lightgrey;

   &:first-child{
      border: 0
   }
`

export const AmountDetContainer = styled.div`
   display: flex;
`

export const ItemImageContainer = styled.div`
   width: 100px;
   height: 100px;
   margin: 5px 8px 4px 15px;
`

export const Image = styled.img`
   width: 90px;
   height: 90px;
`

export const ItemDetailContainer = styled.div`
   margin: 5px 5px 4px 5px;
   height: 100px;
   width: calc(100% - 100px);
   display: flex;
   justify-content: space-evenly;
   flex-direction: column;
`

export const HeadingContainer = styled.div`
   font-weight: bold;
   font-size: 20px;

   @media (max-width: 500px){
      font-size: 15px;
   }
`

export const DescContainer = styled.div`
   font-weight: lighter ;
   font-style: italic;
   font-size: 14px;
   color: grey;
   
   @media (max-width: 500px){
      font-size: 12px;
   }
`

export const AmountContainer = styled.div`
   width: 70%;
`

export const DiscountedAmount = styled.span`
   font-size: 19px;
   font-weight: bold;
`

export const Amount = styled.span`
   font-size: 15px;
   color: grey;
   margin-left: 10px;
   text-decoration: line-through;
`

export const QuantityButtonContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: flex-end;
`

export const AddButton = styled.div`
   background-color: green;
   width: 65px;
   height: 25px;
   display: flex;
   justify-content: center;
   color: white;
   font-size: 16px;
   align-items: center;
   cursor: pointer;
`

export const QuantityButton = styled.div`
   width: 65px;
   height: 25px;
   background-color: white;
   border: 1px solid green;
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   `

export const Btn = styled.div`
   height: 100%;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   color: green;
   &:not(:nth-child(2)){
      cursor: pointer;
      font-weight: bolder;
   }
   &:nth-child(2){
      font-size: 20px;
      margin-top: -3px;
   }
`