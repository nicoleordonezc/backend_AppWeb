import {body} from "express-validator";

export const tareaDTO = [
    body('titulo').isString().notEmpty().withMessage("Tílulo inválido"),
    body('descripcion').isString().notEmpty().withMessage("Descrición inválido"),
    body('fechaLimite').isDate().notEmpty().withMessage("Fecha inválida"),
    body('responsable').isString().notEmpty().withMessage("Responsable inválido"),
]

export const estadoDTO = [
    body('nuevoEstado').isString().notEmpty().withMessage("El nuevo estado no es válido"),
]