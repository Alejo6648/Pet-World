import { useEffect, useState } from 'react';
import axiosClient from '../utils/axiosClient';
import DefaultLayout from '../layout/LayoutDefault';
import Counts from '../components/organismos/admin/counts';
import { faUser, faDog } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';


function Inicio() {
    const [totalUsuarios, setTotalUsuarios] = useState(0);
    const [totalMascotas, setTotalMascotas] = useState(0);
    const { t } = useTranslation();

    const getData = async () => {
        try {
            await axiosClient.get('/usuarios/contar').then((response) => {
                if (response.status == 200) {
                    setTotalUsuarios(response.data.total);
                }
            });
            {
                await axiosClient.get('/mascotas/contar').then((response) => {
                    if (response.status == 200) {
                        setTotalMascotas(response.data.total);
                    }
                });
            }
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        getData();
    }, []);

    return (
        <DefaultLayout title={t("Pet World | Start")}>
            <div className='w-full h-[91%] flex flex-col p-20 gap-10 bg-white rounded-2xl mt-15'>
                <div className='w-full flex flex-row flex-wrap gap-5 justify-center'>
                    <Counts icon={faUser} nombre={t('users')} cantidad={totalUsuarios} />
                    <Counts icon={faDog} nombre={t('pets')} cantidad={totalMascotas} />
                </div>
            </div>
        </DefaultLayout>
    );
}

export default Inicio;
