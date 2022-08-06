import styled from "styled-components";

export const Container = styled.div`

`

export const ProductContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 100%;
   margin: 3vh 0 9vh 0;
   ${props => props.showComponent ? "pointer-events: none; overflow: hidden; height: 90vh; margin: 0; margin-top: 3vh" : null}
`

export const ComponentContainer = styled.div`
   position: fixed;
   bottom: 8vh;
   height: 92vh;
   width: 100%;
   display: flex;
   align-items: flex-end;
   background-color: #00000065;
`

export const Component = styled.div`
   width: 100%;
   max-height: 60vh;
   min-height: 45vh;
   background-color: #e9e8e8;
`

export const FooterContainer = styled.div`
   width: 100%;
   position: fixed;
   bottom: 0;
   height: 8vh;
   background-color: var(--green);
   display: flex;
   justify-content: space-evenly;
   align-items: center;
`

export const CartContainer = styled.div`
   width: 100px;
   height: 80%;
   border-radius: 10px;
   background-color: #00000065;
   cursor: pointer;
   display: flex;
   justify-content: space-between;
   align-items: center;
`

export const DetailContainer = styled.div`
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding-left: 4px;
`

export const Detail = styled.p`
   margin: 0;
   font-size: 13px;
   color: white;

`

export const ArrowContainer = styled.div`
   padding-right: 4px;
`

export const ButtonContainer = styled.div`
   height: 80%;
   width: 100px;
   display: flex;
   align-items: center;
   color: white;
   cursor: pointer;
`

export const ButtonText = styled.span`
   font-size: 20px;
`

export const ButtonArrow = styled.div`
   display: flex;
   align-items: center;
   height: 100%;
   padding-top: 5px;
   padding-left: 10px;
`