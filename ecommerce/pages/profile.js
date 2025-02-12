import React from 'react'
import '../styles/profile.css'

const Profile = () => {
    return (
        <div className='container-profile'>
            <div className='heading'>
                <h2 clas>MI PERFIL</h2>
            </div>
            <div class="profile-section">
                <div class="info-section">
                    <h2>Personal Information</h2>
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
                        <button type="submit" class="save-button">Guardar cambios</button>
                    </form>
                </div>
                <div class="avatar-section">
                    <h2>Avatar</h2>
                    <div class="current-avatar">
                        <img src="/1.jpg" alt="Current Avatar" />
                    </div>
                    <div class="avatar-selection">
                        <h2>Selecciona un Avatar</h2>
                        <div class="avatar-grid">
                            <div class="avatar-option selected-avatar">
                                <img src="/1.jpg" alt="Avatar 1" />
                            </div>
                            <div class="avatar-option">
                                <img src="/2.jpg" alt="Avatar 2" />
                            </div>
                            <div class="avatar-option">
                                <img src="/3.jpg" alt="Avatar 3" />
                            </div>
                            <div class="avatar-option">
                                <img src="/4.jpg" alt="Avatar 4" />
                            </div>
                            <div class="avatar-option">
                                <img src="/5.jpg" alt="Avatar 5" />
                            </div>
                            <div class="avatar-option">
                                <img src="/6.jpg" alt="Avatar 6" />
                            </div>
                            <div class="avatar-option">
                                <img src="/7.jpg" alt="Avatar 7" />
                            </div>
                            <div class="avatar-option">
                                <img src="/8.jpg" alt="Avatar 8" />
                            </div>
                            <div class="avatar-option">
                                <img src="/9.jpg" alt="Avatar 9" />
                            </div>
                            <div class="avatar-option">
                                <img src="/10.jpg" alt="Avatar 10" />
                            </div>
                            <div class="avatar-option">
                                <img src="/11.jpg" alt="Avatar 11" />
                            </div>
                            <div class="avatar-option">
                                <img src="/12.jpg" alt="Avatar 12" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>




        </div>
    )
}

export default Profile
