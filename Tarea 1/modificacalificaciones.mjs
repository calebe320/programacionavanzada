import sqlite3 from 'sqlite3';
import readline from 'readline';

const FILENAME = 'BasePA.s3db';
const SQL_MODIFICA_CALIFICACION = "UPDATE calificaciones SET nota = ? WHERE alumno_id = ?;";

// Configurar readline para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function modificaCalificacion(nota, alumnoId) {
    const db = new sqlite3.Database(FILENAME);

    db.run(SQL_MODIFICA_CALIFICACION, [nota, alumnoId], function(err) {
        if (err) {
            console.log('Error modifying calificación:');
            console.log(err);
        } else {
            console.log(`Calificación del alumno con ID ${alumnoId} modificada`);
        }
        db.close(); // Cierra la conexión
        rl.close(); // Cierra la interfaz de readline
    });
}

// Pregunta al usuario por la nueva nota y el ID del alumno
rl.question('Introduce la nueva nota: ', (nota) => {
    rl.question('Introduce el ID del alumno cuya calificación deseas modificar: ', (alumnoId) => {
        modificaCalificacion(nota, alumnoId);
    });
});
