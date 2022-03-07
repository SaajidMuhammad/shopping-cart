import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'

import Home from './pages/Home'
import Cart from './pages/Cart'
import Details from './pages/ProductDetails'

import ProductsState from './context/products/ProductsState';
import CartState from './context/cart/CartState';

import productData from './mockData/productData'

import './App.css';
import 'antd/dist/antd.css'

import { createServer } from "miragejs"

// Mock Server
createServer({
  routes() {
    this.namespace = "/api"

    this.get("/all-products", () => {
      return {
        products: productData
      }
    })


    // this.get("/all-products/:id", (schema, request) => {
    //   let id = request.params.id

    //   // return schema.productData.find(id)
    // })


  }
})

const App: FC = () => {
  return (
    <div className="App">
      <Router>
        <ProductsState>
          <CartState>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />

              <Route path='/product-details'>
                <Route path=":prodId" element={<Details />} />
              </Route>

            </Routes>
          </CartState>
        </ProductsState>
      </Router>
    </div>
  );
}

export default App;
