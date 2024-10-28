import sqlite3 from 'sqlite3';
import readline from 'readline';

const FILENAME = 'BasePA.s3db';
const SQL_INSERT_SALON = "INSERT INTO salones (nombre) VALUES (?);";

// Configurar readline para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function insertaSalon(nombre) {
    const db = new sqlite3.Database(FILENAME);

    db.run(SQL_INSERT_SALON, [nombre], function(err) {
        if (err) {
            console.log('Error inserting salón:');
            console.log(err);
        } else {
            console.log(`Salón insertado con ID ${this.lastID}`);
        }
        db.close(); // Cierra la conexión
        rl.close(); // Cierra la interfaz de readline
    });
}

// Pregunta al usuario por el nombre del salón
rl.question('Introduce el nombre del salón: ', (nombre) => {
    insertaSalon(nombre);
});
