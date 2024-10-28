import sqlite3 from 'sqlite3'
const FILENAME='BasePA.s3db'
const SQL_SELECT="SELECT * FROM salones;"
const SQL_SELECT_SALONES_CAPACIDAD_MAYOR_40 = "SELECT * FROM salones WHERE capacidad > 40;";

function muestraSalonesCapacidadMayor40() {
    const db = new sqlite3.Database(FILENAME);
    db.all(SQL_SELECT_SALONES_CAPACIDAD_MAYOR_40, [], (err, result) => {
        if (err) {
            console.log('Error running sql: ' + SQL_SELECT_SALONES_CAPACIDAD_MAYOR_40);
            console.log(err);
        } else {
            console.log("Salones con capacidad mayor a 40:", result);
        }
    });
}

function muestrasalones(){
    const db = new sqlite3.Database(FILENAME)
    db.all(SQL_SELECT, [], (err, result) => {
        if (err) {
            console.log('Error running sql: ' + sql)
            console.log(err)
            
        } else {
            console.log("Datos:",result)
        }
    })
}
muestrasalones()
muestraSalonesCapacidadMayor40()