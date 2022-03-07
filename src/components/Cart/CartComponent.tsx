import { FC, useContext, useState, useEffect } from 'react'
import { Card, Button } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

import "./CartComponent.css"

import CartContext from '../../context/cart/cart-context'


const CartComponent: FC = () => {

  const { cart } = useContext(CartContext)

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
                <Button icon={<MinusOutlined />} />

                <div className='quantity__CartComponent'>
                  {singleCart?.items}
                </div>
                <Button icon={<PlusOutlined />} />

              </div>

            </div>
          </Card>
        )

      })}

    </div>
  )
}

export default CartComponent