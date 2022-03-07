import { FC, useContext, useState, useEffect } from 'react'
import { Card, Button } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

import "./CartComponent.css"

import CartContext from '../../context/cart/cart-context'


const CartComponent: FC = () => {

  const { cart, changeQuantity } = useContext(CartContext)

  return (
    <div className='wrapper__CartComponent'>

      {cart?.map((singleCart: any, i: number) => {

        return (

          <Card>
            <div className='single-item__CartComponent'>
              <img className='image__CartComponent' src={singleCart?.imgURL} alt="" style={{ objectFit: "cover" }} />
              <div className='name__CartComponent'>
                {singleCart?.name}
              </div>

              <div className='price__CartComponent'>
                {singleCart?.price + " " + singleCart?.currency}
              </div>

              <div className='quantity-wrapper__CartComponent'>
                <Button icon={<MinusOutlined />} onClick={() => changeQuantity(singleCart, "dec")} />

                <div className='quantity__CartComponent'>
                  {singleCart?.items}
                </div>
                <Button icon={<PlusOutlined />} onClick={() => changeQuantity(singleCart, "inc")} />

              </div>

            </div>
          </Card>
        )

      })}

      {cart.length > 0 && <Link to="/success" > <Button type="primary" shape="round" className='checkout-button__CartComponent'>Checkout</Button> </Link>}

    </div>
  )
}

export default CartComponent