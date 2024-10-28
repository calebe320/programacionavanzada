// usar Dao
import AppDaoBetterSQLite from './DaoBetterSqlite3.js';
import ModelSalones from './model.salones.js';

const controllerDB = new AppDaoBetterSQLite('BasePA.s3db');
const mc = new ModelSalones(controllerDB);

// 1. Insertar un nuevo registro
// const insertResp = mc.insert(["A101", 30, "Edificio Central"]);
// console.log("Insertar:", insertResp);

// 2. Obtener todos los registros
 const allResp = mc.getAll();
 console.log("Todos los salones:", allResp);

// 3. Obtener un registro específico
// const singleResp = mc.get(1); 
// console.log("Salón con ID 1:", singleResp);

// 4. Actualizar un registro
// const updateResp = mc.update(1, ["B202", 35, "Edificio Sur"]);
// console.log("Actualizar:", updateResp);

// 5. Hacer un patch (actualizar un campo específico)
// const patchResp = mc.patch(1, "capacidad", 40);
// console.log("Actualizar solo la capacidad:", patchResp);

// 6. Borrar un registro
// const deleteResp = mc.delete(1); 
// console.log("Borrar salón:", deleteResp);
