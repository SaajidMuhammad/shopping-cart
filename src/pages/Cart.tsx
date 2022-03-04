import React, { FC } from 'react'
import CartComponent from '../components/Cart/CartComponent'
import Navbar from '../components/Navbar/Navbar'

const Cart: FC = () => {
  return (
    <>

      <Navbar />

      <CartComponent />
    </>
  )
}

export default Cart