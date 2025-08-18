import {body} from "express-validator";

export const tareaDTO = [
    body('titulo').isString().notEmpty().withMessage("Tílulo inválido"),
    body('descripcion').isString().notEmpty().withMessage("Descrición inválido"),
    body('fechaLimite').isISO8601().withMessage("La fecha debe estar en formato (YYYY-MM-DD)").toDate(),
    body('responsable').isString().notEmpty().withMessage("Responsable inválido"),
]

export const estadoDTO = [
    body('nuevoEstado').isString().notEmpty().withMessage("Estado inválido"),
]