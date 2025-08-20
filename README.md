# 📌 TareasYa

**Autores:**  
- Nicole Ordoñez  
- Juan David Bermeo  

---

## 🌐 Repositorio Frontend

👉 [TareasYa Frontend](https://github.com/JuanDavidBermeoCastro1234/frontend_AppWeb-.git)

## 📄 Video

Video de exposición:  
[📥 Ver video](https://drive.google.com/drive/folders/1yN_T8FRu4zXfey4DFQAPOC60FhWtAWdJ?usp=sharing)

---

## 📖 Descripción del proyecto
**TareasYa** es una aplicación web diseñada para la **gestión de tareas** de manera rápida y sencilla.  
La temática elegida busca facilitar el registro, organización y actualización de tareas, permitiendo asignar responsables, establecer fechas límite y cambiar su estado según el progreso.  

Con esta aplicación podrás:
- Crear nuevas tareas con detalles como título, descripción, fecha límite y responsable.
- Visualizar todas las tareas registradas.
- Filtrar tareas por estado.
- Actualizar el estado de las tareas según avancen.

---

## 🛠️ Tecnologías usadas
### Backend
- **Node.js** con **Express**  
- **MongoDB** como base de datos  
- **Express-validator** para validaciones  

### Frontend
- **React**  
- **TypeScript**  
- **Vite** como empaquetador  

---

## 🚀 Pasos para instalar y ejecutar

### 🔹 Backend
1. Clonar el repositorio:  
   ```bash
   git clone https://github.com/nicoleordonezc/backend_AppWeb.git
   cd backend
```

2. Instalar dependencias:

   npm install
   ```
3. Configurar la conexión a la base de datos en el archivo `db/config.js`.
4. Iniciar el servidor:

   ```bash
   npm run dev
   ```

El backend quedará disponible en:
`http://localhost:5500`

---

### 🔹 Frontend

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/JuanDavidBermeoCastro1234/frontend_AppWeb-.git
   cd frontend
   ```
2. Instalar dependencias:

   ```bash
   npm install
   ```
3. Iniciar la aplicación:

   ```bash
   npm run dev
   ```

El frontend quedará disponible en:
`http://localhost:5173`

---

## 📡 Ejemplos de Endpoints y Consumo

### 1. Obtener todas las tareas

**GET** `/getall`

```bash
curl -X GET http://localhost:5500/getall
```

### 2. Obtener tareas por estado

**GET** `/get/:estado`

```bash
curl -X GET http://localhost:5500/get/pendiente
```

### 3. Crear una nueva tarea

**POST** `/postTarea`

```bash
curl -X POST http://localhost:5500/postTarea \
-H "Content-Type: application/json" \
-d '{
  "titulo": "Hacer el informe",
  "descripcion": "Preparar el informe mensual",
  "fechaLimite": "2025-08-25",
  "responsable": "Nicole"
}'
```

### 4. Cambiar estado de una tarea

**PATCH** `/patch/:nombreTarea`

```bash
curl -X PATCH http://localhost:5500/patch/Hacer%20el%20informe \
-H "Content-Type: application/json" \
-d '{
  "nuevoEstado": "completada"
}'
```

