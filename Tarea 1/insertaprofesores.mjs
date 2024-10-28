import sqlite3 from 'sqlite3';
import readline from 'readline';

const FILENAME = 'BasePA.s3db';
const SQL_INSERT_PROFESOR = "INSERT INTO profesores (nombre) VALUES (?);";

// Configurar readline para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function insertaProfesor(nombre) {
    const db = new sqlite3.Database(FILENAME);

    db.run(SQL_INSERT_PROFESOR, [nombre], function(err) {
        if (err) {
            console.log('Error inserting profesor:');
            console.log(err);
        } else {
            console.log(`Profesor insertado con ID ${this.lastID}`);
        }
        db.close(); // Cierra la conexión
        rl.close(); // Cierra la interfaz de readline
    });
}

// Pregunta al usuario por el nombre del profesor
rl.question('Introduce el nombre del profesor: ', (nombre) => {
    insertaProfesor(nombre);
});
