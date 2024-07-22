import { useEffect, useState } from 'react'
import DefaultLayout from '../layout/LayoutDefault'
import axiosClient from '../utils/axiosClient'
import { DataGrid, GridActionsCellItem, GridToolbar } from '@mui/x-data-grid'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import EditUsuariosModal from '../components/organismos/admin/UsuariosModal'
import toast from 'react-hot-toast'
import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'

function Usuarios() {
    const [usuarios, setUsuarios] = useState([])
    const [openEditUsuariosModal, setOpenEditUsuariosModal] = useState(false)
    const [row, setRow] = useState({})
    const { t } = useTranslation();


    const getUsuarios = async () => {
        try {
            const response = await axiosClient.get('/usuarios')
            if (response.status === 200) {
                console.log(response.data)
                setUsuarios(response.data)
            } else {
                alert('No Se Encontraron Usuarios')
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getUsuarios()
    }, [openEditUsuariosModal])

    // función para eliminar un usuario
    const handleDelete = async (id) => {
        try {
            if (confirm('Are You Sure To Delete This User?')) {
                const response = await axiosClient.delete(`/usuarios/${id}`)
                if (response.status === 200) {
                    toast.success('User Deleted')
                    getUsuarios()
                }
            } else {
                toast.error('User Not Deleted')
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <DefaultLayout title={t("Pet World | Users")}>
                <div className='w-full h-screen flex flex-col p-10 gap-5 bg-white rounded-2xl mt-15'>
    
                    <div className='flex flex-row justify-between items-center' style={{ marginTop: '20px' }}>
                        <h1 className='text-2xl'>{t('Users')}</h1>
                        <EditUsuariosModal open={openEditUsuariosModal} onClose={() => setOpenEditUsuariosModal(false)} row={row} />
                    </div>
    
                    <Box className="w-full h-[80%]">
                        <DataGrid
                            disableColumnFilter
                            disableColumnSelector
                            disableDensitySelector
                            slots={{ toolbar: GridToolbar }}
                            columns={[
                                { field: 'id', headerName: 'ID', width: 90, flex: 1 },
                                { field: 'nombre', headerName: 'Name', width: 150, flex: 1 },
                                { field: 'correo', headerName: 'Email', width: 150, flex: 1 },
                                { field: 'tipo', headerName: 'Type', width: 150, flex: 1 },
                                {
                                    field: 'actions',
                                    type: 'actions',
                                    getActions: ({ row }) => [
                                        <GridActionsCellItem key={row.id} label="Edit" title="Edit" icon={<EditIcon />} onClick={() => {
                                            setRow(row)
                                            setOpenEditUsuariosModal(true)
                                        }} />,
                                        <GridActionsCellItem key={row.id} label="Delete" title="Delete" icon={<DeleteIcon />} onClick={() => handleDelete(row.id)} />
                                    ],
                                    flex: 1
                                }
                            ]}
                            rows={usuarios}
                            slotProps={{
                                toolbar: {
                                    showQuickFilter: true,
                                    printOptions: {
                                        disableToolbarButton: true,
                                    },
                                }
                            }}
                        />
                    </Box>
                </div>
            </DefaultLayout>
        </>
    )    
}

export default Usuarios
