import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import '../styles/reviews.css'

const Reviews = () => {
  return (
    <div className='reviwes-container'>
      <div className='reviews-coment'>
        <div className='heading'>
          <h2>Califica este producto</h2>
        </div>
        <div className='reviews-stars'>
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>

        <textarea name="" id="" placeholder='Escribe un comentario'></textarea>
        <div className='reviews-btn'>

          <button>Agregar</button>
        </div>
        <span>Por favor se honesto y constructivo.</span>
      </div>

      <div className='reviews2'>
        <div className='heading'>

          <h2>Reseñas del Producto</h2>
        </div>
        <div className='reviews-users'>
          <div className='review-user'>
            <div className='review-user-info'>
              <img src="/1.jpg" alt="avatar" />
              <div className='review-user-info-top'>
                <div className='review-user-name'>
                  <span>Nombre</span>
                  <div className='review-user-stars'>

                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                </div>
                <span className='review-user-fecha'>22/11/2022</span>
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ex fuga tempora eius laudantium explicabo amet alias voluptas doloremque? Incidunt dicta ipsam vero expedita excepturi eveniet sed corporis est nam.
            </p>
          </div>

          {/* 2 */}
          <div className='review-user'>
            <div className='review-user-info'>
              <img src="/2.jpg" alt="avatar" />
              <div className='review-user-info-top'>
                <div className='review-user-name'>
                  <span>Nombre</span>
                  <div className='review-user-stars'>

                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                </div>
                <span className='review-user-fecha'>22/11/2022</span>
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ex fuga tempora eius laudantium explicabo amet alias voluptas doloremque? Incidunt dicta ipsam vero expedita excepturi eveniet sed corporis est nam.
            </p>
          </div>

          {/* 3 */}

          <div className='review-user'>
            <div className='review-user-info'>
              <img src="/5.jpg" alt="avatar" />
              <div className='review-user-info-top'>
                <div className='review-user-name'>
                  <span>Nombre</span>
                  <div className='review-user-stars'>

                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                </div>
                <span className='review-user-fecha'>22/11/2022</span>
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ex fuga tempora eius laudantium explicabo amet alias voluptas doloremque? Incidunt dicta ipsam vero expedita excepturi eveniet sed corporis est nam.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Reviews
