import express from 'express';

const router = express.Router();

router.get('/:idioma', (req, res) => {
    const idioma = req.params.idioma.toLowerCase();
    const traducciones = {
        en: { saludo: "Hello" },
        es: { saludo: "Hola" },
    };

    const traduccion = traducciones[idioma];
    if (!traduccion) {
        res.status(404).send('Traducción no encontrada para el idioma especificado.');
    } else {
        res.json(traduccion);
    }
});

export default router;
