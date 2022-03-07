import { FC } from 'react'

import Navbar from '../components/Navbar/Navbar'
import ProductWrapper from '../components/ProductWrapper/ProductWrapper';


const Home: FC = () => {
  return (
    <>
      <Navbar />
      <ProductWrapper />
    </>
  )
}

export default Home