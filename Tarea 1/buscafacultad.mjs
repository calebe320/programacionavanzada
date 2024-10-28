import sqlite3 from 'sqlite3';
import readline from 'readline';

const FILENAME = 'BasePA.s3db';
const SQL_BUSCA_FACULTAD = "SELECT * FROM facultad WHERE nombre = ?;";

// Configurar readline para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function buscaFacultad(nombreFacultad) {
    const db = new sqlite3.Database(FILENAME);

    db.all(SQL_BUSCA_FACULTAD, [nombreFacultad], (err, result) => {
        if (err) {
            console.log('Error running sql: ' + SQL_BUSCA_FACULTAD);
            console.log(err);
        } else {
            console.log(`Datos de la facultad con nombre "${nombreFacultad}":`, result);
        }
        db.close(); // Cierra la conexión
        rl.close(); // Cierra la interfaz de readline
    });
}

// Pregunta al usuario por el nombre de la facultad
rl.question('Introduce el nombre de la facultad para buscar: ', (nombre) => {
    buscaFacultad(nombre);
});
