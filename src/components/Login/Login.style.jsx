import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   height: 100%;
   padding-top: 20px;
`

export const FormContainer = styled.div`
   width: 100%;
   flex-direction: column;
   display: flex;
   justify-content: center;
   align-items: center;
`

export const FieldContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 70%;
   margin: 20px 0;
   &:nth-child(1){
      margin-bottom: 0;
      margin-top: 40px;
   }
   &:nth-child(3){
      margin-bottom: 0;
   }
`

export const Field = styled.input`
   width: 100%;
   height: 30px;
   padding-left: 10px;
   outline: none;

   &::-webkit-outer-spin-button,
   &::-webkit-inner-spin-button{
      -webkit-appearance: none;
   }

`

export const DoLater = styled.div`
   text-decoration: underline;
   margin-top: 10px;
   cursor: pointer;
`

export const Verify = styled.div`
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   width: ${props => props.type === "Submit" ? "40%" : "30%"};
   background-color: var(--green);
   color: white;
   height: 35px;
   ${props => props.type === "verify" ? "margin-left: 20px;" : null}
`