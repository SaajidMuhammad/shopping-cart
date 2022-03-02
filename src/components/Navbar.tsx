import React, { FC } from 'react';

const Navbar: FC = () => {
  return (
    <div>

      <input type="text" placeholder='search' />

      <div>
        <button>Login</button>

        <div>
          Cart
        </div>
      </div>

    </div>
  )
}

export default Navbar