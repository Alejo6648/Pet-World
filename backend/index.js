import express from 'express'
import body_parser from 'body-parser'
import cors from 'cors'

const server = express()
const PORT = 2800

// Configuración
server.use(body_parser.json())
server.use(body_parser.urlencoded({ extended: false }))
server.use(cors())

server.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en el puerto http://localhost:${PORT}`);
})