import { Router } from "express";
import {
    actualizarUnaMascota,
    crearUnaMascota,
    eliminarUnaMascota,
    listarTodasLasMascotas,
    mostrarUnaMascota,
    contarMascotas
} from "../controller/mascotas.controller.js";
import { middlewaresCreateMascotas, middlewaresUpdateMascotas } from "../middlewares/mascotas.middleware.js";

const router = Router();

router.get("/mascotas/contar", contarMascotas);
router.get("/mascotas", listarTodasLasMascotas);
router.post("/mascotas", middlewaresCreateMascotas, crearUnaMascota);
router.put("/mascotas/:id", middlewaresUpdateMascotas, actualizarUnaMascota);
router.get("/mascotas/:id", mostrarUnaMascota);
router.delete("/mascotas/:id", eliminarUnaMascota);

export default router;
