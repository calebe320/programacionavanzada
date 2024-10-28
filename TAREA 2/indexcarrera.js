// usar Dao
import AppDaoBetterSQLite from './DaoBetterSqlite3.js';
import ModelCarrera from "./model.carrera.js"; // Asegúrate de que el nombre del archivo sea correcto

const controllerDB = new AppDaoBetterSQLite('BasePA.s3db');
const mc = new ModelCarrera(controllerDB);

// 1. Insertar un nuevo registro
// const insertResp = mc.insert(["Ingeniería en Sistemas", "4 años", "Facultad de Ingeniería"]);
// console.log("Insertar:", insertResp);

// 2. Obtener todos los registros
// const allResp = mc.getAll();
// console.log("Todas las carreras:", allResp);

// 3. Obtener un registro específico
// const singleResp = mc.get(1); 
// console.log("Carrera con ID 1:", singleResp);

// 4. Actualizar un registro
// const updateResp = mc.update(1, ["Ingeniería en Redes", "3 años", "Facultad de Ingeniería"]); // Cambiar el ID 
// console.log("Actualizar:", updateResp);

// 5. Hacer un patch (actualizar un campo específico)
// const patchResp = mc.patch(1, "duracion", "4 años"); // Cambia el ID 
// console.log("Actualizar solo la duración:", patchResp);

// 6. Borrar un registro
const deleteResp = mc.delete(1); // Cambiar el ID 
console.log("Borrar carrera:", deleteResp);

