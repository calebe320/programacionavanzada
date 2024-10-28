import sqlite3 from 'sqlite3';
import readline from 'readline';

const FILENAME = 'BasePA.s3db';
const SQL_INSERT_CALIFICACION = "INSERT INTO calificaciones (alumno_id, curso_id, calificacion) VALUES (?, ?, ?);";

// Configurar readline para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function insertaCalificacion(alumnoId, cursoId, calificacion) {
    const db = new sqlite3.Database(FILENAME);

    db.run(SQL_INSERT_CALIFICACION, [alumnoId, cursoId, calificacion], function(err) {
        if (err) {
            console.log('Error inserting calificación:');
            console.log(err);
        } else {
            console.log(`Calificación insertada con ID ${this.lastID}`);
        }
        db.close(); // Cierra la conexión
        rl.close(); // Cierra la interfaz de readline
    });
}

// Pregunta al usuario por los datos de la calificación
rl.question('Introduce el ID del alumno: ', (alumnoId) => {
    rl.question('Introduce el ID del curso: ', (cursoId) => {
        rl.question('Introduce la calificación: ', (calificacion) => {
            insertaCalificacion(alumnoId, cursoId, calificacion);
        });
    });
});
