import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import { AddButton, Amount, AmountContainer, AmountDetContainer, Btn, DescContainer, DiscountedAmount, HeadingContainer, Image, ItemContainer, ItemDetailContainer, ItemImageContainer, QuantityButton, QuantityButtonContainer } from "./ProductList.style"
import { faMinus, faPlus, faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import Actions from '../../redux/actions';

const ProductListComp = ({ data, totalCost, setTotalCost }) => {
   const cart = useSelector((state) => state.cart);
   const [addButton, setAddButton] = useState(true);
   const dispatch = useDispatch();
   const [quantity, setQuantity] = useState(1);
   const calcTotalCost = (funCart) => {
      if (funCart.length) {
         let sum = 0;
         for (let i = 0; i < funCart.length; i++) {
            sum += funCart[i].quantity * funCart[i].discountedAmount;
         }
         return sum;
      }
   }

   useEffect(() => {
      if (cart.length !== 0) {
         let index = cart.findIndex((val) => val._id === data._id)
         if (index !== -1) {
            setAddButton(false);
            setQuantity(cart[index].quantity);
         }
      }
   }, [cart, data])

   const handleAddButton = () => {
      // updateCart([...cart, { ...data, quantity: quantity }])
      dispatch(Actions.itemAdded({ ...data, quantity: quantity }))
      let cost = totalCost;
      if (cart.length) {
         cost += data.discountedAmount * quantity;
      }
      else {
         cost = data.discountedAmount * quantity;
      }
      console.log(data._id, "ITEM_ADDED", quantity, "Cost:", cost)
      setTotalCost(cost)
      setAddButton(false)
   }

   const decQuantity = () => {
      if (quantity === 1) {
         let changedCart = cart.filter((obj) => {
            return obj._id !== data._id
         })
         dispatch(Actions.cartLoaded(changedCart))
         let cost = calcTotalCost(changedCart) === undefined ? 0 : calcTotalCost(changedCart)
         console.log(data._id, "QUAN_DEC", 0, "Cost:", cost)
         setTotalCost(cost)
         setAddButton(true)
      }
      else {
         let remWant = cart.filter((e) => e._id !== data._id)
         dispatch(Actions.cartLoaded(remWant))
         let remNotWant = cart.filter((e) => e._id === data._id)
         remNotWant[0].quantity -= 1
         dispatch(Actions.itemQuanDec(...remNotWant))
         let cost = calcTotalCost(cart)
         console.log(data._id, "QUAN_DEC", quantity - 1, "Cost:", cost)
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
         let remWant = cart.filter((e) => e._id !== data._id)
         dispatch(Actions.cartLoaded(remWant))
         let remNotWant = cart.filter((e) => e._id === data._id)
         remNotWant[0].quantity += 1
         dispatch(Actions.itemQuanInc(...remNotWant))
         let cost = calcTotalCost(cart)
         console.log(data._id, "QUAN_INC", quantity + 1, "Cost:", cost)
         setTotalCost(cost)
         setQuantity(quantity + 1)
      }
   }

   return (
      <ItemContainer>
         <ToastContainer />
         <ItemImageContainer>
            <Image src={data.image} />
         </ItemImageContainer>
         <ItemDetailContainer>
            <HeadingContainer>{data.name}</HeadingContainer>
            <DescContainer>{data.desc.length > 110 ? data.desc.slice(0, 110) + "..." : data.desc}</DescContainer>
            <AmountDetContainer>
               <AmountContainer>
                  <DiscountedAmount>
                     <FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />
                     {data.discountedAmount}
                  </DiscountedAmount>
                  <Amount>
                     <FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />
                     {data.amount}
                  </Amount>
               </AmountContainer>
               <QuantityButtonContainer>
                  {
                     addButton ?
                        <AddButton onClick={handleAddButton}>Add</AddButton> :
                        <QuantityButton>
                           <Btn onClick={decQuantity}> <FontAwesomeIcon icon={faMinus} /> </Btn>
                           <Btn>{quantity}</Btn>
                           <Btn onClick={incQuantity}> <FontAwesomeIcon icon={faPlus} /> </Btn>
                        </QuantityButton>
                  }
               </QuantityButtonContainer>

            </AmountDetContainer>
         </ItemDetailContainer>
      </ItemContainer>
   )
}

export default ProductListComp