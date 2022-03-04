import React, { FC } from 'react'
import { Card, Button } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

import "./CartComponent.css"


const CartComponent: FC = () => {
  return (
    <div className='wrapper__CartComponent'>
      <Card>
        <div className='single-item__CartComponent'>


          <img className='image__CartComponent' src="https://static-01.daraz.lk/p/10dfb533278193e129a1fe308272326d.jpg" alt="" />
          <div className='name__CartComponent'>
            Name
          </div>

          <div className='price__CartComponent'>
            12000 LKR
          </div>

          <div className='quantity-wrapper__CartComponent'>
            <Button icon={<MinusOutlined />} />

            <div className='quantity__CartComponent'>
              2
            </div>
            <Button icon={<PlusOutlined />} />

          </div>

        </div>
      </Card>
    </div>
  )
}

export default CartComponent