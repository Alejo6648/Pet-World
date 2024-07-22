import { useState } from 'react';
import Language from '../../../pages/idioma/SelectLenguage';


function Header() {
    const user = JSON.parse(localStorage.getItem('user'));

    const nombre = user ? user.nombre : '';

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.href = '/logout';
    };

    return (
        <header>
            <nav className="bg-[#383C44] border-primary lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center w-full">
                    <img
                        src="/logo_completo.png"
                        alt=""
                        className='h-13 w-28 ml-1'
                    />
                    <div className="flex items-center lg:order-2 relative">
                        <span
                            className='text-white dark:text-white hover:bg-[#666A73] focus:ring-gray-300 rounded-lg text-lg px-5 py-2.5 cursor-pointer'
                            onClick={toggleDropdown}
                        >
                            {nombre}
                        </span>
                        {dropdownOpen && (
                            <div className="absolute right-0 w-28 mt-48 bg-[#383C44] dark:bg-gray-700 rounded-md shadow-lg">
                                <Language />
                                
                                <button
                                    className="px-5 text-center w-46 py-2.5 rounded-md text-white dark:text-white hover:bg-[#666A73] dark:hover:bg-gray-600"
                                    onClick={handleLogout}
                                >
                                    Log out
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
