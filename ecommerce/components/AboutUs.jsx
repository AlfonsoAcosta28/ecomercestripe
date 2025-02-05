import React from 'react'

const AboutUs = () => {
    return (
        <div class="aboutus-container">
            <div className='heading'>
                <h2>Sobre Nosotros</h2>
            </div>
            <div class="aboutus-section">
                <h3>Descripción</h3>
                <p>En Oops Dulcería, ofrecemos una amplia variedad de dulces nacionales e importados para satisfacer todos los gustos. Nuestra misión es llevar alegría y sonrisas a través de nuestros productos de alta calidad.</p>

                <h3>Contacto</h3>
                <div class="contact-info">
                    <table className='about-us-table'>
                        <thead>
                            <tr>

                                <th width="30%"></th>
                                <th width="70%"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <p>📍<strong>Teléfono:</strong></p>
                                </td>
                                <td>
                                    <p>  +52 123 456 7890</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>📞<strong>Ubicación:</strong></p>
                                </td>
                                <td><p> Calle Falsa 123, Ciudad, País</p></td>
                            </tr>
                            <tr>
                                <td>
                                    <p>📧<strong>Correo:</strong> </p>
                                </td>
                                <td>
                                    <p> contacto@empresa.com</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="aboutus-section">
                <h3>Ubicación</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95592631531596!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df4fdfd3b%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1ses-419!2ses!4v1633533342007!5m2!1ses-419!2ses"
                    allowfullscreen=""
                    loading="lazy">
                </iframe>
            </div>
        </div>
    )
}

export default AboutUs
