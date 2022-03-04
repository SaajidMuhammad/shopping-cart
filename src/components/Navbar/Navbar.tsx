import React, { FC } from 'react';
import { Input, Button } from 'antd';
import { ShoppingCartOutlined, HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


import './Navbar.css'

const { Search } = Input;



const Navbar: FC = () => {

  const onSearch = (() => { })

  return (
    <div className='wrapper__Navbar'>

      <div className='left-wrapper__Navbar' >
        <Link to="/"> <HomeOutlined style={{ fontSize: "24px", margin: "3px 10px 2px 0px", color: "black" }} /></Link>

        <Search placeholder="input search text" onSearch={onSearch} enterButton className='search__Navbar' />
      </div>



      <div className='right-wrapper__Navbar'>
        <Button>Login</Button>

        <Link to="/cart">
          <Button type="text">
            <ShoppingCartOutlined style={{ fontSize: "24px" }} />
          </Button>
        </Link>

      </div>

    </div>
  )
}

export default Navbar 