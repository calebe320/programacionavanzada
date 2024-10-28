import sqlite3 from 'sqlite3';
import readline from 'readline';

const FILENAME = 'BasePA.s3db';
const SQL_MODIFICA_CARRERA = "UPDATE carrera SET nombre = ? WHERE id = ?;";

// Configurar readline para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function modificaCarrera(nombre, id) {
    const db = new sqlite3.Database(FILENAME);

    db.run(SQL_MODIFICA_CARRERA, [nombre, id], function(err) {
        if (err) {
            console.log('Error modifying carrera:');
            console.log(err);
        } else {
            console.log(`Carrera con ID ${id} modificada`);
        }
        db.close(); // Cierra la conexión
        rl.close(); // Cierra la interfaz de readline
    });
}

// Pregunta al usuario por el nuevo nombre y el ID de la carrera
rl.question('Introduce el nuevo nombre de la carrera: ', (nombre) => {
    rl.question('Introduce el ID de la carrera a modificar: ', (id) => {
        modificaCarrera(nombre, id);
    });
});
