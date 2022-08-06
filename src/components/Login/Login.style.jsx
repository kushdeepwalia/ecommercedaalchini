import styled from "styled-components";

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
`

export const Field = styled.input`
   width: 100%;
   height: 30px;
`

export const Verify = styled.div`
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 30%;
   background-color: var(--green);
   color: white;
   height: 35px;
`