import { useState } from 'react';
import '../styles/login.css';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const [isRegistering, setIsRegistering] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '', fullName: '' });

    // Manejar el cambio de formulario y limpiar campos
    const toggleForm = () => {
        setIsRegistering(!isRegistering);
        setFormData({ email: '', password: '', fullName: '' });
    };

    // Manejar cambios en los inputs
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Simular inicio de sesión con Google
    const signInWithGoogle = () => {
        alert("Función de Google Sign-In en desarrollo...");
    };

    return (
        <div className='login-container'>
            <section>
                {!isRegistering ? (
                    <form>
                        <h1 className="login-title">Login</h1>
                        <div className="inputbox">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                            <label>Email</label>
                        </div>
                        <div className="inputbox">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                            <label>Password</label>
                        </div>
                        <div className="forget">
                            <label><input type="checkbox" /> Remember me</label>
                            <a href="#">Forgot Password</a>
                        </div>
                        <button type="submit" className="btn-login">Login</button>
                        <div className='btn-google-container'>
                            <FcGoogle />
                            <button type="button" className="btn-google" onClick={signInWithGoogle}>Sign in with Google</button>
                        </div>
                        <div className="register">
                            <p>Don't have an account? <a href="#" onClick={toggleForm}>Register</a></p>
                        </div>
                    </form>
                ) : (
                    <form>
                        <h1 className="login-title">Register</h1>
                        <div className="inputbox">
                            <ion-icon name="person-outline"></ion-icon>
                            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
                            <label>Full Name</label>
                        </div>
                        <div className="inputbox">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                            <label>Email</label>
                        </div>
                        <div className="inputbox">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                            <label>Password</label>
                        </div>
                        <button type="submit" className="btn-login">Register</button>
                        <div className='btn-google-container'>
                            <FcGoogle />
                            <button type="button" className="btn-google" onClick={signInWithGoogle}>Register with Google</button>
                        </div>
                        <div className="register">
                            <p>Already have an account? <a href="#" onClick={toggleForm}>Login</a></p>
                        </div>
                    </form>
                )}
            </section>
        </div>
    );
};

export default Login;
