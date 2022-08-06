import React, { useState } from 'react'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Head, Heading, Cross } from '../Cart/Cart.style'
import { Field, FieldContainer, FormContainer, Verify } from './Login.style'
import { useDispatch } from "react-redux"
import Actions from '../../redux/actions'

const Login = ({ toast, closeCart }) => {
   const [phone, setPhone] = useState("");
   const [otp, setOtp] = useState("00000");
   const [conOtp, setConOtp] = useState("");
   const dispatch = useDispatch();
   const generateOTP = () => {
      let otp = (Math.random() * 9999).toFixed(0);
      if (otp < 1000) {
         otp = "0" + otp;
      }
      else if (otp < 100) {
         otp = "00" + otp;
      }
      else if (otp < 10) {
         otp = "000" + otp;
      }
      else if (otp === 0) {
         otp = "0000";
      }
      setOtp(otp);
      toast.info("Your otp is: " + otp, {
         autoClose: 3000
      });
   }

   const handleSubmit = () => {
      if (otp === "0000" || conOtp === "") {
         toast.error("Login failed!", {
            autoClose: 3000
         })
      }
      else if (conOtp === otp) {
         toast.success("Login successfully!", {
            autoClose: 3000
         });
         dispatch(Actions.loggedin())
         closeCart();
      }
   }

   return (
      <>
         <Head>
            <Cross onClick={closeCart}><FontAwesomeIcon icon={faArrowLeft} size="xl" /></Cross>
            <Heading>Login Details</Heading>
         </Head>
         <FormContainer>
            <FieldContainer>
               <Field type="text" name="phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
               <Verify onClick={generateOTP}>Verify</Verify>
            </FieldContainer>
            <FieldContainer>
               {
                  phone.length !== 10 && otp !== "0000" ?
                     <Field type="number" name="otp" id="otp" value={conOtp} onChange={(e) => setConOtp(e.target.value)} disabled />
                     :
                     <Field type="number" name="otp" id="otp" value={conOtp} onChange={(e) => setConOtp(e.target.value)} />


               }
            </FieldContainer>
            <FieldContainer>
               <Verify onClick={handleSubmit}>Submit</Verify>
            </FieldContainer>
         </FormContainer>
      </>
   )
}

export default Login