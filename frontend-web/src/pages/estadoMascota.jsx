import DefaultLayout from '../layout/LayoutDefault';

function EstadoDeLaMascota({ mascota }) {
    return (
        <DefaultLayout title={`Pet World | Estado de ${mascota.nombre}`}>
            <div className='w-full h-[91%] flex flex-col p-20 gap-10 bg-white rounded-2xl mt-15'>
                <h2>Información Detallada</h2>
            </div>
        </DefaultLayout>
    );
}

export default EstadoDeLaMascota;
