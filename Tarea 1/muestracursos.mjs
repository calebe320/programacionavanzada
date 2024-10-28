import sqlite3 from 'sqlite3'
const FILENAME='BasePA.s3db'
const SQL_SELECT="SELECT * FROM cursos;"
const SQL_SELECT_CURSOS_CREDITOS_MAYORES_4 = "SELECT * FROM cursos WHERE creditos > 4;";

function muestraCursosCreditosMayor4() {
    const db = new sqlite3.Database(FILENAME);
    db.all(SQL_SELECT_CURSOS_CREDITOS_MAYORES_4, [], (err, result) => {
        if (err) {
            console.log('Error running sql: ' + SQL_SELECT_CURSOS_CREDITOS_MAYORES_4);
            console.log(err);
        } else {
            console.log("Cursos con más de 4 créditos:", result);
        }
    });
}

function muestracursos(){
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
muestracursos()
muestraCursosCreditosMayor4()