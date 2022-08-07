import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding-top: 20px;
`

export const Head = styled.div`
   width: 100%;
   height: 30px;
   display: flex;
   justify-content: space-evenly;
   align-items: center;
`

export const Heading = styled.div`
   width: 95%;
   font-size: 20px;
   text-align: center;
`

export const Cross = styled.div`
   cursor: pointer;
   margin: 0 15px;
`

export const Table = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 100%;
   width: 95%;
`

export const FirstRow = styled.div`
   width: 95%;
   display: flex;
   justify-content: space-between;
   font-weight: bold;
`

export const RestRow = styled.div`
   width: 95%;
   height: ${props => props.height ? props.height : "230px"};
   display: flex;
   flex-direction: column;
   overflow-y: auto;
   scrollbar-width: 3px;
`

export const LastRow = styled(FirstRow)`
   
`

export const TableRow = styled.div`
   display: flex;
   width: 100%;
   justify-content: space-between;

   ${FirstRow} &{
      margin-top: 10px;
      margin-bottom: 10px;
   }
   
   ${RestRow} &{
      margin: 10px 0;
   }
`

export const TableData = styled.div`
   display: flex;
   &:nth-child(1){
      width: 50%;
      justify-content: flex-start;
   }
   &:nth-child(2){
      width: 30%;
      margin: 0 30px;
      justify-content: center;
   }
   &:nth-child(3){
      width: 20%;
      justify-content: flex-end;
   }

   ${LastRow} > ${TableRow} > &:nth-child(1){
      width: 60%;
   }

   ${LastRow} > ${TableRow} > &:nth-child(2){
      width: 40%;
      margin: 0;
      justify-content: flex-end;
   }
`