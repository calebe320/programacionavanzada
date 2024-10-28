import sqlite3 from 'sqlite3'
const FILENAME='BasePA.s3db'
const SQL_SELECT="SELECT * FROM carrera;"
const SQL_SELECT_CARRERAS_DURACION_MAYOR_4 = "SELECT * FROM carrera WHERE duracion > 4;";

function muestraCarrerasDuracionMayor4() {
    const db = new sqlite3.Database(FILENAME);
    db.all(SQL_SELECT_CARRERAS_DURACION_MAYOR_4, [], (err, result) => {
        if (err) {
            console.log('Error running sql: ' + SQL_SELECT_CARRERAS_DURACION_MAYOR_4);
            console.log(err);
        } else {
            console.log("Carreras con duración mayor a 4 años:", result);
        }
    });
}

function muestracarrera(){
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
muestracarrera()
muestraCarrerasDuracionMayor4()