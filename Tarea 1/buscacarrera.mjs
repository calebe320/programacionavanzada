import sqlite3 from 'sqlite3';
import readline from 'readline';

const FILENAME = 'BasePA.s3db';
const SQL_BUSCA_CARRERA = "SELECT * FROM carrera WHERE nombre = ?;";

// Configurar readline para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function buscaCarrera(nombreCarrera) {
    const db = new sqlite3.Database(FILENAME);

    db.all(SQL_BUSCA_CARRERA, [nombreCarrera], (err, result) => {
        if (err) {
            console.log('Error running sql: ' + SQL_BUSCA_CARRERA);
            console.log(err);
        } else {
            console.log(`Datos de la carrera con nombre "${nombreCarrera}":`, result);
        }
        db.close(); // Cierra la conexión
        rl.close(); // Cierra la interfaz de readline
    });
}

// Pregunta al usuario por el nombre de la carrera
rl.question('Introduce el nombre de la carrera para buscar: ', (nombre) => {
    buscaCarrera(nombre);
});
