import sqlite3 from 'sqlite3'
const FILENAME='BasePA.s3db'
const SQL_SELECT="SELECT * FROM calificaciones;"
const SQL_SELECT_CALIFICACIONES_MAYORES_75 = "SELECT * FROM calificaciones WHERE calificacion > 75;";

function muestraCalificacionesMayores75() {
    const db = new sqlite3.Database(FILENAME);
    db.all(SQL_SELECT_CALIFICACIONES_MAYORES_75, [], (err, result) => {
        if (err) {
            console.log('Error running sql: ' + SQL_SELECT_CALIFICACIONES_MAYORES_75);
            console.log(err);
        } else {
            console.log("Calificaciones mayores a 75:", result);
        }
    });
}
function muestracalificaciones(){
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
muestracalificaciones()