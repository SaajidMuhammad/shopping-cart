import React, { FC } from 'react';
import { Input, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';


import './Navbar.css'

const { Search } = Input;



const Navbar: FC = () => {

  const onSearch = (() => { })

  return (
    <div className='wrapper__Navbar'>


      <div className='left-wrapper__Navbar'>
        <Search placeholder="input search text" onSearch={onSearch} enterButton className='search__Navbar' />
      </div>



      <div className='right-wrapper__Navbar'>
        <Button>Login</Button>
        <Button type="text">
          <ShoppingCartOutlined style={{ fontSize: "24px" }} />

        </Button>
      </div>

    </div>
  )
}

export default Navbar