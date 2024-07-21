import { pool } from "../database/conexion.js";
import { validationResult } from "express-validator";

//Listar Usuarios
export const listartodo = async (req, res) => {
    try {
        const [resultado] = await pool.query("SELECT * FROM usuarios");

        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(404).json({
                "mensaje": "no hay usuarios registrados"
            });
        }
    } catch (error) {
        res.status(500).json({
            "mensaje": error
        });
    }
};

//Crear Usuarios
export const crearUnUsuario = async (req, res) => {
    try {
        const error = validationResult(req);

        if (!error.isEmpty()) {
            return res.status(404).json({ error });
        }
        const { nombre, correo, clave } = req.body;
        const [resultado] = await pool.query("INSERT INTO usuarios(nombre, correo, clave) VALUES (?, ?, ?)", [nombre, correo, clave]);

        if (resultado.affectedRows > 0) {
            res.status(200).json({
                "mensaje": "El usuario ha sido creado con exito!!!!!"
            });
        } else {
            res.status(404).json({
                "mensaje": "No se pudo crear el usuario"
            });
        }
    } catch (error) {
        res.status(500).json({
            "mensaje": error
        });
    }
};

//Acualizar Usuarios
export const actualizarUnUsuario = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id } = req.params;
        const { nombre, correo, clave } = req.body;

        // Verificar si el usuario existe
        const [oldUser] = await pool.query("SELECT * FROM usuarios WHERE id = ?", [id]);

        if (oldUser.length === 0) {
            return res.status(404).json({
                "mensaje": "No se encontró un usuario con ese ID"
            });
        }

        // Actualizar el usuario
        const [resultado] = await pool.query(`
            UPDATE usuarios SET 
            nombre = ?, 
            correo = ?, 
            clave = ? 
            WHERE id = ?`, [
            nombre || oldUser[0].nombre,
            correo || oldUser[0].correo,
            clave || oldUser[0].clave,
            id
        ]);

        if (resultado.affectedRows > 0) {
            res.status(200).json({
                "mensaje": "El usuario ha sido actualizado con éxito"
            });
        } else {
            res.status(404).json({
                "mensaje": "No se pudo actualizar el usuario"
            });
        }
    } catch (error) {
        res.status(500).json({
            "mensaje": error.message
        });
    }
};


//Mostrar Usuarios por ID
export const mostrarunusuario = async (req, res) => {
    try {
        const { id } = req.params;
        const [resultado] = await pool.query("SELECT * FROM usuarios WHERE id = ?", [id]);
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(404).json({
                "mensaje": "no se encontro este usuario"
            });
        }
    } catch (error) {
        res.status(500).json({
            "mensaje": error
        });
    }
};

//Eliminar Usuarios
export const eliminarUnUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const [resultado] = await pool.query("DELETE FROM usuarios WHERE id = ?", [id]);

        if (resultado.affectedRows > 0) {
            res.status(200).json({
                "mensaje": "Se eliminó exitosamente el usuario y los registros relacionados"
            });
        } else {
            res.status(404).json({
                "mensaje": "No se encontró ningún usuario con ese ID y no se pudo eliminar"
            });
        }
    } catch (error) {
        res.status(500).json({
            "mensaje": error
        });
    }
};

// Contar todos los usuarios
export const contarUsuarios = async (req, res) => {
    try {
        const [resultado] = await pool.query("SELECT COUNT(*) as total FROM usuarios");
        if (resultado[0].total === 0) {
            res.status(404).json({ mensaje: "No se encontraron usuarios" });
        } else {
            res.status(200).json({ total: resultado[0].total });
        }
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

