import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Cart from './pages/Cart'
import Details from './pages/Details'



import './App.css';
import 'antd/dist/antd.css'



const App: FC = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/details' element={<Details />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
