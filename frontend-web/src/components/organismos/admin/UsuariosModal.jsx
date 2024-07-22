import { useRef } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { Modal } from '@mui/material'
import axiosClient from '../../../utils/axiosClient'
import Label from '../../moleculas/Label';
import Select from '../../moleculas/Select';
import Button from '../../moleculas/Button';
import Input from '../../moleculas/Input';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';


export default function EditUsuariosModal({ open, onClose, row }) {

    const nombre = useRef(null)
    const Correo = useRef(null)
    const tipo = useRef(null)
    const { t } = useTranslation();

    const tipos = [
        {
            id: 1,
            nombre: 'Usuario'
        },
        {
            id: 2,
            nombre: 'Admin'
        }
    ]

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (confirm('¿Are you sure to edit this user?')) {
                const data = {
                    nombre: nombre.current.value,
                    correo: Correo.current.value,
                    tipo: tipo.current.value
                }
                const response = await axiosClient.put(`/usuarios/${row.id}`, data)
                if (response.status === 200) {
                    toast.success('Usuario Editado Correctamente')
                    onClose()
                }
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Modal open={open} onClose={onClose} className='flex justify-center items-center' >
            <div className='lg:w-1/2 w-[90%] bg-white p-5 rounded-lg flex-col'>
                <div className='flex justify-end'>
                    <CloseIcon className='hover:text-gray-200 transition-all' onClick={() => onClose()} />
                </div>

                <div className='w-full flex flex-col gap-5'>
                    <h1 className='text-2xl'>{t('Edit user')}</h1>
                    <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                        <div className='flex flex-col gap-2'>
                            <Label>Name</Label>
                            <Input type="text" placeholder='Name User' required ref={nombre} defaultValue={row.nombre} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label>Email</Label>
                            <Input type="text" placeholder='Email' required ref={Correo} defaultValue={row.correo} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <Label>Type</Label>
                            <Select required ref={tipo}>
                                <option value="">Select...</option>
                                {tipos.map(tipo => (
                                    <option key={tipo.id} value={tipo.id} selected={row.tipo === tipo.nombre.toLocaleLowerCase() ? true : false}>{tipo.nombre}</option>
                                ))}
                            </Select>
                        </div>
                        <Button type="submit" variant="custom1">Edit</Button>
                    </form>
                </div>
            </div>
        </Modal>
    )
}
