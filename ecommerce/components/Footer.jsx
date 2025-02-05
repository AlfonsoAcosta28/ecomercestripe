import React from 'react'

import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook } from 'react-icons/ai'
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    // <div className='footer-container'>
    //   <p>2022 JSM Headphones All rights reserver</p>
    //   <p className='icons'>
    //     <AiFillInstagram />
    //     <AiOutlineTwitter />  
    //   </p>
    // </div>

    <footer class="footer">
      <img src="/logo.jpg" alt="Oops! Dulcería" class="footer-logo" />
      <div class="footer-content">
        <p>© 2024 Oops Dulcería. Todos los derechos reservados</p>
        <div class="social-icons">
          <a href="#" class="icon">
            <RiInstagramFill />
          </a>
          <a href="#" class="icon">
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>

  )
}

export default Footer
