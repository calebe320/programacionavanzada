// usar Dao
import AppDaoBetterSQLite from './DaoBetterSqlite3.js';
import ModelCursos from "./model.cursos.js";

const controllerDB = new AppDaoBetterSQLite('BasePA.s3db');
const mc = new ModelCursos(controllerDB);

// 1. Insertar un nuevo registro
const insertResp = mc.insert(["Curso de Prueba", 9, 2]);
console.log("Insertar:", insertResp);

// 2. Obtener todos los registros
//const allResp = mc.getAll();
//console.log("Todos los cursos:", allResp);

// 3. Obtener un registro específico
//const singleResp = mc.get(1); // Cambia el ID según lo necesites
// console.log("Curso con ID 1:", singleResp);

// 4. Actualizar un registro
// const updateResp = mc.update(1, ["Curso de Programación Avanzada", 6, 3]); // Cambia el ID y datos según sea necesario
// console.log("Actualizar:", updateResp);

// 5. Hacer un patch (actualizar un campo específico)
// const patchResp = mc.patch(1, "nombre", "Curso de Programación Básica"); // Cambia el ID y el campo según sea necesario
// console.log("Actualizar solo el nombre:", patchResp);

// 6. Borrar un registro
 const deleteResp = mc.delete(13); // Cambia el ID según lo necesites
console.log("Borrar curso:", deleteResp);
