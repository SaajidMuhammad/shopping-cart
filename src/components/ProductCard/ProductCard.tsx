import React, { useEffect, useState, FC } from 'react'
import { Card, Col, Row, Rate, Button } from 'antd';

import axios from 'axios'

// const { Meta } = Card;

import "./ProductCard.css"
import { Link } from 'react-router-dom';




const ProductCard: FC = () => {

  const [allProducts, setAllProducts] = useState([])
  const [test, setTest] = useState("test")

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {

    getAllProducts()

  }, [])


  const getAllProducts = (async () => {

    console.log("getAllProducts")

    try {
      const { data } = await axios.get('/api/all-products');

      console.log("gotAllProducts")

      setTest("updated")

      setAllProducts(data.products)
      setIsLoaded(true)

      console.log(isLoaded)

    } catch (error) {
      console.log("error", error)
    }
  })



  return (

    <>


      <div>
      </div>
      <Row gutter={[32, 32]} justify="center">

        {isLoaded ? allProducts?.map((prod, i) => {

          return (
            <Col span={5} key={i}>
              <Card
                hoverable
                cover={<img alt="example" src="https://www.notebookcheck.net/fileadmin/_processed_/0/9/csm_Untitled_2_5_2a2aef7903.jpg" style={{ height: 280 }} />}

              >

                <Link to="/product-details/123">

                  <div className='product-name__ProductCard'>
                    Name
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


            </Col>

          )


        }) : ""}



      </Row>

    </>


  )
}

export default ProductCard