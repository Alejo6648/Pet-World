import { useEffect, useState } from 'react';
import DefaultLayout from '../layout/LayoutDefault';
import MascotaCard from '../components/organismos/mascotas/MascotasCard';
import { useTranslation } from 'react-i18next';

function Mascotas() {
    const [mascotas, setMascotas] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        fetch('http://localhost:2500/mascotas')
            .then(response => {
                console.log(response);
                return response.json();
            })
            .then(data => {
                if (Array.isArray(data.data)) {
                    setMascotas(data.data);
                } else {
                    console.error('La respuesta de la API no es un array:', data);
                    setMascotas([]);
                }
            })
            .catch(error => console.error('Error al cargar las mascotas:', error));
    }, []);

    return (
        <DefaultLayout title={t('Pet World | Pets')}>
            <div className='w-full h-[91%] flex flex-col p-20 gap-10 bg-white rounded-2xl mt-15'>
                <div className='w-full flex flex-row flex-wrap gap-5 justify-center'>
                    {mascotas.map(mascota => (
                        <MascotaCard key={mascota.id} {...mascota} />
                    ))}
                </div>
            </div>
        </DefaultLayout>
    );
}

export default Mascotas;
