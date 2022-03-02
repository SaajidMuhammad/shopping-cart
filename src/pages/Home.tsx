import React, { FC, useEffect } from 'react'
import { Button } from 'antd';

import Navbar from '../components/Navbar/Navbar'
import ProductWrapper from '../components/ProductWrapper/ProductWrapper';


const Home: FC = () => {

  useEffect(() => {

  }, [])

  return (

    <>

      <Navbar />
      <ProductWrapper />

    </>
  )
}

export default Home