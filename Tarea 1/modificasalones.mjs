import sqlite3 from 'sqlite3';
import readline from 'readline';

const FILENAME = 'BasePA.s3db';
const SQL_MODIFICA_SALON = "UPDATE salones SET nombre = ? WHERE id = ?;";

// Configurar readline para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function modificaSalon(nombre, id) {
    const db = new sqlite3.Database(FILENAME);

    db.run(SQL_MODIFICA_SALON, [nombre, id], function(err) {
        if (err) {
            console.log('Error modifying salón:');
            console.log(err);
        } else {
            console.log(`Salón con ID ${id} modificado`);
        }
        db.close(); // Cierra la conexión
        rl.close(); // Cierra la interfaz de readline
    });
}

// Pregunta al usuario por el nuevo nombre y el ID del salón
rl.question('Introduce el nuevo nombre del salón: ', (nombre) => {
    rl.question('Introduce el ID del salón a modificar: ', (id) => {
        modificaSalon(nombre, id);
    });
});
