import sqlite3 from 'sqlite3';
import readline from 'readline';

const FILENAME = 'BasePA.s3db';
const SQL_MODIFICA_PROFESOR = "UPDATE profesores SET nombre = ? WHERE id = ?;";

// Configurar readline para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function modificaProfesor(nombre, id) {
    const db = new sqlite3.Database(FILENAME);

    db.run(SQL_MODIFICA_PROFESOR, [nombre, id], function(err) {
        if (err) {
            console.log('Error modifying profesor:');
            console.log(err);
        } else {
            console.log(`Profesor con ID ${id} modificado`);
        }
        db.close(); // Cierra la conexión
        rl.close(); // Cierra la interfaz de readline
    });
}

// Pregunta al usuario por el nuevo nombre y el ID del profesor
rl.question('Introduce el nuevo nombre del profesor: ', (nombre) => {
    rl.question('Introduce el ID del profesor a modificar: ', (id) => {
        modificaProfesor(nombre, id);
    });
});
