import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'

import Home from './pages/Home'
import Cart from './pages/Cart'
import Details from './pages/ProductDetails'



import './App.css';
import 'antd/dist/antd.css'



const App: FC = () => {

  let { prodId } = useParams();


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />


          <Route path='/product-details'>
            <Route path=":prodId" element={<Details />} />
          </Route>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
