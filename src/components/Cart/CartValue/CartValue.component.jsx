import React, { useState } from 'react'
import { QuantityButton, Btn } from '../../ProductList/ProductList.style'
import { TableRow, TableData } from '../Cart.style'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import Actions from '../../../redux/actions';

const CartValue = ({ item, setTempCart, setTotalCost }) => {
   const [quantity, setQuantity] = useState(item.quantity);
   const dispatch = useDispatch();
   const cart = useSelector((state) => state.cart);
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
         let index = cart.findIndex((val) => val._id === item._id)
         if (index !== -1) {
            setQuantity(cart[index].quantity);
         }
      }
   }, [cart, item])

   const decQuantity = () => {
      console.log(item._id, quantity);
      if (quantity === 1) {
         let changedCart = cart.filter((obj) => {
            return obj._id !== item._id
         })
         setTempCart(changedCart);
         dispatch(Actions.cartLoaded(changedCart))
         let cost = calcTotalCost(changedCart) === undefined ? 0 : calcTotalCost(changedCart)
         setTotalCost(cost)
      }
      else {
         let remWant = cart.filter((e) => e._id !== item._id)
         dispatch(Actions.cartLoaded(remWant))
         let remNotWant = cart.filter((e) => e._id === item._id)
         remNotWant[0].quantity -= 1
         dispatch(Actions.itemQuanDec(...remNotWant))
         let cost = calcTotalCost(cart)
         setTotalCost(cost)
         setQuantity(quantity - 1)
      }
   }

   const incQuantity = () => {
      if (quantity === 10) {
         toast("You have reached the max limit!!", {
            icon: "warning",
            autoClose: 3000
         })
      }
      else {
         let remWant = cart.filter((e) => e._id !== item._id)
         dispatch(Actions.cartLoaded(remWant))
         let remNotWant = cart.filter((e) => e._id === item._id)
         remNotWant[0].quantity += 1
         dispatch(Actions.itemQuanInc(...remNotWant))
         let cost = calcTotalCost(cart)
         setTotalCost(cost)
         setQuantity(quantity + 1)
      }
   }

   return (
      <TableRow>
         <TableData>{item.name}</TableData>
         <TableData>
            <QuantityButton>
               <Btn onClick={decQuantity}> <FontAwesomeIcon icon={faMinus} /> </Btn>
               <Btn>{item.quantity}</Btn>
               <Btn onClick={incQuantity}> <FontAwesomeIcon icon={faPlus} /> </Btn>
            </QuantityButton>
         </TableData>
         <TableData>Rs {item.discountedAmount}</TableData>
      </TableRow>
   )
}

export default CartValue