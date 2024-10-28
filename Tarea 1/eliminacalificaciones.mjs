import sqlite3 from 'sqlite3';
import readline from 'readline';

const FILENAME = 'BasePA.s3db';
const SQL_ELIMINA_CALIFICACION = "DELETE FROM calificaciones WHERE alumno_id = ?;";

// Configurar readline para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function eliminaCalificacion(alumnoId) {
    const db = new sqlite3.Database(FILENAME);

    db.run(SQL_ELIMINA_CALIFICACION, [alumnoId], function(err) {
        if (err) {
            console.log('Error deleting calificación:');
            console.log(err);
        } else {
            console.log(`Calificación del alumno con ID ${alumnoId} eliminada`);
        }
        db.close(); // Cierra la conexión
        rl.close(); // Cierra la interfaz de readline
    });
}

// Pregunta al usuario por el ID del alumno
rl.question('Introduce el ID del alumno para eliminar su calificación: ', (alumnoId) => {
    eliminaCalificacion(alumnoId);
});
