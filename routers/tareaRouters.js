// imports
import { Router } from "express";
import { getDB } from "../db/config.js";

const router = Router();

//obtener todas las tareas
router.get("/getall", async function (req, res) {
    try {
        const TareasYa = await getDB().collection("tareas").find().toArray();
        res.status(200).json(TareasYa)
    } catch (error) {
        res.status(500).json({error: "Error interno del servidor"})
    }
})

//obtener tareas por estado

router.get("/get/:estado", async function (req, res) {
    try {
        const estadoTarea = req.params.estado;
        const tareasYa = await getDB().collection("tareas").find({estado:estadoTarea}).toArray();
        if (!tareasYa){
            res.status(404).json({error: "El estado no coincide"});
        };
        res.status(200).json(tareasYa)
    } catch (error) {
        res.status(500).json({error: "Error interno del servidor"})
    }
});

//Ingregar nueva tarea
router.post("/postTarea", async function (req, res) {
    try {
        const {titulo, descripcion, fechaLimite, responsable} = req.body;
        if(!titulo || !descripcion || !fechaLimite || !responsable){
             res.status(400).json({ error: "Datos invalidos"})
          };
        const nuevaTarea = {
            titulo,
            descripcion,
            fechaLimite,
            responsable,
            estado: null  
        };
        await getDB().collection("tareas").insertOne(nuevaTarea);
        res.status(201).json({message: "La tarea ha sido agregada exitosamente"})
    } catch (error) {
        res.status(500).json({error: "Error interno del servidor"})
    }
});

//Cambiar estado
router.patch("/patch/:nombreTarea", async function (req, res) {
    try {
        const idTarea = req.params.nombreTarea;  
        const tareaEditar = await getDB().collection("tareas").findOne({titulo:idTarea});
        if (!tareaEditar){
            res.status(404).json({error: "La tarea no existe"})
        };
        const {nuevoEstado} = req.body;
        await getDB().collection("tareas").updateOne({titulo:idTarea}, {$set:{estado:nuevoEstado}})
        res.status(201).json({message: "El estado de la tarea ha sido actualizado"})
    } catch (error) {
        res.status(500).json({error: "Error interno del servidor"})
    }
})

export default router;