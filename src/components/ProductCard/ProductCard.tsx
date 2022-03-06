import React, { useEffect, FC, useContext } from 'react'
import { Card, Rate, Button } from 'antd';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './ProductCard.css'

import ProductContext from '../../context/products-context'

interface IAllProducts {
  id: string;
  name: string;
  describe?: string;
  price: string;
  currency?: string;
  totalRates?: string;
  totalRaters?: string;
  imgURL?: string;
}

const ProductCard: FC = () => {
  const { updateProducts, products } = useContext(ProductContext)

  useEffect(() => {
    getAllProducts()
  }, [])

  const navigate = useNavigate();

  const getAllProducts = (async () => {
    try {
      const { data } = await axios.get('/api/all-products');
      updateProducts(data.products)

    } catch (error) {
      console.error("error", error)
    }
  })

  const productClicked = ((prodId: string) => {
    navigate(`/product-details/${prodId}`);
  })


  return (
    <>
      <div className="cards-wrapper__ProductCard ">
        {products?.map((prod: IAllProducts) => {
          return (
            <Card
              key={prod.id}
              hoverable
              className='card__ProductCard'
              cover={<img alt="example" onClick={() => { productClicked(prod.id) }} src={prod?.imgURL} style={{ height: 280, objectFit: "cover" }} />}
            >
              <div onClick={() => { productClicked(prod.id) }}>
                <div className='product-name__ProductCard'>
                  {prod?.name}
                </div>
                <div className='price__ProductCard'>
                  {prod?.price} {prod?.currency}
                </div>
                <div>
                  <Rate disabled defaultValue={3} />
                </div>
              </div>
              <Button type="primary" block style={{ marginTop: "10px" }} >Add To Cart</Button>
            </Card>
          )
        })}
      </div>
    </>
  )
}

export default ProductCard