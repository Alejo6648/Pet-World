import { createPool } from "mysql2/promise";
import dontenv from 'dotenv'

dontenv.config({ path: '.env'})

export const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE
})

pool.on('error', (err) => {
    console.error('Error en el pool de conexiones:', err);
});