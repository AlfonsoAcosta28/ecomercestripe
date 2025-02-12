import React from 'react'
import '../styles/profile.css'
import '../styles/payment.css'
import { FaPaypal } from "react-icons/fa";
import Link from 'next/link';
import { SiMercadopago } from "react-icons/si";
const payment = () => {
    return (
        <div className='container-payment'>
            <div class="info-section">
                <h2>Informacion Personal</h2>
                <form className='profile-form'>
                    <div class="form-group">
                        <input type="text" placeholder="Nombre" />
                    </div>
                    <div class="form-group">
                        <input type="email" placeholder="Email" />
                    </div>
                    <div class="form-group">
                        <input type="tel" placeholder="Número de Teléfono" />
                    </div>
                    <div class="form-group">
                        <input type="text" placeholder="Código Postal" />
                    </div>
                    <div class="form-group">
                        <input type="text" placeholder="Calle" />
                    </div>
                    <div class="form-group">
                        <input type="text" placeholder="Número" />
                    </div>
                    <div class="form-group">
                        <textarea placeholder="Descripción de la casa" rows="3"></textarea>
                    </div>
                </form>
            </div>
            <div class="payment-section">
                <h2>Resumen del Pedido</h2>
                <div>
                    <span>Producto</span>
                    <span>$30</span>
                </div>
                <div>
                    <span>Envio</span>
                    <span>$30</span>
                </div>
                <div>
                    <span>Total</span>
                    <span>$60</span>
                </div>
                <span>Metodo de Pago</span>
                <Link href="/" className='paypal'>
                    <FaPaypal />
                    <button>Pagar con PayPal</button>
                </Link>
                <Link href="/" className='mercadopago'>
                    <SiMercadopago />
                    <button>Pagar con Mercado Pago</button>
                </Link>
            </div>
        </div>
    )
}

export default payment
