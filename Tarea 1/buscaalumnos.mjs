import sqlite3 from 'sqlite3';
import readline from 'readline';

const FILENAME = 'BasePA.s3db';
const SQL_BUSCA_ALUMNO = "SELECT * FROM alumno WHERE nombre = ?;";

// Configurar readline para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function buscaAlumno(nombre) {
    const db = new sqlite3.Database(FILENAME);

    db.all(SQL_BUSCA_ALUMNO, [nombre], (err, result) => {
        if (err) {
            console.log('Error running sql: ' + SQL_BUSCA_ALUMNO);
            console.log(err);
        } else {
            console.log(`Datos de alumno(s) con nombre ${nombre}:`, result);
        }
        db.close(); // Cierra la conexión
        rl.close(); // Cierra la interfaz de readline
    });
}

// Pregunta al usuario por el nombre del alumno
rl.question('Introduce el nombre del alumno a buscar: ', (nombre) => {
    buscaAlumno(nombre);
});
