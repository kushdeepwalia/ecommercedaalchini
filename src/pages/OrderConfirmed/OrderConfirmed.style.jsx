import styled from "styled-components"

export const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #00000065;
`

export const SubContainer = styled.div`
   width: 400px;
   height: 300px;
   
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
   background-color: white;
`

export const IconContainer = styled.div`
   height: 150px;
   
   display: flex;
   justify-content: center;
   align-items: center;
`

export const ButtonContainer = styled.div`
   height: 80px;
   width: 100%;
   
   display: flex;
   justify-content: center;
   align-items: center;
`

export const LogoutButton = styled.div`
   border: 1px solid var(--green);
   color: var(--green);
   padding: 0 10px;
   height: 50%;
   font-weight: bold;
   font-size: 17px;
   
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
`

export const ContinueButton = styled(LogoutButton)`
   margin-left: 15px;
   background-color: var(--green);
   color: white;
`