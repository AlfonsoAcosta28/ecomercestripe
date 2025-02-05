import React from 'react'

import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import { FaSearch } from "react-icons/fa";
import { Cart } from './'
import { useStateContext } from '../context/StateContext'

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className='navbar-container'>
      <div className='logo'>
        <Link href='/'>
          <img src="/logo.jpg" alt="" className='logo-img' />
        </Link>
      </div>

      <div className='search-container'>
        <FaSearch />
        <input type="text" placeholder='Search' className='search' />
      </div>

      <div className='menu-container'>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/products'>Productos</Link>
          </li>
          <li>
            <Link href='/category'>Categorias</Link>
          </li>
        </ul>
      </div>

      <div className='container-icons'>
        <Link href='/account'>
          <img src="/1.jpg" alt="user image" className='user-icon' />
        </Link>
        <div>
          <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
            <AiOutlineShopping />
            <span className='cart-item-qty'>{totalQuantities}</span>
          </button>
        </div>
      </div>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar
