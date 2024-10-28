import sqlite3 from 'sqlite3'
const FILENAME='BasePA.s3db'
const SQL_SELECT="SELECT * FROM alumno;"
const SQL_SELECT_ALUMNOS_MAYORES_20 = "SELECT * FROM alumno WHERE anio > 20;";

function muestraAlumnosMayores20() {
    const db = new sqlite3.Database(FILENAME);
    db.all(SQL_SELECT_ALUMNOS_MAYORES_20, [], (err, result) => {
        if (err) {
            console.log('Error running sql: ' + SQL_SELECT_ALUMNOS_MAYORES_20);
            console.log(err);
        } else {
            console.log("Alumnos mayores de 20 años:", result);
        }
    });
}

function muestraalumno(){
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
muestraalumno()
muestraAlumnosMayores20()