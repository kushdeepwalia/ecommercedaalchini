import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Cross, Head, Heading, Table, TableData, TableRow, FirstRow, RestRow, LastRow } from './Cart.style'
import CartValue from './CartValue/CartValue.component';
import { useSelector } from 'react-redux';

const Cart = ({ closeCart, totalCost, setTotalCost }) => {
   const cart = useSelector((state) => state.cart);
   const [tempCart, setTempCart] = useState(cart);

   function sortFunction(a, b) {
      if (a["_id"] === b["_id"]) {
         return 0;
      }
      else {
         return (a["_id"] < b["_id"]) ? -1 : 1;
      }
   }

   useEffect(() => {
      if (tempCart.length !== 0) {
         setTempCart(tempCart.sort(sortFunction))
      }
   }, [tempCart])

   return (
      <>
         <Head>
            <Heading>Cart Details</Heading>
            <Cross onClick={closeCart}><FontAwesomeIcon icon={faClose} size="xl" /></Cross>
         </Head>
         <Table>
            <FirstRow>
               <TableRow>
                  <TableData>Items</TableData>
                  <TableData>Qty</TableData>
                  <TableData>Amount</TableData>
               </TableRow>
            </FirstRow>
            <RestRow>
               {
                  cart.length !== -1 ?
                     tempCart.map((item, index) => {
                        return <CartValue setTempCart={setTempCart} item={item} key={index} totalCost={totalCost} setTotalCost={setTotalCost} />
                     })
                     : null
               }
            </RestRow>
            <LastRow>
               <TableRow>
                  <TableData>Total</TableData>
                  <TableData>Rs {totalCost}</TableData>
               </TableRow>
            </LastRow>
         </Table>
      </>
   )
}

export default Cart