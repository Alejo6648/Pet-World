import { check } from 'express-validator';

export const middlewaresCreateMascotas = [
    check('nombre_mascota', 'El nombre de la mascota es obligatorio').not().isEmpty().isLength({ min: 3, max: 100 }),
    check('fk_raza', 'La raza debe ser un número válido').isInt(),
    check('image', 'La URL de la imagen debe ser válida').optional().isURL(),
    check('fk_genero', 'El género debe ser un número válido').optional().isInt(),
    check('fk_user', 'El usuario asociado debe ser un número válido').optional().isInt()
];

export const middlewaresUpdateMascotas = [
    check('nombre_mascota', 'El nombre de la mascota es obligatorio').optional().not().isEmpty().isLength({ min: 3, max: 100 }),
    check('fk_raza', 'La raza debe ser un número válido').optional().isInt(),
    check('image', 'La URL de la imagen debe ser válida').optional().isURL(),
    check('fk_genero', 'El género debe ser un número válido').optional().isInt(),
    check('fk_user', 'El usuario asociado debe ser un número válido').optional().isInt()
];
