// usar Dao
import AppDaoBetterSQLite from './DaoBetterSqlite3.js';
import ModelProfesores from './model.profesores.js';

const controllerDB = new AppDaoBetterSQLite('BasePA.s3db');
const mc = new ModelProfesores(controllerDB);

// 1. Insertar un nuevo registro
// const insertResp = mc.insert(["Juan", "Pérez", 40]);
// console.log("Insertar:", insertResp);

// 2. Obtener todos los registros
 const allResp = mc.getAll();
 console.log("Todos los profesores:", allResp);

// 3. Obtener un registro específico
// const singleResp = mc.get(1); 
// console.log("Profesor con ID 1:", singleResp);

// 4. Actualizar un registro
// const updateResp = mc.update(1, ["María", "Gómez", 35]);
// console.log("Actualizar:", updateResp);

// 5. Hacer un patch (actualizar un campo específico)
// const patchResp = mc.patch(1, "edad", 45);
// console.log("Actualizar solo la edad:", patchResp);

// 6. Borrar un registro
// const deleteResp = mc.delete(1); 
// console.log("Borrar profesor:", deleteResp);
