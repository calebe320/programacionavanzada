import sqlite3 from 'sqlite3';
import readline from 'readline';

const FILENAME = 'BasePA.s3db';
const SQL_BUSCA_SALON = "SELECT * FROM salones WHERE nombre = ?;";

// Configurar readline para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function buscaSalon(nombreSalon) {
    const db = new sqlite3.Database(FILENAME);

    db.all(SQL_BUSCA_SALON, [nombreSalon], (err, result) => {
        if (err) {
            console.log('Error running sql: ' + SQL_BUSCA_SALON);
            console.log(err);
        } else {
            console.log(`Datos del salón con nombre "${nombreSalon}":`, result);
        }
        db.close(); // Cierra la conexión
        rl.close(); // Cierra la interfaz de readline
    });
}

// Pregunta al usuario por el nombre del salón
rl.question('Introduce el nombre del salón para buscar: ', (nombre) => {
    buscaSalon(nombre);
});
