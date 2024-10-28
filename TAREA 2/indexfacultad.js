// usar Dao
import AppDaoBetterSQLite from './DaoBetterSqlite3.js';
import ModelFacultad from './model.facultad.js';

const controllerDB = new AppDaoBetterSQLite('BasePA.s3db');
const mc = new ModelFacultad(controllerDB);

// 1. Insertar un nuevo registro
// const insertResp = mc.insert(["Facultad de Ingeniería", "10 años", "1"]);
// console.log("Insertar:", insertResp);

// 2. Obtener todos los registros
 const allResp = mc.getAll();
 console.log("Todas las facultades:", allResp);

// 3. Obtener un registro específico
// const singleResp = mc.get(1); 
// console.log("Facultad con ID 1:", singleResp);

// 4. Actualizar un registro
// const updateResp = mc.update(1, ["Facultad de Ciencias", "12 años", "1"]);
// console.log("Actualizar:", updateResp);

// 5. Hacer un patch (actualizar un campo específico)
// const patchResp = mc.patch(1, "nombre", "Facultad de Artes");
// console.log("Actualizar solo el nombre:", patchResp);

// 6. Borrar un registro
// const deleteResp = mc.delete(1); 
// console.log("Borrar facultad:", deleteResp);
