import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Cross, Head, Heading, Table, TableData, TableRow, FirstRow, RestRow, LastRow } from '../../components/Cart/Cart.style'
import CartValue from '../../components/Cart/CartValue/CartValue.component'
import { ButtonArrow, ButtonText, FooterContainer } from '../Products/Products.style'
import { PickupHeading, Container, PickupDetails, PickupDesc, PickupAdd, CartDetails, CartHeading, Button } from './Checkout.style'

const CheckoutPage = () => {
   const navigate = useNavigate();
   const cart = useSelector((state) => state.cart);
   const loginCheck = useSelector((state) => state.isloggedIn);
   const [totalCost, setTotalCost] = React.useState(0);
   const [tempCart, setTempCart] = React.useState(cart);

   function sortFunction(a, b) {
      if (a["_id"] === b["_id"]) {
         return 0;
      }
      else {
         return (a["_id"] < b["_id"]) ? -1 : 1;
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

   React.useEffect(() => {
      if (cart.length !== 0) {
         setTotalCost(calcTotalCost(cart))
         setTempCart(tempCart.sort(sortFunction))
      }
      else if (!loginCheck || cart.length === 0) {
         navigate("/");
      }
   }, [cart, loginCheck, navigate, tempCart])

   return (
      <Container>
         <Head>
            <Cross onClick={() => navigate("/")}><FontAwesomeIcon icon={faArrowLeft} /></Cross>
            <Heading>Checkout</Heading>
         </Head>
         <PickupDetails>
            <PickupHeading>Pickup</PickupHeading>
            <PickupDesc>
               <PickupAdd>Test</PickupAdd>
               <PickupAdd>Daalchini Office Noida Uttar Pradesh</PickupAdd>
               <PickupAdd>Order expires in 30 minutes</PickupAdd>
            </PickupDesc>
         </PickupDetails>
         <CartDetails>
            <CartHeading>Cart Details</CartHeading>
            <Table>
               <FirstRow>
                  <TableRow>
                     <TableData>Items</TableData>
                     <TableData>Qty</TableData>
                     <TableData>Amount</TableData>
                  </TableRow>
               </FirstRow>
               <RestRow height="100%">
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
         </CartDetails>
         <FooterContainer>
            <Button onClick={() => navigate("/orderconfirm")}>
               <ButtonText>Pay & Order</ButtonText>
               <ButtonArrow><FontAwesomeIcon icon={faArrowRight} /></ButtonArrow>
            </Button>
         </FooterContainer>
      </Container>
   )
}

export default CheckoutPage