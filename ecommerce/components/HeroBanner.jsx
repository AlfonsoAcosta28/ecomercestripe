import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

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
                <Link href="/" className="btn-banner" >Comprar ahora</Link>
            </div>
            <img src="candy.png" alt="Dulces deliciosos" className="banner-image" />
        </div>
    )
}

export default HeroBanner