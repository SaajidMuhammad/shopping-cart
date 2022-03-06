import { FC, useEffect, useState, useContext } from 'react'
import "./DetailedProduct.css"
import axios from 'axios'

import { Card, Image, Rate, Divider, Button } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

import ProductContext from '../../context/products/products-context'


const DetailedProduct: FC = () => {
  // Contexts
  const { products, updateProducts } = useContext(ProductContext)

  // States
  const [currProd, setCurrProd] = useState<any | null>(null)
  const [prodRefetched, setProdRefetched] = useState<boolean>(false)
  const [quantity, setQuantity] = useState<number>(1)

  useEffect(() => {
    let currentId = window.location.href.split("/").pop()

    if (products.length > 0) {
      getCurrentProdDetails(currentId)
    } else {
      getAllProducts()
    }
  }, [prodRefetched])


  const getAllProducts = (async () => {

    setProdRefetched(false)

    try {
      const { data } = await axios.get('/api/all-products');
      updateProducts(data.products)
      setProdRefetched(true)
    } catch (error) {
      console.error("error", error)
    }
  })


  const getCurrentProdDetails = ((currentId: string | undefined) => {
    let currentProd = products.filter((product: any) => {
      if (product.id == currentId) {
        return true
      }
    })
    setCurrProd(currentProd)
  })


  return (
    <div className='wrapper__DetailedProduct'>
      <Card>

        {currProd != null &&
          <div className='container__DetailedProduct'>
            <div className='image-div__DetailedProduct'>
              <Image
                className='image__DetailedProduct'
                src={currProd[0].imgURL}
              />
            </div>
            <div className='details__DetailedProduct'>
              <div className='title__DetailedProduct'>
                {currProd[0].name}
              </div>

              <div className='rating__DetailedProduct'>
                <Rate disabled defaultValue={2} />
                <div className='rating-no__DetailedProduct'>
                  {currProd[0].totalRates}
                </div>
              </div>

              <Divider />


              <div className='description__DetailedProduct'>
                {currProd[0].description}
              </div>

              <Divider />


              <div className='price__DetailedProduct'>
                {currProd[0].price + " " + currProd[0].currency}
              </div>

              <Divider />

              <div className='quantity-wrapper__DetailedProduct'>
                <Button icon={<MinusOutlined />} onClick={() => { quantity > 1 ? setQuantity(quantity - 1) : setQuantity(quantity) }} />

                <div className='quantity__DetailedProduct'>
                  {quantity}
                </div>
                <Button icon={<PlusOutlined onClick={() => { quantity < 10 ? setQuantity(quantity + 1) : setQuantity(quantity) }} />} />

              </div>

              <div className='button-wrapper__DetailedProduct' >
                <Button type="primary" block >
                  ADD TO CART
                </Button>
              </div>
            </div>
          </div>}

      </Card>
    </div>
  )
}

export default DetailedProduct