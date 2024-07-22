import express from 'express'
import body_parser from 'body-parser'
import cors from 'cors'
import { validarToken } from './src/controller/auth.controller.js'
import rutaUsuarios from './src/routes/usuarios.route.js'
import rutasAuth from './src/routes/auth.routes.js'
import rutaMascotas from './src/routes/mascotas.routes.js'
import traducciones from './src/routes/traducciones.routes.js'

const server = express()
const PORT = 2500

// Configuración
server.use(body_parser.json())
server.use(body_parser.urlencoded({ extended: false }))
server.use(cors())

// Rutas
server.use(rutasAuth)
server.use(validarToken, rutaUsuarios)
server.use(validarToken, rutaMascotas)
server.use("/traducciones", traducciones)

server.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en el puerto http://localhost:${PORT}`);
})