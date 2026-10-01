import { useState } from 'react'
import { FormularioProducto } from '../FormularioProducto/FormularioProducto'

export function FormularioContainer() {
    const [datosForm, setDatosForm] = useState({
        nombre: '',
        precio: '',
        stock: '',
    })

    const [imagenFile, setImagenFile] = useState(null)
    const [cargando, setCargando] = useState(false)

    const manejarCambioImagen = (evento) => {
        setImagenFile(evento.target.files[0])
    }
    const manejarCambio = (evento) => {
        const { name, value } = evento.target

        setDatosForm((datosAnteriores) => ({
            ...datosAnteriores,
            [name]: value,
        }))
    }

    const manejarEnvio = async (evento) => {
        evento.preventDefault()

        if (!imagenFile) {
            alert('Por favor, seleccioná una imagen para el producto.')
            return
        }

        const apiKey = import.meta.env.VITE_IMGBB_API_KEY

        if (!apiKey) {
            alert('Falta configurar la clave de ImgBB en .env.')
            return
        }

        const formData = new FormData()
        formData.append('image', imagenFile)

        try {
            setCargando(true)
            console.log('Subiendo imagen...')

            const respuesta = await fetch(
                `https://api.imgbb.com/1/upload?key=${apiKey}`,
                {
                    method: 'POST',
                    body: formData,
                }
            )

            const resultado = await respuesta.json()

            if (!respuesta.ok || !resultado.success) {
                throw new Error('No se pudo subir la imagen.')
            }

            const productoCompleto = {
                ...datosForm,
                urlImagen: resultado.data.url,
            }

            console.log('Producto completo:', productoCompleto)
        } catch (error) {
            console.error('Error al subir la imagen:', error)
            alert('No se pudo subir la imagen. Intentá nuevamente.')
        } finally {
            setCargando(false)
        }
    }
    return (
        <FormularioProducto
            datosForm={datosForm}
            manejarCambio={manejarCambio}
            manejarEnvio={manejarEnvio}
            manejarCambioImagen={manejarCambioImagen}
            cargando={cargando}
        />
    )
    return (
    <FormularioProducto
        datosForm={datosForm}
        manejarCambio={manejarCambio}
        manejarEnvio={manejarEnvio}
        manejarCambioImagen={manejarCambioImagen}
        cargando={cargando}
    />
)


}