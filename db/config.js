import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.DB_URI;
const TareasYa = process.env.DB_NAME;

const client = new MongoClient(uri)
let db;

export default async function connect() {
    try {
        await client.connect();
        console.log("MongoDB está conectado ");
        db = client.db(TareasYa)
    } catch (error) {
        console.log("Error al conectar");
        
    }
};

export function getDB() {
    if (!db) {
        throw new Error("La base de datos no existe");
    }
    return db
}