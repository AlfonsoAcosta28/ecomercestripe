import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import { FaSearch } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { Cart } from './'
import { useStateContext } from '../context/StateContext'
import { CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities, showMenu, setShowMenu } = useStateContext();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <div className='navbar-container'>
      <div className='logo'>
        <Link href='/'>
          <img src="/logo.jpg" alt="" className='logo-img' />
        </Link>
      </div>
      <h2 className='mobile-text'>OOPS Dulceria</h2>

      <div className={`mobile-menu ${showMenu ? 'show' : 'hide'}`}>
        <div className='search-container'>
          <FaSearch />
          <input type="text" placeholder='Search' className='search' />
        </div>

        <div className='menu-container'>
          <ul>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/products'>Productos</Link></li>
            <li><Link href='/category'>Categorías</Link></li>
          </ul>
        </div>

        <div className='container-icons'>
          {/* Contenedor del usuario con menú desplegable */}
          <div className='profile-container'>
            <div 
              className='profile-icon' 
              onClick={() => setShowProfileMenu((prev) => !prev)}
            >
              <img src="/1.jpg" alt="user image" className='user-icon' />
              <span className='mobile-text'>Perfil</span>
            </div>

            {/* Menú desplegable */}
            {showProfileMenu && (
              <div className='dropdown-menu'>
                <ul>
                  <li><CgProfile className='dropdown-icon' /><Link href='/profile'>Perfil</Link></li>
                  <li><IoIosLogOut className='dropdown-icon'/><button onClick={() => alert('Cerrar sesión')}>Cerrar Sesión</button></li>
                </ul>
              </div>
            )}
          </div>

          <div>
            <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
              <AiOutlineShopping />
              <span className='cart-item-qty'>{totalQuantities}</span>
            </button>
            <span className='mobile-text'>Carrito</span>
          </div>
        </div>
      </div>

      <div className='hamburger-menu'>
        <button onClick={() => setShowMenu((prev) => !prev)}>
          <GiHamburgerMenu />
        </button>
      </div>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar
