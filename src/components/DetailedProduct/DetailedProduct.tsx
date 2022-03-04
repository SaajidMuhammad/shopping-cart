import React from 'react'
import "./DetailedProduct.css"

import { Card, Image, Rate, Divider, Button } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';


const DetailedProduct = () => {
  return (
    <div className='wrapper__DetailedProduct'>

      <Card>
        <div className='container__DetailedProduct'>
          <div className='image-div__DetailedProduct'>

            <Image
              className='image__DetailedProduct'
              src="https://www.notebookcheck.net/fileadmin/_processed_/0/9/csm_Untitled_2_5_2a2aef7903.jpg"
            />

          </div>
          <div className='details__DetailedProduct'>

            <div className='title__DetailedProduct'>
              Product Name  Product Name  Product Name  Product Name  Product Name
            </div>


            <div className='rating__DetailedProduct'>




              <Rate disabled defaultValue={2} />

              <div className='rating-no__DetailedProduct'>
                23 Ratings
              </div>

            </div>

            <Divider />


            <div className='description__DetailedProduct'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>

            <Divider />


            <div className='price__DetailedProduct'>
              27000 LKR
            </div>

            <Divider />

            <div className='quantity-wrapper__DetailedProduct'>
              <Button icon={<MinusOutlined />} />

              <div className='quantity__DetailedProduct'>
                2
              </div>
              <Button icon={<PlusOutlined />} />

            </div>

            <div className='button-wrapper__DetailedProduct' >
              <Button type="primary" block >
                ADD TO CART
              </Button>
            </div>


          </div>



        </div>
      </Card>






    </div>
  )
}

export default DetailedProduct