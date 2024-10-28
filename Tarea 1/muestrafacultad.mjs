import sqlite3 from 'sqlite3'
const FILENAME='BasePA.s3db'
const SQL_SELECT="SELECT * FROM facultad;"
const SQL_SELECT_FACULTAD_EDIFICIO_A = "SELECT * FROM facultad WHERE ubicacion = 'Edificio A';";

function muestraFacultadEdificioA() {
    const db = new sqlite3.Database(FILENAME);
    db.all(SQL_SELECT_FACULTAD_EDIFICIO_A, [], (err, result) => {
        if (err) {
            console.log('Error running sql: ' + SQL_SELECT_FACULTAD_EDIFICIO_A);
            console.log(err);
        } else {
            console.log("Facultades en Edificio A:", result);
        }
    });
}

function muestrafacultad(){
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
muestrafacultad()
muestraFacultadEdificioA()