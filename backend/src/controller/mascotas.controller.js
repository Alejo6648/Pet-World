import { pool } from "../database/conexion.js";
import { validationResult } from "express-validator";

// Listar todas las mascotas
export const listarTodasLasMascotas = async (req, res) => {
    try {
        const [resultado] = await pool.query("SELECT * FROM mascotas");
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(404).json({
                "mensaje": "No hay mascotas registradas"
            });
        }
    } catch (error) {
        res.status(500).json({
            "mensaje": error
        });
    }
};


// Crear una nueva mascota
export const crearUnaMascota = async (req, res) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(404).json({ error });
        }
        const { nombre_mascota, fk_raza, image, fk_genero, fk_user } = req.body;
        const [resultado] = await pool.query("INSERT INTO mascotas(nombre_mascota, fk_raza, image, fk_genero, fk_user) VALUES (?, ?, ?, ?, ?)", [nombre_mascota, fk_raza, image, fk_genero, fk_user]);
        if (resultado.affectedRows > 0) {
            res.status(200).json({
                "mensaje": "La mascota ha sido creada con éxito"
            });
        } else {
            res.status(404).json({
                "mensaje": "No se pudo crear la mascota"
            });
        }
    } catch (error) {
        res.status(500).json({
            "mensaje": error
        });
    }
};


// Actualizar una mascota existente
export const actualizarUnaMascota = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { id } = req.params;
        const { nombre_mascota, fk_raza, image, fk_genero, fk_user } = req.body;
        const [oldMascota] = await pool.query("SELECT * FROM mascotas WHERE id = ?", [id]);
        if (oldMascota.length === 0) {
            return res.status(404).json({
                "mensaje": "No se encontró una mascota con ese ID"
            });
        }
        const [resultado] = await pool.query(`
            UPDATE mascotas SET 
            nombre_mascota = ?, 
            fk_raza = ?, 
            image = ?, 
            fk_genero = ?, 
            fk_user = ? 
            WHERE id = ?`, [
            nombre_mascota || oldMascota[0].nombre_mascota,
            fk_raza || oldMascota[0].fk_raza,
            image || oldMascota[0].image,
            fk_genero || oldMascota[0].fk_genero,
            fk_user || oldMascota[0].fk_user,
            id
        ]);
        if (resultado.affectedRows > 0) {
            res.status(200).json({
                "mensaje": "La mascota ha sido actualizada con éxito"
            });
        } else {
            res.status(404).json({
                "mensaje": "No se pudo actualizar la mascota"
            });
        }
    } catch (error) {
        res.status(500).json({
            "mensaje": error.message
        });
    }
};


// Mostrar una mascota por ID
export const mostrarUnaMascota = async (req, res) => {
    try {
        const { id } = req.params;
        const [resultado] = await pool.query("SELECT * FROM mascotas WHERE id = ?", [id]);
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(404).json({
                "mensaje": "No se encontró esta mascota"
            });
        }
    } catch (error) {
        res.status(500).json({
            "mensaje": error
        });
    }
};

// Eliminar una mascota
export const eliminarUnaMascota = async (req, res) => {
    try {
        const { id } = req.params;
        const [resultado] = await pool.query("DELETE FROM mascotas WHERE id = ?", [id]);

        if (resultado.affectedRows > 0) {
            res.status(200).json({
                "mensaje": "Se eliminó exitosamente la mascota y los registros relacionados"
            });
        } else {
            res.status(404).json({
                "mensaje": "No se encontró ninguna mascota con ese ID y no se pudo eliminar"
            });
        }
    } catch (error) {
        res.status(500).json({
            "mensaje": error
        });
    }
};

// Contar todas las mascotas
export const contarMascotas = async (req, res) => {
    try {
        const [resultado] = await pool.query("SELECT COUNT(*) as total FROM mascotas");
        if (resultado[0].total === 0) {
            res.status(404).json({ mensaje: "No se encontraron mascotas" });
        } else {
            res.status(200).json({ total: resultado[0].total });
        }
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};
