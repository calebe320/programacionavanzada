// usar Dao
import AppDaoBetterSQLite from './DaoBetterSqlite3.js';
import ModelCalificaciones from "./model.calificaciones.js";

const controllerDB = new AppDaoBetterSQLite('BasePA.s3db');
const mc = new ModelCalificaciones(controllerDB);

// 1. Insertar un nuevo registro
// const insertResp = mc.insert([1, 1, 95]); // curso_id, alumno_id, calificacion
// console.log("Insertar:", insertResp);

// 2. Obtener todos los registros
// const allResp = mc.getAll();
// console.log("Todas las calificaciones:", allResp);

// 3. Obtener un registro específico
const singleResp = mc.get(1); 
console.log("Calificación con ID 1:", singleResp);

// 4. Actualizar un registro
// const updateResp = mc.update(1, [2, 1, 90]); // curso_id, alumno_id, calificacion
// console.log("Actualizar:", updateResp);

// 5. Hacer un patch (actualizar un campo específico)
// const patchResp = mc.patch(1, "calificacion", 100); // Cambia el ID 
// console.log("Actualizar solo la calificación:", patchResp);

// 6. Borrar un registro
// const deleteResp = mc.delete(1); // Cambiar el ID 
// console.log("Borrar calificación:", deleteResp);
