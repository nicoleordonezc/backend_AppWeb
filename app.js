//imports
import dotenv from "dotenv";
import express from "express";
import connect from "./db/config.js";
import cors from "cors"
import tareasRouter from "./routers/tareaRouters.js"

//Config
dotenv.config();

const port = process.env.PORT || 5500;
const app = express();

app.use(express.json());
app.use(cors());

//Rutas
app.use("/TareasYa", tareasRouter);

connect().then(()=>{
    app.listen(port, ()=>{
        console.log("http://localhost:" + port);
        
    })
})