import { createPool } from "mysql2/promise";
import dontenv from 'dontenv'

dontenv.config({ path: '.env'})

export const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    database: process.env.DATABASE
})