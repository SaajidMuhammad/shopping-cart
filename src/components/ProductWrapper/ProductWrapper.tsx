import React, { FC } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './ProductWrapper.css'



const ProductWrapper: FC = () => {
  return (
    <div className='wrapper__ProductWrapper'>
      <ProductCard />
    </div>
  )
}

export default ProductWrapper