import sqlite3 from 'sqlite3';
import readline from 'readline';

const FILENAME = 'BasePA.s3db';
const SQL_INSERT_CARRERA = "INSERT INTO carrera (nombre) VALUES (?);";

// Configurar readline para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function insertaCarrera(nombre) {
    const db = new sqlite3.Database(FILENAME);

    db.run(SQL_INSERT_CARRERA, [nombre], function(err) {
        if (err) {
            console.log('Error inserting carrera:');
            console.log(err);
        } else {
            console.log(`Carrera insertada con ID ${this.lastID}`);
        }
        db.close(); // Cierra la conexión
        rl.close(); // Cierra la interfaz de readline
    });
}

// Pregunta al usuario por el nombre de la carrera
rl.question('Introduce el nombre de la carrera: ', (nombre) => {
    insertaCarrera(nombre);
});
