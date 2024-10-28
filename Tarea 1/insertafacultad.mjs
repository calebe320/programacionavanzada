import sqlite3 from 'sqlite3';
import readline from 'readline';

const FILENAME = 'BasePA.s3db';
const SQL_INSERT_FACULTAD = "INSERT INTO facultad (nombre) VALUES (?);";

// Configurar readline para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function insertaFacultad(nombre) {
    const db = new sqlite3.Database(FILENAME);

    db.run(SQL_INSERT_FACULTAD, [nombre], function(err) {
        if (err) {
            console.log('Error inserting facultad:');
            console.log(err);
        } else {
            console.log(`Facultad insertada con ID ${this.lastID}`);
        }
        db.close(); // Cierra la conexión
        rl.close(); // Cierra la interfaz de readline
    });
}

// Pregunta al usuario por el nombre de la facultad
rl.question('Introduce el nombre de la facultad: ', (nombre) => {
    insertaFacultad(nombre);
});
