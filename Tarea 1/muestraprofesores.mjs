import sqlite3 from 'sqlite3'
const FILENAME='BasePA.s3db'
const SQL_SELECT="SELECT * FROM profesores;"
const SQL_SELECT_PROFESORES_MAYORES_40 = "SELECT * FROM profesores WHERE edad > 40;";

function muestraProfesoresMayores40() {
    const db = new sqlite3.Database(FILENAME);
    db.all(SQL_SELECT_PROFESORES_MAYORES_40, [], (err, result) => {
        if (err) {
            console.log('Error running sql: ' + SQL_SELECT_PROFESORES_MAYORES_40);
            console.log(err);
        } else {
            console.log("Profesores mayores de 40 años:", result);
        }
    });
}

function muestraprofesores(){
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
muestraprofesores()
muestraProfesoresMayores40()