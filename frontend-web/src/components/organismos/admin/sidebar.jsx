import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faHouse, faDog, faCat } from '@fortawesome/free-solid-svg-icons';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { Zoom, styled } from '@mui/material';
import { useEffect, useState } from 'react';

// Estilo personalizado del Tooltip con la fuente Poppins y color de fondo gris claro
const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#ffffff',
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 15,
        fontFamily: 'Poppins',
    },
}));

// Estilo CSS para la animación de crecimiento
const iconStyle = {
    transition: 'transform 0.3s ease',
    transform: 'scale(1) translate'
};

function Sidebar() {
    const { pathname } = useLocation();
    const [user, setUser] = useState({});

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')));
    }, []);

    return (
        <div className="bg-[#383C44] flex justify-center space-y-100 mt-16">
            <div className="flex w-17 flex-col items-center space-y-3 py-2">
                <div className="space-y-35 rounded-md bg-transparent text-base h-full">
                    <ul>
                        <li className="p-5">
                            <LightTooltip title="Start" placement="right" TransitionComponent={Zoom}>
                                <Link to="/inicio" className={`h-6 w-6 cursor-pointer text-white transition-all hover:text-gray-400 ${pathname.includes('inicio') ? " text-gray-400" : ""}`} style={iconStyle}>
                                    <FontAwesomeIcon icon={faHouse} className="transition-transform hover:scale-150" />
                                </Link>
                            </LightTooltip>
                        </li>
                        {
                            user.tipo == 'admin' && (
                                <>
                                    <li className="p-5">
                                        <LightTooltip title="Users" placement="right" TransitionComponent={Zoom}>
                                            <Link to="/usuarios" className={`h-6 w-6 cursor-pointer text-white transition-all hover:text-gray-400 ${pathname.includes('usuarios') ? " text-gray-400" : ""}`} style={iconStyle}>
                                                <FontAwesomeIcon icon={faUsers} className="transition-transform hover:scale-150" />
                                            </Link>
                                        </LightTooltip>
                                    </li>
                                    <li className="p-5">
                                        <LightTooltip title="Pets" placement="right" TransitionComponent={Zoom}>
                                            <Link to="/mascotas" className={`h-6 w-6 cursor-pointer text-white transition-all hover:text-gray-400 ${pathname.includes('mascotas') ? " text-gray-400" : ""}`} style={iconStyle}>
                                                <FontAwesomeIcon icon={faDog} className="transition-transform hover:scale-150" />
                                            </Link>
                                        </LightTooltip>
                                    </li>
                                    <li className="p-5">
                                        <LightTooltip title="Pet Status" placement="right" TransitionComponent={Zoom}>
                                            <Link to="/estado-de-la-mascota/:id" className={`h-6 w-6 cursor-pointer text-white transition-all hover:text-gray-400 ${pathname.includes('estado-de-la-mascota') ? " text-gray-400" : ""}`} style={iconStyle}>
                                                <FontAwesomeIcon icon={faCat} className="transition-transform hover:scale-150" />
                                            </Link>
                                        </LightTooltip>
                                    </li>
                                </>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
