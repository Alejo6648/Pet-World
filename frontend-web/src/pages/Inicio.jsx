import React from 'react';

const Inicio = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto px-6 py-4">
                <header className="text-center my-5">
                    <h1 className="text-4xl font-bold text-gray-800">PET WORLD</h1>
                    <p className="text-xl text-gray-600">info@sitio.com</p>
                    <p className="text-lg text-gray-500">Sena Yamboro, Pitalito Huila Colombia</p>
                    <p className="text-lg text-gray-500">Teléfono: 52-1-33-12345678</p>
                </header>

                <section className="my-5">
                    <h2 className="text-2xl font-semibold text-gray-700">Inicio</h2>
                    <p className="mt-2 text-gray-600">File Share<br />Members<br />Grupos<br />Reserva online<br />0<br />Licking Cat<br />MUNDO ANIMAL<br />Cuidado Completo</p>
                </section>

                <section className="my-5">
                    <h2 className="text-2xl font-semibold text-gray-700">Ofertas Especiales</h2>
                    <p className="mt-2 text-gray-600">Adopta dos mascotas y llevarás un paquete de comida para ellos.<br /><br />Descubre nuestras promociones especiales para consentir a tu mascota. Aprovecha esta oportunidad única para adquirir productos de alta calidad. ¡No te lo pierdas!</p>
                </section>

                <section className="my-5">
                    <h2 className="text-2xl font-semibold text-gray-700">Nuestra Misión</h2>
                    <p className="mt-2 text-gray-600">En Mundo Animal, nos comprometemos a brindar a todas las mascotas una vida feliz y saludable. Somos tu tienda de mascotas de confianza en la que encontrarás todo lo necesario para el bienestar de tus fieles amigos. Únete a nuestra comunidad hoy y disfruta de descuentos exclusivos y regalos especiales.</p>
                </section>

                <footer className="text-center my-5">
                    <p className="text-lg text-gray-500">Mantente informado, únete a nuestro boletín</p>
                    <form action="#" method="post" className="mt-2">
                        <input type="email" placeholder="Ingresa tu correo electrónico aquí" className="px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 w-full max-w-xs" />
                        <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-150 ease-in-out">Enviar</button>
                    </form>
                </footer>
            </div>
        </div>
    );
};

export default Inicio;
