import sqlite3 from 'sqlite3';
import readline from 'readline';

const FILENAME = 'BasePA.s3db';
const SQL_BUSCA_CURSO = "SELECT * FROM cursos WHERE nombre = ?;";

// Configurar readline para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function buscaCurso(nombreCurso) {
    const db = new sqlite3.Database(FILENAME);

    db.all(SQL_BUSCA_CURSO, [nombreCurso], (err, result) => {
        if (err) {
            console.log('Error running sql: ' + SQL_BUSCA_CURSO);
            console.log(err);
        } else {
            console.log(`Datos del curso con nombre "${nombreCurso}":`, result);
        }
        db.close(); // Cierra la conexión
        rl.close(); // Cierra la interfaz de readline
    });
}

// Pregunta al usuario por el nombre del curso
rl.question('Introduce el nombre del curso para buscar: ', (nombre) => {
    buscaCurso(nombre);
});
