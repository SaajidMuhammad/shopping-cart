import React, { useEffect, useState, FC } from 'react'
import { Card, Rate, Button } from 'antd';
import axios from 'axios'
import { Link } from 'react-router-dom';
import "./ProductCard.css"

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
  const [allProducts, setAllProducts] = useState<IAllProducts[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    getAllProducts()
  }, [])


  const getAllProducts = (async () => {
    try {
      const { data } = await axios.get('/api/all-products');

      setAllProducts(data.products)
      setIsLoaded(true)

    } catch (error) {
      console.error("error", error)
    }
  })



  return (

    <>
      <div className="cards-wrapper__ProductCard ">
        {isLoaded ? allProducts?.map((prod, i) => {
          return (
            <Card
              hoverable
              className='card__ProductCard'
              cover={<img alt="example" src="https://www.notebookcheck.net/fileadmin/_processed_/0/9/csm_Untitled_2_5_2a2aef7903.jpg" style={{ height: 280 }} />}
            >

              <Link to="/product-details/123">
                <div className='product-name__ProductCard'>
                  {allProducts?.name}
                </div>

                <div className='price__ProductCard'>
                  12000 LKR
                </div>

                <div>
                  <Rate disabled defaultValue={2} />
                </div>
              </Link>
              <Button type="primary" block style={{ marginTop: "10px" }} >Add To Cart</Button>
            </Card>
          )
        }) : ""}
      </div>
    </>
  )
}

export default ProductCard