// usar Dao
import AppDaoBetterSQLite from './DaoBetterSqlite3.js';
import ModelUsers from "./model.alumno.js";

const controllerDB = new AppDaoBetterSQLite('BasePA.s3db');
const mc = new ModelUsers(controllerDB);

// 1. Insertar un nuevo registro
//const insertResp = mc.insert(["2025", "jose luis cuevas", "jcuevas"]);
//console.log("Insertar:", insertResp);

// 2. Obtener todos los registros
//const allResp = mc.getAll();
//console.log("Todos los alumnos:", allResp);

// 3. Obtener un registro específico
//const singleResp = mc.get(1); 
//console.log("Alumno con ID 1:", singleResp);

// 4. Actualizar un registro
// const updateResp = mc.update(1, ["2026", "Juan", "Perez"]); // Cambiar el ID 
// console.log("Actualizar:", updateResp);


// 5. Hacer un patch (actualizar un campo específico)
// const patchResp = mc.patch(1, "nombre", "José"); // Cambia el ID 
// console.log("Actualizar solo el nombre:", patchResp);

// 6. Borrar un registro
const deleteResp = mc.delete(1); // Cambiar el ID 
console.log("Borrar alumno:", deleteResp);
