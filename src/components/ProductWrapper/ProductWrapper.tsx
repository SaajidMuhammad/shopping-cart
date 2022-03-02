import React, { FC, useState, useEffect } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './ProductWrapper.css'


const ProductWrapper: FC = () => {

  const [first, setfirst] = useState([])

  useEffect(() => {

  })


  return (
    <div className='wrapper__ProductWrapper'>



      <ProductCard />

    </div>
  )
}

export default ProductWrapper