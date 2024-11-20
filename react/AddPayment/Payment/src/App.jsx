import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }
  const onPayment=async()=>{
    const id="5";
    const amount=1;
    try {
      const res = await axios.post('https://5000-firojahmed1-tutorialtes-y9rjtz4svr1.ws-us116.gitpod.io/api/payment/createPayment',{
        id,
        amount
      },
      {
        headers: {
          'Content-Type': 'application/json'
        },
        
      }
    );
    const data= res.data.data;
    console.log(data);
    const paymentObject= new window.Razorpay({
      key: "rzp_test_DYwio7wiUjR6Q9", // Enter the Key ID generated from the Dashboard
      order_id: data.id,
       // Amount is in paise
      ...data,
      handler: function  (response) {
        console.log(response);
        const options={
          razorpay_payment_id:response.razorpay_payment_id,
          razorpay_order_id:response.razorpay_order_id,
          razorpay_signature:response.razorpay_signature
        }
        axios.post('https://5000-firojahmed1-tutorialtes-y9rjtz4svr1.ws-us116.gitpod.io/api/payment/verifyPayment',options).then(res=>{
          console.log(res.data);
          alert(res.data.message);
        }).catch(err=>{
          console.log(err);
        })
        
      }
    })
    paymentObject.open();
    

    } catch (error) {
      console.log(error)
    }
    
  }
  
  useEffect(() => {
    loadScript('https://checkout.razorpay.com/v1/checkout.js')
  },[])
  return (
    <>
      <h2>Add Payment Method</h2>
      <button onClick={onPayment}>Pay</button>
    </>
  )
}

export default App
