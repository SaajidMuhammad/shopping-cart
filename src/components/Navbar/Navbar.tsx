import { FC, useContext, useEffect, useState } from 'react';
import { Input, Button, Badge, Avatar } from 'antd';
import { ShoppingCartOutlined, HomeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import CartContext from '../../context/cart/cart-context'

import './Navbar.css'

const { Search } = Input;

const Navbar: FC = () => {

  const { cart } = useContext(CartContext)
  const [cartItems, setCartItems] = useState<Number>(0)

  useEffect(() => {
    let totalItems = cart.reduce((total: number, cartItem: any) => {

      let sumItem = cartItem.items + total
      return sumItem
    }, 0)
    setCartItems(totalItems)
  }, [cart])


  const onSearch = (() => { })

  return (
    <div className='wrapper__Navbar'>
      <div className='left-wrapper__Navbar' >
        <Link to="/"> <HomeOutlined style={{ fontSize: "24px", margin: "3px 10px 2px 0px", color: "black" }} /></Link>
        <Search placeholder="input search text" onSearch={onSearch} enterButton className='search__Navbar' />
      </div>

      <div className='right-wrapper__Navbar'>
        <Button className='login-button__Navbar'>Login</Button>
        <Link to="/cart">
          <Badge count={cartItems}>
            <Avatar icon={<ShoppingCartOutlined />} />
          </Badge >
        </Link>
      </div>
    </div>
  )
}

export default Navbar 