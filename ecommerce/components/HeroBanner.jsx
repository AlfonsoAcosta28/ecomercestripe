import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';
import '../styles/HeroBanner.css';

const HeroBanner = ({ heroBanner }) => {
    return (
        // <div className="hero-banner-container">
        //     <div>
        //         <p className="beats-solo">{heroBanner.smallText}</p>
        //         <h3>{heroBanner.midText}</h3>
        //         <h1>{heroBanner.largeText1}</h1>
        //         <img 
        //         src={urlFor(heroBanner.image)} alt="headphones" 
        //         className="hero-banner-image" 

        //         />
        //         <div>
        //             <Link href={`/product/${heroBanner.product}`}>
        //                 <button type="button">{heroBanner.buttonText}</button>
        //             </Link>
        //             <div className="desc">
        //                 <h5>Description</h5>
        //                 <p>{heroBanner.desc}</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="banner">
            <div className="banner-content">
                <h1>¡Oferta del Día! 💥</h1>
                <p>
                    Disfruta un <strong>20% de descuento</strong> en tus dulces favoritos,
                    solo por hoy.
                </p>
                {/* <Link href="/" className="btn-banner" >Comprar ahora</Link> */}
                <Link href="/">
                    <button class="button2">
                        Comprar
                        <svg class="icon2" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                fill-rule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </Link>
            </div>
            <img src="candy.png" alt="Dulces deliciosos" className="banner-image" />
        </div>
    )
}

export default HeroBanner