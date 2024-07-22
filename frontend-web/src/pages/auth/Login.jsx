import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../../utils/axiosClient.js';
import { toast } from 'react-hot-toast';
import logo from '../../../public/logo.png';
import video from '../../../public/login.mp4';

function Login() {
    const [correo, setCorreo] = useState('');
    const [clave, setClave] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Login | Pet World";
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = {
                correo,
                clave,
            };

            const response = await axiosClient.post("/login", data);

            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                const userType = response.data.user.tipo;

                if (userType === 'admin') {
                    toast.success("Welcome Administrator");
                    navigate('/Inicio');
                } else {
                    toast.error('Only administrators can access this system.');
                    navigate('/AccessDenied');
                }
            } else {
                if (response.status === 404) {
                    toast.error('User not found');
                } else if (response.status === 500) {
                    toast.error('Error interno del servidor');
                } else {
                    toast.error('Credenciales incorrectas');
                }
            }
        } catch (error) {
            console.error(error);
            toast.error('Ocurrió un error al procesar tu solicitud');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
            <video className="fixed inset-0 z-0 w-full h-full object-cover" loop muted playsInline autoPlay>
                <source src={video} type="video/mp4" />
            </video>
            <div className="relative">
                <div className="flex flex-wrap items-center justify-center my-8 relative">
                    <img src={logo} alt="Logo" className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 max-w-[120px] rounded-full z-10" />
                </div>
                <div className="bg-white p-10 rounded-lg shadow-xl w-96 backdrop-filter backdrop-blur-sm bg-opacity-40 z-20">
                    <div className="flex flex-col items-start">
                        <h2 className="text-3xl font-bold text-left text-gray-800 mb-6">Log In</h2>
                    </div>
                    <div className="flex flex-col items-center">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="correo" className="block text-sm font-medium text-gray-900">Email:</label>
                                <input id="correo" type="email" placeholder='Email @gmail.com' value={correo} onChange={(e) => setCorreo(e.target.value)} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500 placeholder:text-xs" />
                            </div>
                            <div>
                                <label htmlFor="clave" className="block text-sm font-medium text-gray-900">Password:</label>
                                <input id="clave" type="password" value={clave} placeholder='Your password' onChange={(e) => setClave(e.target.value)} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500 placeholder:text-xs" />
                            </div>
                            <button type="submit" className="w-full py-2 px-4 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition duration-150 ease-in-out">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
