import sqlite3 from 'sqlite3';
import readline from 'readline';

const FILENAME = 'BasePA.s3db';
const SQL_MODIFICA_CURSO = "UPDATE cursos SET nombre = ? WHERE id = ?;";

// Configurar readline para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function modificaCurso(nombre, id) {
    const db = new sqlite3.Database(FILENAME);

    db.run(SQL_MODIFICA_CURSO, [nombre, id], function(err) {
        if (err) {
            console.log('Error modifying curso:');
            console.log(err);
        } else {
            console.log(`Curso con ID ${id} modificado`);
        }
        db.close(); // Cierra la conexión
        rl.close(); // Cierra la interfaz de readline
    });
}

// Pregunta al usuario por el nuevo nombre y el ID del curso
rl.question('Introduce el nuevo nombre del curso: ', (nombre) => {
    rl.question('Introduce el ID del curso a modificar: ', (id) => {
        modificaCurso(nombre, id);
    });
});
