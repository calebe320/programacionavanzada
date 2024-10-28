import sqlite3 from 'sqlite3';
import readline from 'readline';

const FILENAME = 'BasePA.s3db';
const SQL_BUSCA_PROFESOR = "SELECT * FROM profesores WHERE nombre = ?;";

// Configurar readline para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function buscaProfesor(nombreProfesor) {
    const db = new sqlite3.Database(FILENAME);

    db.all(SQL_BUSCA_PROFESOR, [nombreProfesor], (err, result) => {
        if (err) {
            console.log('Error running sql: ' + SQL_BUSCA_PROFESOR);
            console.log(err);
        } else {
            console.log(`Datos del profesor con nombre "${nombreProfesor}":`, result);
        }
        db.close(); // Cierra la conexión
        rl.close(); // Cierra la interfaz de readline
    });
}

// Pregunta al usuario por el nombre del profesor
rl.question('Introduce el nombre del profesor para buscar: ', (nombre) => {
    buscaProfesor(nombre);
});
